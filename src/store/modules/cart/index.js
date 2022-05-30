import axios from 'axios';
const state = {
  cartItems: [],
}

// Mutation (Payload)
const mutations = {
    UPDATE_CART_ITEMS (state, payload) {
      state.cartItems = payload;
    }
  }

// CRUD
  const actions = {
    getCartItems ({ commit }) {
      axios.get('/api/cart').then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    addCartItem ({ commit }, cartItem) {
      axios.post('/api/cart', cartItem).then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    removeCartItem ({ commit }, cartItemId) {
      axios.delete('/api/cart/delete/' + cartItemId ).then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    removeAllCartItems ({ commit }) {
      axios.delete('/api/cart/deleteAll').then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    }
  }
//  Getters (Change to state data)
  const getters = {
    
    cartItems: state => state.cartItems,
    cartTotal: state => {
      return state.cartItems.reduce((acc, cartItem) => {
        return (cartItem.quantity * cartItem.price) + acc;
      }, 0).toFixed(2);
    },

    cartQuantity: state => {
      return state.cartItems.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
    }
  }

  const cartModule = {
    state,
    mutations,
    actions,
    getters
}
export default cartModule;