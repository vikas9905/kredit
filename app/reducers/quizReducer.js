import {SUCCESS,FAILED} from '../actions/actionTypes';
const initialState = {
    questions:[],
    options:[],
    isLoading: false
}

export const questionReducer = (state,action) =>{
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

      default:
        return {
            ...state
        }
        break;
    }
}