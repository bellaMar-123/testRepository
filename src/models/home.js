import{queryHome} from '@/pages/home/service';

export default{
  namespace:'home',

  state:{
    list:[],
  },

  effects:{
    *fetch({payload},{call,put}){
      const response = yield call(queryHome,payload);
      yield put(
        {
          type:'show',
          payload:response,
        }
      );
    },
  },

  reducers:{
    show(state,action){
      return{
        ...state,
        list:action.payload,
      };
    },
  },

};
