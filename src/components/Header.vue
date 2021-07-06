<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
      <div>
        <input v-model="keyword" type="text"/>
        <router-link :to="{ name: 'Home' }"><i class="fas fa-search"></i></router-link>
      </div>
    <button>Burg</button>
    <router-link :to="{ name: 'Cart' }"><i class="fas fa-shopping-cart"></i></router-link>
    <!-- <router-link :to="{ name: 'Login' }">Login</router-link> -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
}
</script>

<style>

</style>