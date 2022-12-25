import React, { useState, useEffect } from 'react';
import { isEmpty } from 'project-libs';

/**
 * 1.监听图片是否进入可视区域
 * 2.将src属性替换为真实图片地址， data-src
 * 3.停止监听当前节点
 * @param {*} ele 
 * @param {*} callback 
 * @param {*} watch 
 */
let observer;
export default function useImgHook(ele, callback, watch = []){
    useEffect(()=>{
        const nodes = document.querySelectorAll(ele);
        if(!isEmpty(nodes)){
            observer = new IntersectionObserver((entries)=>{
                callback && callback(entries)
                entries.forEach(item => {
                    if(item.isIntersecting){
                        const dataSrc = item.target.getAttribute('data-src');
                        item.target.setAttribute('src', dataSrc);
                        observer.unobserve(item.target);
                    }
            });
        });
            nodes.forEach(item => {
                observer.observe(item)
            });
        }

        return () => {
            if(!isEmpty(nodes) && observer){
                observer.disconnect()
            }
        }
    }, watch)

}