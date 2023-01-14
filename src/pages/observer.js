import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { useObserverHook } from '@/hooks'

let observer;

export default function(props){
  const [state, setState] = useState()

  useObserverHook('#loading', (entries) => {
    console.log(entries)
  })

  const handleClick = () => {
    history.push('/')
  }

 /*  useEffect(() => {
    observer = new IntersectionObserver(entries => {

    })
    observer.observe(document.querySelector('#loading'))

    return () => {
        if(observer) {
            //解绑元素
            observer.unobserve(document.querySelector('#loading'));

            //停止监听
            observer.disconnect();
        }

    }

  }, []) */

  return (
    <div>
        observer
        <button onClick={handleClick}>首页</button>
        <div id='loading' style={{width: '100px', height: '100px', background: '#f60'}}>
            loading
        </div>

    </div>
  )
}