

// ## IMPORTS --- --- ---
// import axios from "axios";
const axios = require('axios')
// import { SERVER_URL } from "./constants";
const {SERVER_URL} = require('./constants')

// ## CONSTANTS --- --- ---
SERVER_URL
console.log(SERVER_URL)
// ## METHODS --- --- --- 
const CuyeGiris = async (giris_nesne) => {
  const {email, parola} = giris_nesne
  const urli = SERVER_URL + '/kullanicilar'
  console.log(urli)
  console.log(urli + '?' + 'email=' + email + '&' + 'parola=' + parola)
  const uyeBilgi = await axios.get(urli + '?' + 'email=' + email + '&' + 'parola=' + parola)
  // const uyeBilgi = await axios.get(urli, {params: giris_nesne})
  console.log(uyeBilgi.data)
  return uyeBilgi.data
}

// ## TESTS --- --- ---
const first = {email: 'tempus@yahoo.org', parola: 'JLB72EEL6CS'}
const second = {email: 'sagittis@hotmail.couk', parola: 'ROL21EIH8UM'}
const test = CuyeGiris(first)


// ## EXPORTS --- --- ---