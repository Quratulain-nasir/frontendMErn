export const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] }
        }
        case "REMOVE_FROM_CART": {
            const updatedCart = state.cart.filter(item => item.id !== action.payload);
            return { ...state, cart: updatedCart };
        }
        case "CLEAR_CART":
            return { ...state , cart : []}


        default: {
            return state;
        }
    }
}