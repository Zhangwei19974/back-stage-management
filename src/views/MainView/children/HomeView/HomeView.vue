<template>
  <div class="home">
    <div>
      <home-echarts/>
    </div>
    <div class="main">
      asdasd
      <el-button @click="test">asdasd</el-button>
    </div>
    <div>
      <widget-echarts :options="options"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeEcharts from '@/views/MainView/children/HomeView/components/HomeEcharts.vue';
import WidgetEcharts from '@/components/widgets/widget-echarts.vue';
import {request} from '@/utils';

@Component({
  components: { WidgetEcharts, HomeEcharts },
})
export default class HomeView extends Vue {
  private options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  handleClick(){
    this.$router.push('/about')
  }
  test(){
    console.log('asdasd')
    request({url: '/google',method: 'get'})
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
