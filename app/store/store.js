import { combineReducers,applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import {questionReducer} from '../reducers/quizReducer';
const reducer = combineReducers({
    questionReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))