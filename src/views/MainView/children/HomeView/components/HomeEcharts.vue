<template>
  <div class="home-echarts">
    <div id="echarts-container"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as echarts from 'echarts';

@Component({
  components: {},
})
export default class HomeView extends Vue {
  private mounted(){
    console.log('asdasd');
    this.initEcharts()
  }
  private destroyed(){
    console.log('asdasdasd');
  }
  private initEcharts(){
    let dom = document.getElementById('echarts-container')!
    let echart =echarts.init(dom)
    echart.setOption({
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
    })
    let observer = new ResizeObserver((e)=>{
      let boxSize = e[0].contentRect
      echart.resize()
    })
    observer.observe(dom)
  }
}
</script>

<style lang="scss">
.home-echarts{
  height: 100%;
  width: 100%;
  #echarts-container{
    height: 100%;
    width: 100%;

  }
}
</style>
