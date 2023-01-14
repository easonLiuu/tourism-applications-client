import React, { useState, useEffect } from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store';

import './index.less'

function Register(props){
  const { user: { registerAsync }} = useStoreHook();

  const { getFieldProps, validateFields } = props.form;

  const handleSubmit = () => {
    validateFields((error, value) => {
        if(error) {
            Toast.fail('请将信息填写完整');
            return;
        } else {
            if(value.password !== value.password2) {
                Toast.fail('两次密码输入不一致');
                return;
            }
            registerAsync(value);
        }
    });
  };

  const handleClick = () => {
    history.push('./login');
  };



  useEffect(() => {

  }, [])

  return (
    <div className='register-page'>
        <List
             renderHeader={() => '用户注册'}
        >
                <InputItem
                    {...getFieldProps('username', {
                        rules: [{ required: true }]
                    })}
                    placeholder='用户名'
                >
                    用户名
                </InputItem>
                <InputItem
                    {...getFieldProps('password', {
                        rules: [{ required: true }]
                    })}
                    placeholder='密码'
                >
                    密码
                </InputItem>
                <InputItem
                    {...getFieldProps('password2', {
                        rules: [{ required: true }]
                    })}
                    placeholder='确认密码'
                >
                    确认密码
                </InputItem>
        </List>
        <Button type='warning' onClick={handleSubmit}>注册</Button>
        <div className='login' onClick={handleClick}>已有账户, 去登录</div>
    </div>
  )
}

export default createForm()(Register)