export default {
  'post /api/user/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 10,
        username: '测试用户',
        avatar: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
        tel: 123456789001,
        sign: '花桥流水'
      }
    });
  },
  'post /api/user/edit': (req, res) => {
    res.json({
      status: 200,
      data: 'ok'
    });
  },
  'post /api/user/login': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 100,
        username: 'admin'
      }
    });
  },
  'post /api/user/register': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 100,
        username: 'admin'
      }
    });
  }
};