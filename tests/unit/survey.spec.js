import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { expect as chaiExpect } from 'chai'

import { getters, mutations } from '../../src/store'
import ProductNumber from '../../src/components/assessment/survey-item/ProductNumber.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

// TODO: add more test!!!. Bellow just few test base on low effort

// Passing Props test
test('Displays product number props value', () => {
  const wrapper = mount(ProductNumber, {
    propsData: { result: 69 }
  })
  expect(wrapper.find('input[type="text"]').element.value).toBe('69')
})

// Vuex store test
test('mutations search keyword', () => {
  const state = {
    searchWord: '',
    surveyList: [],
    surveyItem: [],
    surveyFilteredList: []
  }
  mutations.filterSurveyList(state, 'cat')
  expect(state.searchWord).toBe('cat')
})

describe('getters: ', () => {
  it('filteredSurvey', () => {
    const state = {
      surveyList: [
        { name: 'item', code: 'secret_1' },
        { name: 'another item', code: 'secret_2' }
      ],
      searchWord: '',
      surveyItem: [],
      surveyFilteredList: []
    }
    // mock search filtered with fake keyword
    mutations.filterSurveyList(state, '_1')
    const result = getters.getFilteredSurveyList(state)
    chaiExpect(result).to.deep.equal([
      { name: 'item', code: 'secret_1' }
    ])
  })
})
