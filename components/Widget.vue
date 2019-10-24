<template lang="html">
  <div v-bind:class="classNameSpace" class="widget" >
    <slot class="widget-container" name="header"></slot>
    <div v-if="contentFirst" class="widget-container">
      <div class="widget-text-wrap">
      <h4 class="widget-title" v-bind:class="classNameSpace + '-title'" v-if="title">{{title}}</h4>
      <h4 class="widget-subtitle" v-bind:class="classNameSpace + '-subtitle'" v-if="subtitle">{{subtitle}}</h4>
      <div class="widget-content" v-bind:class="classNameSpace + '-content'" v-if="content && !truncate">
        <markdown>{{content}}</markdown>
      </div>
      <div class="widget-content" v-bind:class="classNameSpace + '-content'" v-if="content && truncate"><markdown>{{content | truncate}}</markdown></div>
      <div class="widget-excerpt" v-bind:class="classNameSpace + '-excerpt'" v-if="excerpt && truncate"><markdown>{{excerpt | truncate}}</markdown></div>
      <div class="widget-link" v-bind:class="classNameSpace + '-link'" v-if="link">{{link}}</div>
      <div class="widget-date" v-bind:class="classNameSpace + '-date'" v-if="date && !source">{{date | dateFormat}}</div>
      <div class="widget-source" v-bind:class="classNameSpace + '-date'" v-if="source && !date"><a v-bind:href="source.href">{{source.title}}</a></div>
      <div class="widget-credit" v-bind:class="classNameSpace + '-date'" v-if="source && date">
        {{date}} - <a v-bind:href="source.href">{{source.title}}</a>
      </div>
      </div>
      <div class="widget-photo" v-bind:class="classNameSpace + '-photo'" v-if="photo && photo.src">
        <Photo :photo="photo" />
      </div>
    </div>
    <slot class="widget-container"></slot>
    <div v-if="!contentFirst" class="widget-container">
      <div class="widget-photo" v-bind:class="classNameSpace + '-photo'" v-if="photo && photo.src">
        <Photo :photo="photo" />
      </div>
      <div class="widget-text-wrap">
      <h4 class="widget-title" v-bind:class="classNameSpace + '-title'" v-if="title">{{title}}</h4>
      <h4 class="widget-subtitle" v-bind:class="classNameSpace + '-subtitle'" v-if="subtitle">{{subtitle}}</h4>
      <div class="widget-content" v-bind:class="classNameSpace + '-content'" v-if="!excerpt && content && !truncate && !truncateLarge"><markdown>{{content}}</markdown></div>
      <div class="widget-content" v-bind:class="classNameSpace + '-content'" v-if="!excerpt && content && !truncate && truncateLarge"><markdown>{{content | truncateLarge}}</markdown></div>
      <div class="widget-content" v-bind:class="classNameSpace + '-content'" v-if="!excerpt && content && truncate && !truncateLarge"><markdown>{{content | truncate}}</markdown></div>
      <div class="widget-content" v-bind:class="classNameSpace + '-excerpt'" v-if="excerpt"><markdown>{{excerpt | truncate}}</markdown></div>
      <div class="widget-link" v-bind:class="classNameSpace + '-link'" v-if="link">{{link}}</div>
      <div class="widget-date" v-bind:class="classNameSpace + '-date'" v-if="date && !source">{{date | dateFormat}}</div>
      <div class="widget-source" v-bind:class="classNameSpace + '-date'" v-if="source && !date"><a v-bind:href="source.href">{{source.title}}</a></div>
      <div class="widget-credit" v-bind:class="classNameSpace + '-date'" v-if="source && date">
        {{date}} - <a v-bind:href="source.href">{{source.title}}</a>
      </div>
      </div>
    </div>
    <slot class="widget-container" name="footer"></slot>
  </div>
</template>

<script>
import markdown from 'vue-markdown'
import Photo from './Photo'
import Resource from './Resource'

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
    credit () {
      return 'credit'
    },
    classNameSpace () {
      return this.namespace ? this.namespace : 'generic'
    }
  },
  methods: {
  },
  components: {
    Photo,
    Resource,
    markdown
  }
}
</script>

<style lang="css">
.widget-text-wrap {
  padding: 1em;
  font-size: 1em;
}
.widget-title {
  font-size: 1.5em;
  padding: 1em 0;
}
.widget-content,.widget-excerpt {
  font-size: 1em;
}

</style>
