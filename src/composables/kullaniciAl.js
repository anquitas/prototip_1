// ## IMPORTS --- --- ---
// import axios from 'axios' // ES6 single import
const axios = require('axios') // common js single import


// ## CONSTANTS --- --- ---
const SERVER_URL = 'http://localhost:4000/kullanicilar'


// ## METHODS --- --- --- 
const CkullaniciAl = async (kullaniciID) => {
  const result = await axios.get(SERVER_URL+ '/' + kullaniciID)
  // console.log(result)
  // console.log(result)
  return result.data
}


// ## TESTSs --- --- ---

// CkullaniciAl()


// ## EXPORTS --- --- ---
// export {} // ES6 multi export
module.exports = { CkullaniciAl } // common js multi export
console.log('+ kullaniciAl modülü bağlandı')