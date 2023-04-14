/*eslint-disable*/
import {SUCCESS,FAILED,LOADING,RESULT_CHECK_LOADING,RESULT_SUCCESS,RESULT_FAILED,QUIZ_SUCCESS,QUIZ_FAILED,QUIZ_LOADING} from '../actions/actionTypes';
const initialState = {
    data:[],
    isLoading: true,
    userAnswers: new Map(),
    result: {
        isLoading: false,
        showModal: false
    },
    quiz: {
        data: [],
        isLoading: false
    }
}

export const questionReducer = (state = initialState,action) =>{
    switch (action.type) {
      case SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false,
          result: {
            data: [],
            isLoading: false,
            showModal: false
          }
        };
        break;
      case FAILED:
        return {
          ...state,
          isLoading: false,
          result: {
            data:[],
            isLoading: false,
            showModal: false
          }
        };
        break;
      case LOADING:
        return {
          ...state,
          isLoading: true,
          result: {
            data:[],
            isLoading: false,
            showModal: false
          }
        };
        break;
      case RESULT_CHECK_LOADING:
        return {
          ...state,
          result: {
            data: [],
            showModal:false,
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
            isLoading:false,
            showModal: false,
            data: []
          }
        };
        break;
      case 'MODAL_CLOSE':
        return {
            ... state,
            userAnswers: new Map(),
            result: {
                data: [],
                isLoading:false,
                showModal: false
            }
        }
        case 'MODAL_OPEN':
            return {
                result: {
                    isLoading:false,
                    showModal: true
                }
            }
      default:
        return {
          ...state,
        };
        break;
    }
}

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
      case QUIZ_SUCCESS:
        return {
          ...state,
          quiz: {
            ...action.payload,
            isLoading: false,
          },
        };
        break;
      case QUIZ_FAILED:
        return {
          ...state,
          quiz: {
            isLoading: false,
          },
        };
      case QUIZ_LOADING:
        return {
          ...state,
          quiz: {
            isLoading: true,
          },
        };
      default:
        return {
          ...state,
        };
    }
}