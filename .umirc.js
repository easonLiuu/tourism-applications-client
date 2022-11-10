import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // mock: false,
  // proxy: {
  //   '/api': {
  //     'target': 'http://127.0.0.1:7001/',
  //     'changeOrigin': true
  //   }
  // },
  // history: {
  //   type: 'hash'
  // },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页'
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单',
          auth: true
        },
        {
          path: '/user',
          component: './user/index',
          title: '我的',
          auth: true
        },
      ]
    }
  ],
});
