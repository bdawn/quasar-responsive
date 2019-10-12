<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Quasar Responsive
        </q-toolbar-title>
        <!-- 设置class gt-xs，表示当窗口宽度大于xs时才会显示head-menu -->
        <head-menu class="no-wrap row gt-xs"></head-menu>
        <!-- 设置class lt-sm，表示当窗口宽度小于sm时才会显示q-btn -->
        <q-btn flat round class="lt-sm" color="white" icon="filter_list" >
          <q-menu anchor="bottom right" self="top right" content-style="padding: 10px 20px">
            <head-menu ></head-menu>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <transition name="fade-transform" mode="out-in">
        <router-view/>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import HeadMenu from '../components/HeadMenu'
export default {
  name: 'MyLayout',
  components: {
    HeadMenu
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
<style>
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
