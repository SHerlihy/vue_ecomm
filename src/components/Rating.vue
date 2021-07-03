<template>
  <div>
    <i v-for="val in Math.floor(value)" :key="val" class="fas fa-star"></i>
    <i v-if="value % 1" class="fas fa-star-half-alt"></i>
  </div>
  <p>{{value}}</p>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    value: Number,
    numReviews: Number
  },
}
</script>

<style>

</style>