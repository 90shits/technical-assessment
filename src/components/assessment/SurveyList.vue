<template>
  <v-container>
    <h2 class="mb-2">Stage 1:</h2>
    <v-simple-table class="survey-table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Name</th>
            <th class="text-center">Code</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in surveyList"
            :key="`item-${i}`"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.code }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: 'SurveyList',
  computed: {
    surveyList () {
      return this.$store.getters.getSurveyList
    }
  },
  mounted () {
    this.$store.dispatch('fetchSurveyList')
  }
}
</script>

<style lang="scss" scoped>
.survey-table {
  max-width: 400px;
  border: thin solid rgba(0, 0, 0, 0.12);
  th:not(:last-child),
  td:not(:last-child) {
    border-right: thin solid rgba(0, 0, 0, 0.12);
  }
}
</style>
