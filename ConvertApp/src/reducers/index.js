import { combineReducers } from 'redux'
import dataReducer from './dataReducer';
import changeValueReducer from './changeValueReducer';
import changeColorReducer from './changeColorReducer';

export default combineReducers({
    dataList: dataReducer,
    value: changeValueReducer,
    colorText: changeColorReducer
})