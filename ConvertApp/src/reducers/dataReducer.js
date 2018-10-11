import { DATA_LIST } from '../actions/type'
import { lenght, Weight } from '../database.json'

export default function (state = lenght, action) {
    switch (action.type) {
        case DATA_LIST:

            return action.payload

        default:
            return state
    }
}