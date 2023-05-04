<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <el-button @click="handleClick">预留大屏展示</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class HomeView extends Vue {
  handleClick(){
    this.$router.push('/about')
  }
}
</script>
