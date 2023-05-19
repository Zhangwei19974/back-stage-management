<template>
  <div class="home-echarts">
    <div id="echarts-container" ref="container"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as echarts from 'echarts';
import { debounce } from 'lodash'
@Component({
  components: {},
})
export default class HomeView extends Vue {
  @Prop({type: Object,default: ()=>({})}) options:any
  private test = debounce((e,echart)=>{
    echart.resize()
  },1000)
  private mounted(){
    this.initEcharts()
  }
  private destroyed(){
    console.log('asdasdasd');
  }
  private initEcharts(){
    // let dom = document.getElementById('echarts-container')!
    let dom = this.$refs.container as HTMLDivElement
    let echart =echarts.init(dom)
    echart.setOption(this.options)
    let observer = new ResizeObserver(e=>this.test(e,echart))
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
