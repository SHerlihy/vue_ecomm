<template>
  <img v-bind:src="oneProduct.image" alt="">
  <h3>{{oneProduct.name}}</h3>
  <Rating v-bind:value="oneProduct.rating" v-bind:numReviews="oneProduct.numReviews"/>
  <h4>Price: £{{oneProduct.price}}</h4>
  <p>{{oneProduct.description}}</p>
  <p>Status: 
    <strong v-if="oneProduct.countInStock > 0">In Stock</strong>
    <strong v-if="oneProduct.countInStock <= 0">Out of Stock</strong>
  </p>
  <form @submit.prevent="addToCart({id: oneProduct._id, amount: qty})">
  <label v-for="num in oneProduct.countInStock" :key="num" for="num">
    {{num}}
    <input :value="num" :name="num"  v-model="qty" type="radio">
  </label>
  <button type="submit">Add to Cart</button>
  </form>
  <p v-for="item in cartItems" :key="item">{{item}}</p>
  <div>
    <h3>Reviews</h3>
    <div v-for="review in oneProduct.reviews" :key="review._id">
      <strong>{{review.name}}</strong>
      <Rating v-bind:value="review.rating"/>
      <p>{{review.createdAt.substring(0, 10)}}</p>
      <p>{{review.comment}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Rating from '../components/Rating.vue';
export default {
  name: 'Product',
  components: {
    Rating
  },
  data(){
    return {
      qty: 0,
    }
  },
    computed: {
    ...mapGetters(["oneProduct", "cartItems"]),
  },
    methods: {
    ...mapActions(["getProduct","addProductCart"]),
    ...mapMutations(["addToCart"]),
  },
    mounted(){
    this.getProduct(this.$route.params.id);
    console.log(this.oneProduct)
  },
}
</script>

<style>

</style>