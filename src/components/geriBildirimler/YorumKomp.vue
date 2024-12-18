<template>
  <p>{{ yorum.gonderen }}</p>
  <p>{{ yorum.yorum }}</p>
</template>

<script>
export default {
  props: ['yorum']
}
</script>
