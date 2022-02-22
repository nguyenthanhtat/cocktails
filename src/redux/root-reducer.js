import {combineReducers} from 'redux'
import cocTailReducer from './reducer'
const rootReducer = combineReducers({
    data:cocTailReducer,
});
export default rootReducer