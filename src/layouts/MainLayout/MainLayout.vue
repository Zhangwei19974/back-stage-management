<template>
  <div class="main-layout">
    <transition name="main-page" mode="out-in" >
      <keep-alive>
        <router-view class="view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/styles/animation.scss'
@Component
export default class MainLayout extends Vue {
  public name = 'test';
}
</script>

<style lang="scss" scoped>
.main-layout{
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  .view{
    flex:1
  }
}
</style>
