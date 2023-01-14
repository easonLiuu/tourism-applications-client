import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook, useObserverHook, useImgHook } from '@/hooks';
import { useLocation } from 'umi';
import { ShowLoading } from '@/components';
import { CommonEnum} from '@/enums';
import './index.less'

   
export default function(props){
  const { query } = useLocation();
  const [houseName, setHouseName] = useState('');
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [houseLists, setHouseLists] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [houseSubmitName, setHouseSubmitName] = useState('');

  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {
      ...page,
      houseName,
      code: query?.code,
      startTime: query?.startTime + ' 00:00:00',
      endTime: query?.endTime + ' 23:59:59'
    },
    watch: [page.pageNum, houseSubmitName]
  })

  /**
   * 
   */

  useObserverHook('#' + CommonEnum.LOADING_ID,(entries) => {
    console.log(entries[0].isIntersecting)
    if(!loading && entries[0].isIntersecting) {
      setPage({
        ...page,
        pageNum: page.pageNum + 1
      });
    }   
  }, null);

  useImgHook('.item-img', (entries)=>{}, null);

  const handleChange = (value) => {
    setHouseName(value)
  };

  const _handleSubmit = (value) => {
    setHouseName(value);
    setHouseSubmitName(value);
    setPage(CommonEnum.PAGE);
    setHouseLists([])
  };

  const handleCancel = () => {
    _handleSubmit('');
  }

  const handleSubmit = (value) => {
    _handleSubmit(value)    
  }

  useEffect(() => {
    if(!loading && houses) {
      if(houses.length){
        setHouseLists([...houseLists, ...houses]);
        if(houses.length < page.pageSize){
          setShowLoading(false)
        }
      }else{
        setShowLoading(false)
      }
    }

  }, [loading])

  return (
    <div className='search-page'>
      {/*顶部搜索栏*/}
      <SearchBar
        placeholder='搜索民宿'
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />

      {/*搜索结果*/}
      {!houseLists.length ? <ActivityIndicator toast/> : <div className='result'>
        {houseLists.map(item => (
            <div className='item' key={item.id}> 
            <img alt='img' className='item-img' src={require('../../assets/blank.png')} data-src={item.img}/>
            <div className='item-right'>
                <div className='title'>{item.title}</div>
                <div className='price'>{item.price}</div>
            </div>
        </div>
        ))}
      </div>}
      <ShowLoading showLoading={showLoading}/>    
    </div>
  )
}