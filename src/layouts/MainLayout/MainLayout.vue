<template>
  <div>
    <transition name="el-fade-in-linear" mode="out-in" >
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainLayout extends Vue {
  public name = 'test';
}
</script>

<style scoped></style>
