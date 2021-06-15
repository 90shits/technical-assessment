<template>
  <v-container class="pt-10">
    <v-row>
      <v-col cols="12">
        <SurveyList />
        <SurveyContent />
        <SurveyFilters />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SurveyList from '../components/assessment/SurveyList'
import SurveyContent from '../components/assessment/SurveyContent'
import SurveyFilters from '../components/assessment/SurveyFilters'

export default {
  name: 'Home',
  components: {
    SurveyList,
    SurveyContent,
    SurveyFilters
  }
}
</script>
