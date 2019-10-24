<template lang="html">
  <section :class="wrapperClass + '-section'">
    <div class="container">
      <div class="columns" v-bind:class="{'is-multiline':multiline}">
        <div v-if="single" class="column">
          <slot></slot>
        </div>
        <slot v-else></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'multiline',
    'single',
    'namespace'
  ],
  computed: {
    wrapperClass () {
      return this.namespace ? this.namespace : 'generic'
    }
  }
}
</script>

<style lang="css">
</style>
