<template lang="html">
  <div class="photo image">
    <a v-bind:href="photo.href" v-if="photo.href" :target="photo.href.search('/') === 0 ? '_self' : '_blank'">
      <img
        v-bind:src="imageUrl(photo.src)"
        v-bind:alt="photo.title"
        v-bind:title="photo.title"
      />
    </a>
    <img
      v-else
      v-bind:src="imageUrl(photo.src)"
      v-bind:alt="photo.title"
      v-bind:title="photo.title"
    />
  </div>
</template>

<script>
import {
  iconSlug,
  imageUrl
} from '~/utils/index'

export default {
  props: ['photo'],
  methods: {
    iconSlug,
    imageUrl
  }
}
</script>

<style lang="css">
</style>
