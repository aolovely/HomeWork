import { CHANGE_VALUE } from '../actions/type'

const defaultValue = {
    left: 1,
    right: 1,
}

export default function (state = defaultValue, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                left: action.payload.type === 'left' ? action.payload.value : state.left,
                right: action.payload.type === 'right' ? action.payload.value : state.right,
            }

        default:
            return state
    }
}