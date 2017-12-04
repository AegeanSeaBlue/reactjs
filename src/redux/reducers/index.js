import { combineReducers } from 'redux'
import counterReducer from './counter'
const reducer = combineReducers({
    counterReducer : counterReducer
})

export default reducer