import { createStore, combineReducers, applyMiddleware } from 'react-redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    
})

const store = createStore(reducer, applyMiddleware(thunk))