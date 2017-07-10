<template>
  <figure class="logo">
    <img
    v-if="image && image.src"
    :src="image.src"
    :alt="image.alt || image.title"
    :title="image.title || image.alt"
    />
    <slot></slot>
  </figure>
</template>
<script>
export default {
  props: ['image']
}
</script>
