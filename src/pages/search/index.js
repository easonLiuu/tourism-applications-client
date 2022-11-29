import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import { useHttpHook } from '@/hooks'
import './index.less'

   
export default function(props){
  const [houseName, setHouseName] = useState('')

  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {

    }
  })

  const handleChange = (value) => {
    setHouseName(value)
  }

  const handleCancel = () => {

  }

  const handleSubmit = (value) => {

  }

  useEffect(() => {

  }, [])

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
      {loading ? <ActivityIndicator toast/> : <div className='result'>
        {houses.map(item => (
            <div className='item' key={item.id}> 
            <img alt='img' src={item.img}/>
            <div className='item-right'>
                <div className='title'>{item.title}</div>
                <div className='price'>{item.price}</div>
            </div>
        </div>
        ))}
      </div>}
      
    </div>
  )
}