import { CHANGE_VALUE } from './type'

export const changeValue = (data) => ({
    //data 1.name. 2.value
    type: CHANGE_VALUE,
    payload: data
})