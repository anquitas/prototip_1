import { createStore } from 'vuex'

export default createStore({
  state: {
    seciliKategori: null,
    UyeBilgi: {
      isim:'monica',
      soyisim:'bing',
      eposta:'monica@perk.com'
    }
  },
  getters: {
    seciliKategori: (state) => state.seciliKategori,
    UyeBilgi: (state) => state.UyeBilgi
    
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
