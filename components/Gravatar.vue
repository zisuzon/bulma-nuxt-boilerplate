<template lang="html">
  <figure class="avatar gravatar">
    <div class="level">
      <div class="level-item">
        <img :src="imageSrc">
      </div>
      <div class="level-item">
        <strong v-if="title" class="caption">{{title}}</strong>
      </div>
    </div>
  </figure>
</template>

<script>
import gravatar from 'gravatar'

export default {
  props: ['email', 'src', 'title'],
  computed: {
    imageSrc () {
      return this.gravatar.url || this.src
    }
  },
  data () {
    return {
      gravatar: {
        url: false
      }
    }
  },
  created () {
    this.gravatar.url = gravatar.url(this.email, {
      default: this.src
    })
  }
}
</script>
<style media="screen">
  .avatar.gravatar {
    display: inline-block;
  }

</style>
