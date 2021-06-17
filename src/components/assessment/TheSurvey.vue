<template>
  <v-container class="survey">
    <h2 class="mb-2">Products Survey</h2>

    <v-text-field
      v-model="searchWord"
      label="Keyword"
      hint="Filter result by survey name or code, For example: XX1,..."
      append-icon="mdi-magnify"
      outlined dense clearable
    ></v-text-field>

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
            v-for="(item, i) in surveyFilteredList"
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
          <tr
            v-if="!surveyFilteredList || surveyFilteredList.length <= 0"
            class="text-center"
          >
            <td colspan="3">No results found</td>
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
    surveyFilteredList () {
      return this.$store.getters.getFilteredSurveyList || this.$store.getters.getSurveyList
    },
    surveyItem () {
      return this.$store.getters.getSurveyItem
    },
    searchWord: {
      get () {
        return this.$store.state.searchWord
      },
      set (keyword) {
        this.surveyActive = false
        this.$store.dispatch('filterSurvey', keyword)
      }
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
.survey {
  max-width: 600px;
  &-list {
    border: thin solid rgba(0, 0, 0, 0.12);
    th:not(:last-child),
    td:not(:last-child) {
      border-right: thin solid rgba(0, 0, 0, 0.12);
    }
    &__radio {
      max-width: 28px !important;
    }
  }
}
</style>
