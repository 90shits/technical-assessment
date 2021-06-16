<template>
  <v-container class="survey">
    <h2 class="mb-2">Products Survey</h2>

    <!-- TODO: split to component -->
    <v-simple-table class="survey-list text-center mb-6">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Name</th>
            <th class="text-center">Code</th>
            <th class="text-center">View</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in surveyList"
            :key="`item-${i}`"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.code }}</td>
            <td>
              <v-radio-group
                v-model="surveyActive"
                hide-details class="survey-list__radio mt-0 pb-1 mx-auto"
                @click.native="fetchSurveyItem(item.code)"
              >
                <v-radio :value="item.code"></v-radio>
              </v-radio-group>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <survey-content
      :survey="surveyItem"
      :current-survey="surveyActive"
    />
  </v-container>
</template>

<script>
import SurveyContent from './SurveyContent'

export default {
  name: 'TheSurvey',
  components: {
    SurveyContent
  },
  data () {
    return {
      surveyActive: false
    }
  },
  computed: {
    surveyList () {
      return this.$store.getters.getSurveyList
    },
    surveyItem () {
      return this.$store.getters.getSurveyItem
    }
  },
  mounted () {
    this.$store.dispatch('fetchSurveyList')
  },
  methods: {
    fetchSurveyItem (surveyCode) {
      this.$store.dispatch('fetchSurveyItemByCode', surveyCode)
    }
  }
}
</script>

<style lang="scss" scoped>
.survey-list {
  max-width: 400px;
  border: thin solid rgba(0, 0, 0, 0.12);
  th:not(:last-child),
  td:not(:last-child) {
    border-right: thin solid rgba(0, 0, 0, 0.12);
  }
  &__radio {
    max-width: 28px !important;
  }
}
</style>
