<template lang="html">
  <figure class="avatar gravatar">
    <img :src="imageSrc" >
  </figure>
</template>

<script>
import gravatar from 'gravatar';

export default {
  props: ['email', 'src'],
  computed: {
    imageSrc() {
      return this.gravatar.url || this.src;
    }
  },
  data() {
    return {
      gravatar: {
        url:false
      }
    }
  },
  created() {
    this.gravatar.url = gravatar.url(this.email, {
      default: this.src
    });
  }
}
</script>
