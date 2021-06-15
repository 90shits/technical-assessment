import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

// TODO: write test, bellow just a sh*t - no value
describe('SurveyList', () => {
  let getters

  beforeEach(() => {
    getters = {
      getSurveyList: () => []
    }
  })

  it('Empty survey list', () => {
    expect([]).toStrictEqual(getters.getSurveyList())
  })
})
