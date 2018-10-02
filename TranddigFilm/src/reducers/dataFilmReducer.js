import { DATA_FLIM } from '../actions/type';

export default function (state = [], action) {
    switch (action.type) {
        case DATA_FLIM:
            return action.payload
        default:
            return state
    }
}