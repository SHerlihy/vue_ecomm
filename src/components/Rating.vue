<template>
  <div>
    <p>{{value}}</p>
    <p>{{numReviews}}</p>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    value: Number,
    numReviews: Number
  }
}
</script>

<style>

</style>