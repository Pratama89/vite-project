// reducer

import { legacy_createStore as createStore, legacy_createStore } from "redux"


const cartReducer = (
    state = {
        cart: [{
            id: 1,
            qty: 1
        }],
    },
    action
 ) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        default:
            return state
    }
    
}

// store
const store = createStore(cartReducer)
console.log("oncreate store : ", store.getState())

// subcribe
store.subscribe(() => {
    console.log("subscribe store : ", store.getState())
})

// dispatch
const action1 = {
    type: "ADD_TO_CART",
    payload: {
        id: 2,
        qty: 10
    }
};
store.dispatch(action1);

const action2 = {
    type: "ADD_TO_CART",
    payload: {
        id: 3,
        qty: 30
    }
};
store.dispatch(action2);