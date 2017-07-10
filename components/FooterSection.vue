<template lang="html">
  <section class="footer">
    <container :single="true">
      <div class="level">
        <div class="level-item level-left">
          <div class="">
            <h4 class="subtitle">twitter feed</h4>
            <p>this is a tweet</p>
          </div>
        </div>
        <div class="level-item level-left">
          <div class="">
            <h4 class="subtitle">call to action</h4>
            <p>this is a callout</p>
          </div>
        </div>
        <div class="level-item level-left">
          <div class="">
            <h4 class="subtitle">social icons</h4>
            <p>
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              <span class="icon">
                <i class="fa fa-facebook"></i>
              </span>
              <span class="icon">
                <i class="fa fa-linkedin"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import Container from './Container'
import Widget from './Widget'
import Gravatar from './Gravatar'

export default {
  components: {
    Container,
    Widget,
    Gravatar
  }
}
</script>

<style lang="css">
.footer {
  background: #fff;
}
</style>
