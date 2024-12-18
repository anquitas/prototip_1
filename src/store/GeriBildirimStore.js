import { defineStore } from 'pinia'

export const useGeriBildirim = defineStore(
  'GeriBildirim',
  {
    // ## STATE --- --- ---
    state: () => ({
      veri: {
        baslik:"Arby's şikayet",
        gonderen:"phoebe buffey",
        tarih:"11/12/2001",
        icerik:"Bu 0850 9010828 numara, engellediğim halde benim adıma olup, eşimin kullandığı telefonu aralıksız her gün en az 5-6 defa arıyor.  eşimin kullandığı telefonu aralıksız her gün en az 5-6 defa arıyor. eşimin kullandığı telefonu aralıksız her gün en az 5-6 defa arıyor",
        destek:10,
        yorumlar: [
          {id: 1, gonderen: "ross", yorum: "we were on a break"},
          {id: 2, gonderen: "joey", yorum: "joey doesnt share food"}
        ]
      }
    }), // state end



    // ## GETTERS --- --- ---
    getters: {

    }, // getters



    // ## ACTIONS --- --- ---
    actions: {

    } // actions 

  } // store object

) // define store