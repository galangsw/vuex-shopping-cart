import axios from 'axios';

const state = {
  productItems: [] 
}

// Mutation (payload)
const mutations = {
    UPDATE_PRODUCT_ITEMS (state, payload) {
      state.productItems = payload;
    }
  }

// Action (Show all product)
  const actions = {
    getProductItems ({ commit }) {
      axios.get(`/api/products`).then((response) => {
        commit('UPDATE_PRODUCT_ITEMS', response.data)
      });
    }
  }

// Getters (Select product by id)
  const getters = {
    productItems: state => state.productItems,
    productItemById: (state) => (id) => {
      return state.productItems.find(productItem => productItem.id === id)
    }
  }

  const productModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default productModule;
  