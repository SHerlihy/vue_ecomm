<template>
  <h1>Shopping Cart</h1>
  <button @click="log(items)">whole cart</button>
  <p v-if="Object.keys(cartItems).length === 0">No items in cart</p>
  <section v-else>
    <h2>Items in Cart:</h2>
    <div v-for="item in multiProducts" :key="item._id">
      <img :src="item.image" :alt="item.name">
      <router-link :to="{ name: 'Product', params: { id: item._id } }">
        <strong>{{item.name}}</strong>
      </router-link>
      <p>£{{item.price}}</p>
      <form @submit.prevent="subFromCart({id: item._id, amount: deductAmount(cartItems[item._id], qty[item._id])})">
        <label v-for="num in cartItems[item._id]" :key="item._id + num" for="num">
          {{num}}
          <input :value="num" :name="num" v-model="qty[item._id]" type="radio" >
        </label>
        <button type="submit">Set new value</button>
      </form>
      <!-- <form @submit.prevent="addToCart({id: oneProduct._id, amount: qty})">
  <label v-for="num in oneProduct.countInStock" :key="num" for="num">
    {{num}}
    <input :value="num" :name="num"  v-model="qty" type="radio">
  </label>
  <button type="submit">Add to Cart</button>
  </form> -->
    </div>
  </section>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: 'Product',
  data(){
    return {
      qty: {},
    }
  },
  computed: {
    ...mapGetters(["cartItems", "oneProduct", "multiProducts"]),
    deductAmount(sum, val){
      return sum-val
    }
  },
    methods: {
    ...mapMutations(["addToCart", "subFromCart", "setCartAmount", "removeProductFromCart", "emptyCart"]),
    ...mapActions(["getMultiProducts"]),
    log(i){console.log(i)}
  },
  mounted(){
    const arrIDs = Object.keys(this.cartItems).map((id)=>{
      this.qty[id]  = this.cartItems[id]
      console.log(`mountie: ${this.qty[id]}`)
      return id
    });
    this.getMultiProducts(arrIDs.join(','));
  },
}
</script>

<style>

</style>