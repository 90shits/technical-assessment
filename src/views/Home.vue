<template>
  <v-container class="pt-10">
    <v-row>
      <v-col cols="12">
        <the-survey />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheSurvey from '../components/assessment/TheSurvey'

export default {
  name: 'Home',
  components: {
    TheSurvey
  }
}
</script>
