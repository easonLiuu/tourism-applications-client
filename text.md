## hot
```
[
  {
    id: 1,
    img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
    title: '东城民宿',
    info: '东城区交通方便',
    price: '100'
  },
  {
    id: 2,
    img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
    title: '西城民宿',
    info: '西城区山水怡情',
    price: '120'
  },
  {
    id: 3,
    img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
    title: '新区民宿',
    info: '新区民宿位置优越',
    price: '200'
  },
  {
    id: 4,
    img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
    title: '老城民宿',
    info: '老城区风景秀美',
    price: '220'
  }
]
```

## house-detail
```js
{
  id: 8,
  banner: [
    'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
    'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
    'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
  ],
  info: {
    title: '老城民宿',
    msg: '老城区风景秀美',
    price: '220',
    publishTime: 1595238771000,
    startTime: 1595238771000,
    endTime: 1597917171000,
  }
}
```

## house-comments
```js
setTimeout(() => {
  let data;
  if (req.body.pageNum < 4) {
    data = [
      {
        id: 1,
        avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        username: 'user',
        createTime: 1595238771000,
        info: '房屋很满意'
      },
      {
        id: 2,
        avatar: '',
        username: 'user',
        createTime: 1595238771000,
        info: '空气清新'
      },
      {
        id: 3,
        avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        username: 'user',
        createTime: 1595238771000,
        info: '态度温和'
      },
      {
        id: 4,
        avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        username: 'user',
        createTime: 1595238771000,
        info: '早餐味道美'
      },
      {
        id: 5,
        avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        username: 'user',
        createTime: 1595238771000,
        info: '态度温和'
      },
      {
        id: 6,
        avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        username: 'user',
        createTime: 1595238771000,
        info: '早餐味道美'
      },
      {
        id: 7,
        avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        username: 'user',
        createTime: 1595238771000,
        info: '态度温和'
      },
      {
        id: 8,
        avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        username: 'user',
        createTime: 1595238771000,
        info: '早餐味道美'
      },
    ]
  } else {
    data = [];
  }
  res.json({
    status: 200,
    data
  });
}, 100);
```

## order
```js
setTimeout(() => {
  let data;
  if(req.body.pageNum <4){
    data = [
      {
        id: 1,
        img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
        title: '东城民宿',
        info: '东城区交通方便',
        price: '100',
      },
      {
        id: 2,
        img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        title: '西城民宿',
        info: '西城区山水怡情',
        price: '120'
      },
      {
        id: 3,
        img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
        title: '新区民宿',
        info: '新区民宿位置优越',
        price: '200'
      },
      {
        id: 4,
        img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        title: '老城民宿',
        info: '老城区风景秀美',
        price: '220'
      },
      {
        id: 5,
        img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
        title: '东城民宿',
        info: '东城区交通方便',
        price: '100'
      },
      {
        id: 6,
        img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        title: '西城民宿',
        info: '西城区山水怡情',
        price: '120'
      },
      {
        id: 7,
        img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
        title: '新区民宿',
        info: '新区民宿位置优越',
        price: '200'
      },
      {
        id: 8,
        img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        title: '老城民宿',
        info: '老城区风景秀美',
        price: '220'
      }
    ]
  }else {
    data = [];
  }
  res.json({
    status: 200,
    data
  })
}, 500);
```