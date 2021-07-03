<template>
<article>
  <router-link :to="{ name: 'Product', params: { id: product._id } }">
    <img v-bind:src="product.image" />
  </router-link>
  <section>
    <router-link :to="{ name: 'Product', params: { id: product._id } }">
    <strong>{{product.name}}</strong>
    </router-link>
    <Rating v-bind:value="product.rating" v-bind:numReviews="product.numReviews"/>
    <h3>£{{product.price}}</h3>
  </section>
</article>
</template>
 
<script>
import Rating from '../components/Rating'
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  components: {
    Rating,
  }
}


</script>

<style>

</style>