<template>
  <div id="app"  >
    <MainLayout/>
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
#app{
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
</style>
<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';
</script>
