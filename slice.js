import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
    },
})

// Store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
    console.log("subscribe store : ", store.getState());
})

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 1 }))
