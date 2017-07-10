<template lang="html">
  <container :single="true">
    <div class="level">
      <div class="level-item level-left">
        <a href="/">
        <gravatar
        email="matthew.christopher.davidson@gmail.com"
        title="sandbox by @mcd"
        />
        </a>
      </div>
      <div class="level-item">
      </div>
      <div class="level-item level-right">
        <nav class="nav">
          <li class="nav-item"><a href="/about">about</a></li>
          <li class="nav-item"><a href="/contact">contact</a></li>
        </nav>
      </div>
    </div>
  </container>
</template>

<script>
import Container from './Container'
import Gravatar from './Gravatar'

export default {
  components: {
    Container,
    Gravatar
  }
}
</script>

<style lang="css">
</style>
