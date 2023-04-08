import { combineReducers,applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import {questionReducer,quizReducer} from '../reducers/quizReducer';
import {themeReducers} from '../reducers/themeReducers';
const reducer = combineReducers({
    questionReducer,
    quizReducer,
    themeReducers
})

export const store = createStore(reducer, applyMiddleware(thunk))