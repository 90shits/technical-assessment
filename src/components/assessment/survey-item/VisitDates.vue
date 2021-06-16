<template>
  <v-combobox
    v-model="result"
    chips
    multiple
    flat
    disabled
  ></v-combobox>
</template>

<script>
export default {
  name: 'VisitDates',
  props: {
    result: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
