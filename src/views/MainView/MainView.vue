<template>
  <div>
    <el-container style="height: 100%;width: 100%">
      <el-header>
        <main-menu/>
      </el-header>
      <el-container>
        <!--        <el-aside width="200px">-->
        <!--          <main-menu/>-->
        <!--        </el-aside>-->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <!--      <el-footer>-->
      <!--        底部-->
      <!--      </el-footer>-->
    </el-container>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/views/MainView/children/components/MainMenu.vue';

@Component({
  components: { MainMenu },
})
export default class HomeView extends Vue {
  handleClick(){
    this.$router.push('/about')
  }
}
</script>
<style lang="scss">
.el-main{
  padding: 0;
}
</style>
