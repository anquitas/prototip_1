import { createStore } from 'vuex'

export default createStore({
  state: {
    seciliKategori: null
  },
  getters: {
    seciliKategori: (state) => state.seciliKategori
  },
  mutations: {
    setKategori (state, kategori) {
      state.seciliKategori = kategori
      console.log(state.seciliKategori)
    }
  },
  actions: {
    updateKategori({commit}, kategori) {
      commit('setKategori', kategori)
    }
  },
  modules: {
  }
})
