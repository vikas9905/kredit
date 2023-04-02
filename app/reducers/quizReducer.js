import {SUCCESS,FAILED,LOADING,RESULT_CHECK_LOADING,RESULT_SUCCESS,RESULT_FAILED} from '../actions/actionTypes';
const initialState = {
    data:[],
    isLoading: true,
    userAnswers: new Map(),
    result: {
        isLoading: false,
        showModal: false
    },
}

export const questionReducer = (state = initialState,action) =>{
    switch (action.type) {
      case SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false,
        };
        break;
      case FAILED:
        return {
          ...state,
          isLoading: false,
        };
        break;
      case LOADING:
        return {
          ...state,
          isLoading: true,
        };
        break;
      case RESULT_CHECK_LOADING:
        return {
          ...state,
          result: {
            isLoading: true
          }
        };
        break;
      case RESULT_SUCCESS:
        return {
          ...state,
          result: {
            ...action.payload,
            isLoading:false,
            showModal: true
          }
        };
        break;
      case RESULT_FAILED:
        return {
          ...state,
          result: {
            isLoading:false
          }
        };
        break;
      case 'MODAL_CLOSE':
        return {
            ... state,
            result: {
                ...action.payload,
                isLoading:false,
                showModal: false
            }
        }
      default:
        return {
          ...state,
        };
        break;
    }
}