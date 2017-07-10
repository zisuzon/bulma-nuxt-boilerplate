<template lang="html">
  <div class="container">
    <div class="columns" v-bind:class="{'is-multiline':multiline}">
      <div v-if="single" class="column">
        <slot></slot>
      </div>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'multiline',
    'single'
  ]
}
</script>

<style lang="css">
</style>
