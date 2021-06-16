<template>
  <v-data-table
    dense
    :headers="headers"
    :items="result"
    item-key="name"
    class="best-sellers elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: 'BestSellers',
  props: {
    result: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      headers: [
        { text: '#', value: 'index' },
        { text: 'Product name', value: 'name' },
        { text: 'Quantity', value: 'quantity' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.best-sellers {
  max-width: 400px;
}
</style>
