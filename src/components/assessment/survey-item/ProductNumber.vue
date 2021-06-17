<template>
  <div class="product-number">
    Aggregated product number:
    <v-text-field
      :value="result"
      label="numbers"
      solo
      readonly
      style="max-width: 400px"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'ProductNumber',
  props: {
    result: {
      type: Number,
      required: true
    }
  }
}
</script>
