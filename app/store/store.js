import { combineReducers,applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import {questionReducer,quizReducer} from '../reducers/quizReducer';
const reducer = combineReducers({
    questionReducer,
    quizReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))