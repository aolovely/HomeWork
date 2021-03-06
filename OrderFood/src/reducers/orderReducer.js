import { ADD_ORDER, DEL_ORDER, CLEAR_ORDER } from '../actions/type'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_ORDER:
            //check xem mon an da co chua 
            //sau do add hoa updae
            const getOrdersByName = state.filter(order => order.name === action.payload.name)
            if (getOrdersByName.length === 0) {
                //add
                return [
                    ...state,
                    {
                        name: action.payload.name,
                        unitPrice: action.payload.unitPrice,
                        amount: 1
                    }
                ]
            } else {
                //update
                return state.map(order => order.name === action.payload.name ?
                    {
                        name: order.name,
                        unitPrice: order.unitPrice,
                        amount: order.amount + 1
                    } : order)
            }

        case DEL_ORDER:
            return state.filter(order => order.name !== action.payload)

        case CLEAR_ORDER:
            return []

        default: return state
    }

}