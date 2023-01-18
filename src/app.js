import { cookie } from 'project-libs';
import { history } from 'umi';

//点击订单页面如果没有登录, 跳转到登录页面
export function onRouteChange(route){
    console.log(route)
    const nowPath = route.routes[0].routes.filter(item => item.path === route.location.pathname);
    //const isLogin = cookie.get('user');
    const isLogin = localStorage.getItem('token');
    if(nowPath.length === 1 && nowPath[0].auth && !isLogin) {
        history.push({
            pathname: '/login',
            query: {
                from: route.location.pathname
            }
        });
    }
}