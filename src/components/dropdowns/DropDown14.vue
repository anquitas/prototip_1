<!-- Card as dropdown -->

<template>
<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Click</div>
  <div
    tabindex="0"
    class="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow">
    <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DropDown14'
}
</script>

<style>

</style>