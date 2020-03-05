import types from '../types';

const getPostReducer = (state={},action)=>{
    switch(action){
        case types.GET: return {...state};
        case types.RECEIVED: return {...state,getPostSuccess:action};
        default: return state;
    }
};

export default getPostReducer;