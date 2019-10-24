<template lang="html">
  <figure>
    <img :src="src" />
  </figure>
</template>

<script>

export default {
  props: ['gif', 'png', 'name', 'immediate'],
  data () {
    return {
      src: '',
      state: 'still'
    }
  }
}
</script>

<style lang="css">
</style>
