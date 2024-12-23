// ## IMPORTS --- ---- ---
import { defineStore } from 'pinia'


// ## EXPORTS --- --- ---
export const useKullaniciStore = defineStore(
  'GeriBildirim',
  {
    state: () => ({
      girisPanelAcik: false
    }), // state

    getters: {

    }, // getters

    actions: {
      girisPanelToggle () {
        this.girisPanelAcik = !this.girisPanelAcik
      }
    } // actions 
  } // store object
) // define store