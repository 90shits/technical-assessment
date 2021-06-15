import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    surveyList: []
  },

  getters: {
    getSurveyList (state) {
      return state.surveyList
    }
  },

  mutations: {
    setSurveyList (state, surveyList) {
      // Sort by survey code, a greater than b then 1 & otherwise
      state.surveyList = surveyList.sort((a, b) => (a.code > b.code) ? 1 : -1)
    }
  },

  actions: {
    async fetchSurveyList ({ commit }) {
      const { data } = await Vue.axios.get('/api/list.json')
      commit('setSurveyList', data)
    }
  }
})
