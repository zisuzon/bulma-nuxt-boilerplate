<template lang="html">
  <figure>
    <img :src="src" />
  </figure>
</template>

<script>
import $ from 'jquery';
import channel from '@/animation-channel';

export default {
  props: ['gif', 'png', 'name', 'immediate'],
  created() {
    const vm = this;
    channel.$emit(`animation.created:${vm.name}`);
    vm.$set(vm.$data, 'src', vm.gif);
    channel.$on(`animation.start:${this.name}`, () => {
      $(vm.$el).find('img').attr('src', vm.png);
      $(vm.$el).find('img').attr('src', vm.gif);
    });
    channel.$on(`animation.stop:${vm.name}`, () => {
      $(vm.$el).find('img').attr('src', vm.png);
    });
  },
  data() {
    return {
      src: '',
      state: 'still'
    };
  }
};
</script>

<style lang="css">
</style>
