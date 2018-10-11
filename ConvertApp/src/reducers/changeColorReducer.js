import { CHANGE_COLOR_TEXT } from '../actions/type'

const initState = {
    left: [
        {
            id: 0,
            value: false
        },
        {
            id: 1,
            value: false
        },
        {
            id: 2,
            value: false
        },
        {
            id: 3,
            value: false
        },
    ],
    right: [
        {
            id: 0,
            value: false
        },
        {
            id: 1,
            value: false
        },
        {
            id: 2,
            value: false
        },
        {
            id: 3,
            value: false
        },
    ]
}

export default function (state = initState, action) {
    switch (action.type) {
        case CHANGE_COLOR_TEXT:
            switch (action.payload.type) {
                case 'left':
                    return {
                        left: state.left.map(item => (item.id === action.payload.index
                            ? {
                                id: item.id,
                                value: !item.value
                            }
                            : {
                                id: item.id,
                                value: false
                            })),
                        right: state.right
                    }

                case 'right':
                    return {
                        left: state.left,
                        right: state.right.map(item => (item.id === action.payload.index
                            ? {
                                id: item.id,
                                value: !item.value
                            }
                            : {
                                id: item.id,
                                value: false
                            }))
                    }

                default: return state
            }

        default:
            return state
    }
}