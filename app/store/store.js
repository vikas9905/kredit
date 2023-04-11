import { combineReducers,applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import {questionReducer,quizReducer} from '../reducers/quizReducer';
import {themeReducers} from '../reducers/themeReducers';
import {userReducer} from '../reducers/userReducer';
const reducer = combineReducers({
    questionReducer,
    quizReducer,
    themeReducers,
    userReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))