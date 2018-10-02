import { combineReducers } from 'redux'
import dataFilmReducer from './dataFilmReducer'

export default combineReducers({
    dataFilm: dataFilmReducer
})