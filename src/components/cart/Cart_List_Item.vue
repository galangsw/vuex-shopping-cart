<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{cartItem.title}}</p>
      <div >
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{cartItem.price}} X {{cartItem.quantity}}
        </span>
        
        <span class="px-2" >
          <i class=" button is-rounded is-size-7 px-2" @click="addCartItem(cartItem)"> Add Item </i>
          <i class="button is-rounded is-size-7 has-background-danger-dark px-2" @click="removeCartItem(cartItem.id)"> Remove Item</i>
        </span>
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'CartListItem',
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  props: ['cartItem'],
  methods: {
    ...mapActions([
      'addCartItem',
      'removeCartItem'
    ])
  }
}
</script>