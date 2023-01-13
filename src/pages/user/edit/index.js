import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { useStoreHook } from 'think-react-store';

function Edit(props){
  const [files, setFiles] = useState([]);
  const { getFieldProps, validateFields } = props.form;
  const { user: { editUserAsync }} = useStoreHook();

  const handleChange = (files) => {
    if(files[0]?.file?.size/1024/1024 > 0.5) {
        Toast.fail('图片大小不能大于0.5M');
        return;
    }
    setFiles(files)
  };

  const handleSubmit = () => {
    if(!files.length){
        Toast.fail('请上传头像');
        return;
    }
    validateFields((error, value) => {
        if(error) {
            Toast.fail('请将信息补充完整');
            return;
        }else{
            editUserAsync({
                img: files[0].url,
                tel: value.tel,
                sign: value.sign
            });
        }
    })
  }

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className='user-edit'>
        <List>
            <List.Item>
                <ImagePicker
                    files={files}
                    selectable={files.length < 1}
                    onChange={handleChange}
                />
            </List.Item>
            <List.Item>
                <InputItem
                    {...getFieldProps('tel', {
                        rules: [{ required: true }],
                        initialValue: '123456'
                    })}
                    placeholder='电话'
                >
                    电话:
                </InputItem>
            </List.Item>
            <List.Item>
                <InputItem
                    {...getFieldProps('sign', {
                        rules: [{ required: true }],
                        initialValue: '签名'
                    })}
                    placeholder='签名'
                >
                    签名:
                </InputItem>
            </List.Item>
        </List>
        <Button 
            type='warning' 
            style={{marginTop: '20px'}}
            onClick={handleSubmit}
        >
            修改
        </Button>
    </div>
  )
}

export default createForm()(Edit);