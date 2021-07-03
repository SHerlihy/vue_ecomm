<template>
  <h2>Latest Products</h2>
  <Product
    v-for="product in allProducts"
    v-bind:key="product"
    v-bind:product="product"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Product from "../components/ProductCard.vue";
export default {
  name: "Home",
  components: {
    Product,
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["getPageProducts"]),
  },
  mounted(){
    this.getPageProducts('','')
  },
};
</script>

<style></style>
