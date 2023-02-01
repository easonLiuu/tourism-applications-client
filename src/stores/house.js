import { Http } from '@/utils';
import { CommonEnum } from '@/enums';

async function handleOrder(url, dispatch, payload) {
  const result = await Http({
    url,
    body: payload,
  });

  dispatch({
    type: 'setOrder',
    payload: result,
  });
}

export default {
  state: {
    detail: {},
    comments: [],
    page: CommonEnum.PAGE,
    showLoading: true,
    reloadCommentsNum: 0,
    order: null,
  },
  reducers: {
    getDetail(state, payload) {
      return {
        ...state,
        detail: payload,
      };
    },
    setOrder(state, payload) {
      return {
        ...state,
        order: payload,
      };
    },
    getComments(state, payload) {
      return {
        ...state,
        comments: payload,
      };
    },
    setShowLoading(state, payload) {
      return {
        ...state,
        showLoading: payload,
      };
    },
    reloadComments(state, payload) {
      return {
        ...state,
        reloadCommentsNum: state.reloadCommentsNum + 1,
        page: {
          ...CommonEnum.PAGE,
          pageNum: state.page.pageNum + 1,
        },
      };
    },
    resetData(state, payload) {
      return {
        ...state,
        //detail: {},
        comments: [],
        page: CommonEnum.PAGE,
        showLoading: true,
        reloadCommentsNum: 0,
        ...payload,
      };
    },
  },
  effects: {
    async getDetailAsync(dispatch, rootState, payload) {
      const detail = await Http({
        url: '/house/detail',
        body: payload,
      });
      dispatch({
        type: 'getDetail',
        payload: detail,
      });
    },
    async getCommentsAsync(dispatch, rootState, payload) {
      const { comments, page } = rootState.house;
      const lists = await Http({
        url: '/comments/lists',
        body: {
          ...payload,
          pageSize: page.pageSize,
          pageNum: page.pageNum,
        },
      });
      dispatch({
        type: 'getComments',
        payload: [...comments, ...lists],
      });
      dispatch({
        type: 'setShowLoading',
        payload: lists.length ? true : false,
      });
    },
    async addCommentAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/comments/add',
        body: payload,
      });
      if (result) {
        dispatch({
          type: 'resetData',
          payload: {},
        });
      }
    },
    async hasOrderAsync(dispatch, rootState, payload) {
      await handleOrder('/orders/hasOrder', dispatch, payload);
    },
    async addOrderAsync(dispatch, rootState, payload) {
      await handleOrder('/orders/addOrder', dispatch, payload);
    },
    async delOrderAsync(dispatch, rootState, payload) {
      await handleOrder('/orders/delOrder', dispatch, payload);
    },
  },
};
