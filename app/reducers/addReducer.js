/*eslint-disable*/
import {REWARD_ADD_LOADED,REWARD_ADD_LOADING,REWARD_ADD_SHOW} from '../actions/actionTypes';
const initialState = {
    rewardAdd:{
        loaded: false,
        loading: false,
        show: false
    }
}

export const addReducer = (state=initialState,action) =>{
    switch(action.payload){
        case REWARD_ADD_LOADED:
            return {
                ...state,
                loaded:true,
            }
            break;
        case REWARD_ADD_LOADING:
            return {
                ...state,
                loading:true,
            }
            break;
        case REWARD_ADD_SHOW:
            return {
                ...state,
                show: true
            }
            break;
        default:
            return{
                ...state
            }
    }
}