<template>
 <footer class="footer bg-neutral text-neutral-content p-10">
  <FooterList title="services" :linkler="servisler"/>
  <FooterList title="Company" :linkler="company"/>
  <FooterList title="Legal" :linkler="legal"/>
</footer> 
</template>

<script>
import FooterList from './FooterList.vue';

export default {
name: 'BaseFooter',
components: {FooterList},
data () {
  return { 
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
}

}
</script>

<style>

</style>