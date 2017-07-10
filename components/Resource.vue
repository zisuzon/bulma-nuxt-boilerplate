<template lang="html">
  <a :href="encodeURI(fileURI)" target="_blank">
  <aside class="resource">
    <icon-large-paper-inline class="resource-icon" />
    <h4 class="resource-title">{{title}}</h4>
    <div class="resource-button-container">
      <a class="resource-button button " :href="encodeURI(fileURI)" target="_blank">Download</a>
    </div>
  </aside>
  </a>
</template>

<script>
import {
  imageUrl,
  resourceUrl
} from '~/utils/index'

export default {
  props: ['title', 'uri'],
  computed: {
    fileURI() {
      return resourceUrl(this.uri);
    }
  },
  methods: {
    resourceUrl,
    imageUrl
  }
}
</script>

<style lang="css">
  .resource-title {

  }
  .resource-icon {

  }
  .resource-button {

  }
</style>
