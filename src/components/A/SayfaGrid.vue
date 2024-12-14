<template>

<div class="grid grid-cols-[1fr_4fr] grid-rows-[auto_auto] gap-4 p-4">
  <!-- Nav Menu: First Row, First Column -->
  <div class="p-4">
    <slot name="navMenu"></slot>
  </div>

  <!-- content: First Row, Second Column -->
  <div class="p-4">
    <slot name="content"></slot>
  </div>

  <!-- extra: Second Row, Spanning Both Columns -->
  <div class="p-4 col-span-2">
    <slot name="extra"></slot>
  </div>
</div>

</template>

<script>
export default {
  name: 'SayfaGrid'
}
</script>

<style>

</style>