// ## IMPORTS --- --- ---
// import axios from 'axios' // ES6 single import
const axios = require('axios') // common js single import
import { SERVER_URL } from '../constants'


// ## CONSTANTS --- --- ---



// ## METHODS --- --- ---
const  istekGet = async (route) => { 
  return axios.get(SERVER_URL+ route)
}

const istekGetParametre = async (route, parameter) => {
  return axios.get(SERVER_URL + route + '/' + parameter)
  
}

const istekGetSorgu = async (route, sorguNesnesi) => {
  return axios.get(SERVER_URL + route + '?' + parameter)
}


// ## TESTS --- --- ---


// ## EXPORTS --- --- ---