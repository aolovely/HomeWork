import { CHANGE_VALUE } from "../actions/type";

const defaulState = [
    {
        "name": "red",
        "value": 0
    },
    {
        "name": "green",
        "value": 0
    },
    {
        "name": "blue",
        "value": 0
    },
]


export default function (state = defaulState, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            if (action.payload.name === "red") {
                return [
                    {
                        name: action.payload.name,
                        value: action.payload.value,

                    },
                    ...(state.filter(item => item.name!== action.payload.name))
                ]
            }

            if (action.payload.name === "blue") {
                return [
                    ...(state.filter(item => item.name !== action.payload.name)),
                    {
                        name: action.payload.name,
                        value: action.payload.value,
                    }
                ]
            }

            if (action.payload.name === "green") {
                return [
                    ...(state.filter(item => item.name === 'red')),
                    {
                        name: action.payload.name,
                        value: action.payload.value,
                    },
                    ...(state.filter(item => item.name === 'blue')),
                ]
            }
        default:
            return state

    }
}

