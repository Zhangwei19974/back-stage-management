<template>
  <div class="home">
    <div>
      <home-echarts/>
    </div>
    <div class="main">
      asdasd
    </div>
    <div>
      asdasd
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeEcharts from '@/views/MainView/children/HomeView/components/HomeEcharts.vue';

@Component({
  components: { HomeEcharts },
})
export default class HomeView extends Vue {
  handleClick(){
    this.$router.push('/about')
  }
}
</script>

<style lang="scss" scoped>

.home{
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(4,minmax(0,1fr));
  grid-template-rows: repeat(3,minmax(0,1fr));
  flex-shrink: 0;

  &>div{
    overflow: hidden;
  }
  .main{
    grid-column: span 2;
    grid-row: span 2;
  }
}

</style>
