import React, { useState, useEffect } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';

export default function(props){
  const [config, setConfig] = useState({
    loop: true,
    autoplay: {
        delay: 1500
    },
    pagination: {
        el: '.swiper-pagination'
    }
  })

  useEffect(() => {

  }, [])

  return (
    <AwesomeSwiper className='banner' config={config}>     
            {props?.banner?.map(item => (
                <div className='swiper-wrapper' key={item.id}>
                    <div className='swiper-slide'>
                        <img alt='banner' src={item}/>
                    </div>
                </div>
            ))}           
        <div className='swiper-pagination'></div>
    </AwesomeSwiper>
  )
}