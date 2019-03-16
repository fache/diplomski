import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      showSidebar: true,
      active: "neaktivan",
      sid: null,
      userId: null,
      userIme: null,
      userPrezime: null,
      predmeti: [],
      aktivnaGrupa:null,
      predmetZaUredivanje:null,
      uredivanjePredmeta:null
    }),
    mutations: {
      increment(state) {
        state.counter++
      }
    }
  })
}

export default createStore
