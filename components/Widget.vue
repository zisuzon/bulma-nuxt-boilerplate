<template lang="html">
  <div v-bind:class="namespace" class="widget" @click="openLink">
    <slot class="widget-container" name="header"></slot>
    <div v-if="contentFirst" class="widget-container">
      <div class="widget-text-wrap">
      <h4 class="widget-title" v-bind:class="namespace + '-title'" v-if="title">{{title}}</h4>
      <h4 class="widget-subtitle" v-bind:class="namespace + '-subtitle'" v-if="subtitle">{{subtitle}}</h4>
      <div class="widget-content" v-bind:class="namespace + '-content'" v-if="content && !truncate">
        <markdown>{{content}}</markdown>
      </div>
      <div class="widget-content" v-bind:class="namespace + '-content'" v-if="content && truncate"><markdown>{{content | truncate}}</markdown></div>
      <div class="widget-excerpt" v-bind:class="namespace + '-excerpt'" v-if="excerpt && truncate"><markdown>{{excerpt | truncate}}</markdown></div>
      <div class="widget-link" v-bind:class="namespace + '-link'" v-if="link">{{link}}</div>
      <div class="widget-date" v-bind:class="namespace + '-date'" v-if="date && !source">{{date | dateFormat}}</div>
      <div class="widget-source" v-bind:class="namespace + '-date'" v-if="source && !date"><a v-bind:href="source.href">{{source.title}}</a></div>
      <div class="widget-credit" v-bind:class="namespace + '-date'" v-if="source && date">
        {{date}} - <a v-bind:href="source.href">{{source.title}}</a>
      </div>
      </div>
      <div class="widget-photo" v-bind:class="namespace + '-photo'" v-if="photo && photo.src">
        <Photo :photo="photo" />
      </div>
    </div>
    <slot class="widget-container"></slot>
    <div v-if="!contentFirst" class="widget-container">
      <div class="widget-photo" v-bind:class="namespace + '-photo'" v-if="photo && photo.src">
        <Photo :photo="photo" />
      </div>
      <div class="widget-text-wrap">
      <h4 class="widget-title" v-bind:class="namespace + '-title'" v-if="title">{{title}}</h4>
      <h4 class="widget-subtitle" v-bind:class="namespace + '-subtitle'" v-if="subtitle">{{subtitle}}</h4>
      <div class="widget-content" v-bind:class="namespace + '-content'" v-if="!excerpt && content && !truncate && !truncateLarge"><markdown>{{content}}</markdown></div>
      <div class="widget-content" v-bind:class="namespace + '-content'" v-if="!excerpt && content && !truncate && truncateLarge"><markdown>{{content | truncateLarge}}</markdown></div>
      <div class="widget-content" v-bind:class="namespace + '-content'" v-if="!excerpt && content && truncate && !truncateLarge"><markdown>{{content | truncate}}</markdown></div>
      <div class="widget-content" v-bind:class="namespace + '-excerpt'" v-if="excerpt"><markdown>{{excerpt | truncate}}</markdown></div>
      <div class="widget-link" v-bind:class="namespace + '-link'" v-if="link">{{link}}</div>
      <div class="widget-date" v-bind:class="namespace + '-date'" v-if="date && !source">{{date | dateFormat}}</div>
      <div class="widget-source" v-bind:class="namespace + '-date'" v-if="source && !date"><a v-bind:href="source.href">{{source.title}}</a></div>
      <div class="widget-credit" v-bind:class="namespace + '-date'" v-if="source && date">
        {{date}} - <a v-bind:href="source.href">{{source.title}}</a>
      </div>
      </div>
    </div>
    <slot class="widget-container" name="footer"></slot>
  </div>
</template>

<script>
// import $ from 'jquery';
import Photo from './Photo';

export default {
  props: [
    'title',
    'subtitle',
    'content',
    'excerpt',
    'photo',
    'link',
    'truncate',
    'truncateLarge',
    'namespace',
    'source',
    'date',
    'href',
    'contentFirst'
  ],
  computed: {
    credit() {
      return 'credit';
    }
  },
  methods: {
    openLink() {
      // let link = $(this.el).find('.widget-link');
      // if (link.length === 0) {
      //   link = $(this.el).find('a');
      // }
      // $(link).trigger('click');
    }
  },
  components: {
    Photo
  }
};
</script>

<style lang="css">

</style>
