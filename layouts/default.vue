<template>
  <div class="page">
    <HeaderSection />
    <nuxt/>
    <FooterSection />
  </div>
</template>

<style lang="css">

  html,body,.page {
    background: #fff;
  }
</style>

<script>
import components from '~components'

export default {
  components: {
    ...components
  }
}
</script>
