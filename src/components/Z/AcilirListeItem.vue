<template>
  <details class="collapse bg-base-200">
    <summary class="collapse-title text-xl font-medium">{{veri.baslik}}</summary>
    <div class="collapse-content">
      <p>{{veri.icerik}}</p>
    </div>
  </details>
  </template>
  
  <script>
  export default {
    name: 'AcilirListe',
    props:['veri']
  }
  </script>
  
  <style>
  
  </style>