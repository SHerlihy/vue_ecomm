<template>
  <p>Home view</p>
  <router-link :to="{ name: 'Product', params: { id: '001' } }"
    >Product Page</router-link
  >
  <Product
    v-for="product in allProducts"
    v-bind:key="product"
    v-bind:product="product"
  />
  <button @click="getPageProducts('', '')">Add four</button>
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
};
</script>

<style></style>
