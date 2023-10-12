import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

// Reducer
const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});


const login = createAction("CREATE_SESSION");

const loginReducer = createReducer( {status : false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
})

// Store
const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    }
});

console.log("oncreate store : ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("subscribe store : ", store.getState());
})

store.dispatch(addToCart({ id: 1, qty: 1 }));
store.dispatch(addToCart({ id: 2, qty: 20 }));
store.dispatch(login());