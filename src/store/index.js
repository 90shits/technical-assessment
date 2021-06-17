import Vue from 'vue'
import Vuex from 'vuex'
import { sortArrayObjectByKey } from '../helpers'

Vue.use(Vuex)

export const state = {
  surveyList: [],
  surveyFilteredList: [],
  surveyItem: [],
  searchWord: null
}

export const getters = {
  getSurveyList (state) {
    return state.surveyList
  },
  getFilteredSurveyList (state) {
    return state.surveyFilteredList
  },
  getSurveyItem (state) {
    return state.surveyItem
  }
}

export const mutations = {
  setSurveyList (state, surveyList) {
    // Sort survey list by survey code
    state.surveyList = sortArrayObjectByKey(surveyList, 'code') || []
  },

  setSurveyFilteredList (state, surveyList) {
    state.surveyFilteredList = sortArrayObjectByKey(surveyList, 'code') || []
  },

  filterSurveyList (state, keyword) {
    state.surveyItem = []
    if (!keyword) {
      state.searchWord = null
      state.surveyFilteredList = null
    } else {
      state.searchWord = keyword
      keyword = keyword.trim().toLowerCase()
      state.surveyFilteredList = state.surveyList.filter(survey => {
        return survey.code.toLowerCase().includes(keyword) || survey.name.toLowerCase().includes(keyword)
      })
    }
  },

  setSurveyItem (state, surveyItem) {
    state.surveyItem = surveyItem
  }
}

export const actions = {
  async fetchSurveyList ({ commit }) {
    const { data } = await Vue.axios.get('/api/list.json')
    commit('setSurveyList', data)
    commit('setSurveyFilteredList', data)
  },

  async fetchSurveyItemByCode ({ commit }, surveyCode) {
    const { data } = await Vue.axios.get(`/api/${surveyCode}.json`)
    commit('setSurveyItem', data)
  },

  filterSurvey ({ commit }, keyword) {
    commit('filterSurveyList', keyword)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
