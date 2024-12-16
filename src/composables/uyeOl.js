

// ## IMPORTS --- --- ---
import axios from "axios";
import { SERVER_URL } from "./constants";


// ## CONSTANTS --- --- ---
const POST_URL = SERVER_URL + '/kullanicilar'

// ## METHODS --- --- --- 
const CUyeOl = async (uye_bilgi_nesne) => {
  const result = axios.post(POST_URL, uye_bilgi_nesne)
  return result
}

// ## TESTS --- --- ---


// ## EXPORTS --- --- ---
export {
  CUyeOl
}