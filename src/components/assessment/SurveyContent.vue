<template>
  <div class="survey">
    <h2 v-if="survey && survey.length > 0">
      Survey contents {{ currentSurvey ? ` of ${currentSurvey}` : '' }}
    </h2>
    <ul class="survey-content pl-0">
      <li
        v-for="(item, i) in survey"
        :key="`survey-${i}`"
        class="survey-item"
      >
        <h3 class="survey-item__label mt-6 mb-2">
          {{ `${i + 1}. ${item.label}` }}
        </h3>
        <div class="survey-item__content">
          <best-sellers
            v-if="item.type === 'qcm'"
            :result="bestSellersHandle(item.result)"
          />
          <product-number
            v-if="item.type === 'numeric'"
            :result="item.result"
          />
          <visit-dates
            v-if="item.type === 'date'"
            :result="visitDatesHandle(item.result)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BestSellers from './survey-item/BestSellers'
import ProductNumber from './survey-item/ProductNumber'
import VisitDates from './survey-item/VisitDates'

export default {
  name: 'SurveyContent',
  components: {
    BestSellers,
    ProductNumber,
    VisitDates
  },
  props: {
    survey: {
      type: Array,
      required: true,
      default: () => [{
        label: '',
        type: '',
        result: null
      }]
    },
    currentSurvey: {
      type: [String, Boolean],
      default: false,
      required: true
    }
  },
  methods: {
    /**
     * Handle best seller products
     * @param result {Object}
     * @returns {*} void | Array: [{ name: '', quality: '' },...]
     */
    bestSellersHandle (result) {
      if (!result) return
      // Make array from exist obj: ["Product2", 4], ["Product 2", 1],...
      // sort by bestseller product first
      return Object.entries(result).sort(
        (a, b) => b[1] - a[1]
      ).map((item, i) => ({ index: i + 1, name: item[0], quantity: item[1] }))
    },

    /**
     * Handle visit time string before send to child
     * @param result {Object}
     * @returns {*}
     */
    visitDatesHandle (result) {
      if (!result) return
      return result.map(
        item => new Date(item).toISOString().split('T')[0]
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.survey-content {
  list-style: none;
}
</style>
