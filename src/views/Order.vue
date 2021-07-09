<template>
  <form @submit.prevent="toOrderScreen()">
    <p>Select Payment Method:</p>
    <label for="paypal">PayPal</label>
    <input name="paypal" type="radio"/>
    <button type="submit">Pay</button>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>