import { Http } from '@/utils';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
import { cookie, urlGet } from 'project-libs'

export default {
    state: {
        id: undefined,
        username: undefined,
        avatar: undefined,
        tel: undefined,
        sign: undefined
    },
    reducers: {
        getUser(state, payload){
            return {
                ...state,
                ...payload
            }
        },
        editUser(state, payload){
            return {
                ...state,
                ...payload
            }
        }
    },
    effects: {
        async getUserAsync(dispatch, rootState, payload){
            const user = await Http({
                url: '/user/detail',
                body: payload
            });
            if(user) {
                dispatch({
                    type: 'getUser',
                    payload: user
                })
            }
        },
        async editUserAsync(dispatch, rootState, payload){
            const result = await Http({
                url: '/user/edit',
                body: payload
            });
            if (result) {
                Toast.success('编辑成功');
                history.push('/user');
            }
        },
        async loginAsync(dispatch, rootState, payload){
            const result = await Http({
                url: '/user/login',
                body: payload
            });
            if(result) {
                //cookie.set('user', result);
                localStorage.setItem('token', result.token);
                localStorage.setItem('username', result.username);
                urlGet('from') && history.push(urlGet('from'));
                Toast.success('登录成功');
            }
        },
        async registerAsync(dispatch, rootState, payload){
            const result = await Http({
                url: '/user/register',
                body: payload
            });
            if(result) {
                //cookie.set('user', result);
                localStorage.setItem('token', result.token);
                localStorage.setItem('username', result.username);
                
            }
        },
        async logoutAsync(dispatch, rootState, payload){
            await Http({
                url: "/user/logout",
                body: payload
            });
            Toast.success('退出登录成功');
            localStorage.clear();
            location.href = '/login?from=' + location.pathname;
        }
    }
}