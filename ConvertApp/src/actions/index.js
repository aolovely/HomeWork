import { DATA_LIST, CHANGE_VALUE, CHANGE_COLOR_TEXT } from './type'

export const dataList = (data) => ({
    type: DATA_LIST,
    payload: data
})

export const changeValue = (data) => ({
    //data 1.type 2.value
    type: CHANGE_VALUE,
    payload: data
})

export const changeColorText = (data) => ({
    //data 1.type 2.index
    type: CHANGE_COLOR_TEXT,
    payload: data
})