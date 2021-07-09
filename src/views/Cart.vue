<template id='Cart'>
  <h1 data-test="view-title">Shopping Cart</h1>
  <button @click="log(multiProducts)">whole cart</button>
  <p data-test="no-cart" v-if="Object.keys(cartItems).length === 0">No items in cart</p>
  <section class="checkout" v-else>
    <section>
      <OrderForm />
    </section>
    <section>
    <h2 data-test="cart-title">Items in Cart:</h2>
    <div v-for="item in multiProducts" :key="item._id">
      <div data-test="out-of-stock-product" v-if="item.countInStock === 0">
        <p>Item out of stock</p>
        <router-link :to="{ name: 'Product', params: { id: item._id } }">
          <strong>{{item.name}}</strong>
        </router-link>
      </div>
      <div data-test="fewer-in-stock-product" v-else-if="item.countInStock < cartItems[item._id]">
        <p>Fewer items available in stock than in cart</p>
        <InCartProduct :productDets="item" :productQty="item.countInStock"/>
      </div>
      <div data-test="in-cart-product" v-else>
        <InCartProduct :productDets="item" :productQty="cartItems[item._id]"/>
      </div>
    </div>
    </section>
  </section>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import OrderForm from '../components/OrderForm.vue';
import InCartProduct from '../components/InCartProduct.vue';

export default {
  name: 'Cart',
  data(){
    return {
      qty: {},
    }
  },
  components: {
    OrderForm,
    InCartProduct,
  },
  computed: {
    ...mapGetters(["cartItems", "multiProducts"]),
  },
    methods: {
    ...mapMutations(["addToCart", "subFromCart", "setCartAmount", "removeProductFromCart", "emptyCart"]),
    ...mapActions(["getMultiProducts"]),
    printIt(p){console.log(p)},
    log(i){this.printIt(i)}
  },
  mounted(){
    this.log(`from cart.vue: ${this.cartItems}`)
    const arrIDs = Object.keys(this.cartItems).map((id)=>{
      this.qty[id]  = this.cartItems[id]
      return id
    });
    this.getMultiProducts(arrIDs.join(','));
  },
}
</script>

<style scoped>
  .checkout{
    display: flex;
  }
</style>