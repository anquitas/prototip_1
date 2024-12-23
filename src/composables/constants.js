// ## CONSTANTS
const SERVER_URL = 'http://localhost:4000'

const FOOTER_BILGI = { 
  servisler: [
      { baslik: 'Branding', link: 'https://www.google.com'},
      { baslik: 'Design', link: 'https://www.gmail.com'},
      { baslik: 'Marketing', link: 'https://www.google.com'},
      { baslik: 'Advertisement', link: 'https://www.gmail.com'}
  ],
  company: [
    { baslik: 'About us', link: 'https://www.google.com'},
    { baslik: 'Contact', link: 'https://www.gmail.com'},
    { baslik: 'Jobs', link: 'https://www.google.com'},
    { baslik: 'Press kit', link: 'https://www.gmail.com'}
  ],
  legal: [
    { baslik: 'Terms of use', link: 'https://www.google.com'},
    { baslik: 'Privacy policy', link: 'https://www.gmail.com'},
    { baslik: 'Cookie policy', link: 'https://www.google.com'} 
  ]
  }



// ## EXPORTS --- --- ---
// export {} // ES6 multi export
module.exports = { 
  SERVER_URL,
  FOOTER_BILGI
  
} // common js multi export

console.log('+ constants modülü bağlandı')