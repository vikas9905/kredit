import {USER_DETAILS_FAILED,USER_DETAILS_LOADING,USER_DETAILS_SUCCESS,USER_HISTORY_FAILED,USER_HISTORY_LOADING,
USER_HISTORY_SUCCESS,USER_LEADERBOARD_LOADING,USER_LEADERBOARD_FAILED,USER_LEADERBOARD_SUCCESS,
USER_ORDER_LOADING,USER_ORDER_SUCCESS,USER_ORDER_FAILED} from '../actions/actionTypes';
const initialState = {
    userDetails: {
        loading:false,
    },
    order: {
        loading:false,
    },
    history: {
        loading:false
    },
    leaderboard:{
        loading:false
    }
}

export const userReducer = (state=initialState,action) =>{
    switch (action.type) {
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                userDetails:{
                    ...action.payload,
                    loading: false
                }
            }
            break;
        case USER_DETAILS_LOADING:
            return {
                ...state,
                userDetails:{
                    loading: true,
                }
            }
            break;
        case USER_DETAILS_FAILED:
            return {
                ...state,
                userDetails:{
                    loading:false
                }
            }
            break;
        case USER_HISTORY_LOADING:
            return {
                ...state,
                history:{
                    loading:true 
                }
            }
            break;
        case USER_HISTORY_SUCCESS:
            return {
                ...state,
                history:{
                    ...action.payload,
                    loading:false
                }
            }
            break;
        case USER_HISTORY_FAILED:
            return {
                ...state,
                history:{
                    loading:false
                }
            }
            break;
        case USER_LEADERBOARD_LOADING:
            return {
                ...state,
                leaderboard:{
                    loading:true,
                }
            }
            break;
        case USER_LEADERBOARD_SUCCESS:
            return {
                ...state,
                leaderboard:{
                    ...action.payload,
                    loading:false
                }
            }
            break;
        case USER_LEADERBOARD_FAILED:
            return {
                ...state,
                leaderboard:{
                    loading:false
                }
            }
            break;
        case USER_ORDER_LOADING:
            return {
                ...state,
                order:{
                    loading:true,
                }
            }
            break;
        case USER_ORDER_SUCCESS:
            return {
                ...state,
                order:{
                    loading:false,
                    ...action.payload
                }
            }
            break;
        case USER_ORDER_FAILED:
            return{
                ...state,
                order:{
                    loading:false
                }
            }
            break;
    
        default:
            return {
                ...state
            }
            break;
    }
}