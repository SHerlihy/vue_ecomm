<template> 
  <img :src="productDets.image" :alt="productDets.name">
  <router-link :to="{ name: 'Product', params: { id: productDets._id } }">
    <strong>{{productDets.name}}</strong>
  </router-link>
  <p>£{{productDets.price}}</p>
  <form @submit.prevent="updateCartQty(qty)">
  <label v-for="num in largerQty(productQty, qty)" :key="num" for="num">
  {{num}}
  <input :value="num" :name="num" v-model="qty" type="radio" >
  </label>
  <button type="button" @click="incrementQty">+</button>
  <button type="button" @click="decrementQty">-</button>
  <button type="submit">Set new value</button>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'InCartProduct',
  data(){
    return {
      qty: this.productQty,
    }
  },
  props: {
    productDets: Object,
    productQty: Number
  },
      computed: {
      ...mapGetters(["cartItems"]),
      },
      methods: {
      largerQty(a,b){
        let bigger = a > b ? a : b
        return bigger + 5
      },
      decrementQty(){
        this.qty--
      },
      incrementQty(){
        this.qty++
      },
      ...mapMutations(["addToCart", "subFromCart", "removeProductFromCart"]),
      updateCartQty(newQty){
        const numInCart = this.cartItems[this.productDets._id];
      if(newQty === numInCart){
        return
      } else if (newQty < numInCart){
        this.subFromCart({id: this.productDets._id, amount: numInCart - newQty})
        return
      } else {
        this.addToCart({id: this.productDets._id, amount: newQty - numInCart})
        return
      }
      },
    },
}
</script>

<style>

</style>