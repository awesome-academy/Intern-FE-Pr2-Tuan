import * as Types from '../constants/ActionTypes';

const cartItem = localStorage.getItem('cart');

const findProductInCart = (cart, product) => {
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product._id === product._id) {
            index = i;
            break;
        }
    }
    return index;
};

const initialState = cartItem ? JSON.parse(cartItem) : [];

const cart = (state = initialState, actions) => {
    const { product } = actions;
    let index = -1;
    switch (actions.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1;
            } else {
                state.push({
                    product,
                    quantity: 1,
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case Types.DECREASE_CARTITEM:
            index = findProductInCart(state, product);
            state[index].quantity -= 1;
            if (state[index].quantity === 0) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case Types.REMOVE_CARTITEM:
            index = findProductInCart(state, product);
            state.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
};

export default cart;
