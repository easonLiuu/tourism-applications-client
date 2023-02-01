import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Info from './components/Info';
import Lists from './components/Lists';
import Footer from './components/Footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import { useLocation } from 'umi';

import './index.less';

export default function (props) {
  const {
    house: {
      detail,
      getDetailAsync,
      getCommentsAsync,
      comments,
      reloadComments,
      reloadCommentsNum,
      showLoading,
      resetData,
      order,
      hasOrderAsync,
      addOrderAsync,
      delOrderAsync,
    },
  } = useStoreHook();
  const { query } = useLocation();

  const handleBtnClick = (id) => {
    if (!id) {
      addOrderAsync({
        id: query?.id,
      });
    } else {
      delOrderAsync({
        id: query?.id,
      });
    }
  };

  /**
   * 1.监听loading是否展示出来
   * 2.触发reload, 修改分页
   * 3.监听reload变化, 重新请求接口
   * 4.拼装数据
   */
  useObserverHook(
    '#' + CommonEnum.LOADING_ID,
    (entries) => {
      //console.log(entries)

      if (comments && comments.length && showLoading && entries[0].isIntersecting) {
        console.log(entries);
        reloadComments();
      }
    },
    [comments, showLoading],
  );

  useEffect(() => {
    getDetailAsync({
      id: query?.id,
    });
  }, []);

  //解耦 方便管理代码
  useEffect(() => {
    getCommentsAsync({
      id: query?.id,
    });
  }, [reloadCommentsNum]);

  useEffect(() => {
    hasOrderAsync({
      id: query?.id,
    });
  }, []);

  //页面离开时 数据流数据清空
  useEffect(() => {
    return () => {
      resetData({
        detail: [],
      });
    };
  }, []);

  return (
    <div className="house-page">
      {/**banner */}
      <Banner banner={detail?.banner} />

      {/**房屋信息 */}
      <Info detail={detail?.info} order={order} btnClick={handleBtnClick} />

      {/**评论列表 */}
      <Lists lists={comments} showLoading={showLoading} />

      {/**footer */}
      <Footer />
    </div>
  );
}
