<template lang="html">
  <span>
    <router-link v-if="
    item.href &&
    item.href !== '#' &&
    item.href.search &&
    item.href.search('http') === -1
    "
    :to="item.href"
    >{{item.title}}</router-link>
    <a
    :href="item.href"
    v-if="item.href && item.href.search && item.href.search('http') > -1"
    :title="item.title"
    >{{item.title}}</a>
    <span v-if="!item.href || item.href == '#'" >{{item.title}}</span>
  </span>
</template>

<script>
import {
  resourceUrl
} from '@/utils';

export default {
  props: ['item'],
  methods: {
    resourceUrl
  }
};
</script>

<style lang="css">
</style>
