<template>
  <section class="page about">
    <container :single="true">
      <form class="form">
        <legend class="legend">Get in touch</legend>
        <input class="input" type="text" name="name" value="" placeholder="Joe Example" />
        <input class="input" type="email" name="email" value="" placeholder="email@example.com" />
      </form>
    </container>
  </section>
</template>

<script>
import components from '~components'

export default {
  components: {
    ...components
  }
}
</script>
