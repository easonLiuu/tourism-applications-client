import React, { useState, useEffect } from 'react';
import Banner from './componments/Banner';
import Info from './componments/Info';
import Lists from './componments/Lists';
import Footer from './componments/Footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import { useLocation } from 'umi';


import './index.less'

export default function(props){
  const { house: { detail, getDetailAsync, getCommentsAsync, comments, reloadComments, reloadCommentsNum, showLoading, resetData }} = useStoreHook();
  const { query } = useLocation();

  /**
   * 1.监听loading是否展示出来
   * 2.触发reload, 修改分页
   * 3.监听reload变化, 重新请求接口
   * 4.拼装数据
   */
  useObserverHook('#' + CommonEnum.LOADING_ID, (entries) => {
    //console.log(entries)
    if(comments && comments.length && showLoading && entries[0].inIntersecting){
        reloadComments();
    }
  }, [comments, showLoading]);

  useEffect(() => {
    getDetailAsync({
        id: query?.id
    });
  }, [])

  useEffect(() => {
    getCommentsAsync({
    });
  }, [reloadCommentsNum])

  useEffect(()=>{
    return () => {
        resetData({
            detail: []
        })
    }   
  }, [])
  

  return (
    <div className='house-page'>
       {/**banner */}
       <Banner banner={detail?.banner}/>

       {/**房屋信息 */}
       <Info detail={detail?.info}/>

       {/**评论列表 */}
       <Lists lists={comments} showLoading={showLoading}/>

       {/**footer */}
       <Footer/>
    </div> 
  )
}