import Vue from 'vue'
import Vuex from 'vuex'
import { sortArrayObjectByKey } from '../helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    surveyList: [],
    surveyItem: []
  },

  getters: {
    getSurveyList (state) {
      return state.surveyList
    },
    getSurveyItem (state) {
      return state.surveyItem
    }
  },

  mutations: {
    setSurveyList (state, surveyList) {
      // Sort survey list by survey code
      state.surveyList = sortArrayObjectByKey(surveyList, 'code') || []
    },

    setSurveyItem (state, surveyItem) {
      state.surveyItem = surveyItem
    }
  },

  actions: {
    async fetchSurveyList ({ commit }) {
      const { data } = await Vue.axios.get('/api/list.json')
      commit('setSurveyList', data)
    },

    async fetchSurveyItemByCode ({ commit }, surveyCode) {
      const { data } = await Vue.axios.get(`/api/${surveyCode}.json`)
      commit('setSurveyItem', data)
    }
  }
})
