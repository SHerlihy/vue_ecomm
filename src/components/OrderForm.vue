<template>
  <form @submit.prevent="toOrderScreen()">
    <input v-model="recipientDets.fullname" type="text" placeholder="Full Name"/>
    <input v-model="recipientDets.addressNumName" type="text" placeholder="Address Number/Name"/>
    <input v-model="recipientDets.streetName" type="text" placeholder="Address Street"/>
    <input v-model="recipientDets.city" type="text" placeholder="Address City"/>
    <input v-model="recipientDets.county" type="text" placeholder="Address County"/>
    <input v-model="recipientDets.postcode" type="text" placeholder="Postcode"/>
    <input v-model="recipientDets.email" type="text" placeholder="Email address"/>
    <button type="submit">Order Products</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      recipientDets: {},
    }
  },
  methods: {
    guestSubmit(){},
    toOrderScreen(){
      this.$router.push('/order')
    }
  }
}
</script>

<style>

</style>