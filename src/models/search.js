import { getLists } from '@/services/search' 
export default {
  namespace: 'search',//命名空间
  state: {
    text: 'dva',
    lists: []
  },
  // 同步
  reducers: {
    getLists(state, action){

      return {
        ...state,
        // lists: Array(10).fill(action.payload)
        lists: action.payload
      }
    }
  },
  // 异步
  effects: {
    *getListsAsync({payload}, {call, put}){
      //调用异步函数
      const res = yield call(getLists, payload);
      //事件派发
      yield put({
        type: 'getLists',
        payload: res.lists
      })
    }
  }
}