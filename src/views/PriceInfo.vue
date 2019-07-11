<template>
  <div>
    <h1 class="price">
      {{ calculatedCurrency + techcost }} <strong>{{' '+currency.currency_code}}</strong>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PriceInfo', 
  props: ['price', 'currency', 'techcost'], 
  computed: {
      calculatedCurrency() {
          return Math.ceil(this.price * this.currency.exchangeRate);
      },
  },
  watch: {
      currency: {
          handler(val) {
              console.log(val);
          },
          deep: true
      },
  },
}
</script>
