<template>
  <section class="page index">
    <container :single="true">
      <div class="level">
        <div class="level-item level-left">
          <gravatar
          email="matthew.christopher.davidson@gmail.com"
          title="sandbox by @mcd"
          />
        </div>
        <div class="level-item">
        </div>
        <div class="level-item level-right">
          <nav class="nav">
            <li class="nav-item"><a href="#">item</a></li>
            <li class="nav-item"><a href="#">item</a></li>
            <li class="nav-item"><a href="#">item</a></li>
          </nav>
        </div>
      </div>

    </container>
    <container>
      <column>
        <widget
        title="About"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        :photo="{src:'//lorempixel.com/300/200'}"
        />
      </column>
      <column>
        <widget
        title="About"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        :photo="{src:'//lorempixel.com/300/200'}"
        />
      </column>
      <column>
        <widget
        title="About"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        :photo="{src:'//lorempixel.com/300/200'}"
        />
      </column>
    </container>
  </section>
</template>

<script>
import components from '~components'

export default {
  components: {
    ...components
  }
}
</script>

<style media="screen">
  .column .widget {
    border: 3px solid grey;
    /*margin: 5px;*/
  }
</style>
