<template>
  <container-flex ref="threeMainRef">
    <div ref="threeRef"/>
  </container-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import ContainerFlex from '@/components/container/container-flex.vue';
import {  PerspectiveCamera, Scene, WebGLRenderer } from 'three';

let dom:HTMLDivElement
let mainDom:HTMLDivElement

export default Vue.extend({
  components: { ContainerFlex },
  data:function() {
    return {
      renderer : new WebGLRenderer(),
      scene: new Scene(),
      camera:new PerspectiveCamera()
    };
  },
  mounted() {
    mainDom = (this.$refs.threeMainRef as any).$el
    dom = this.$refs.threeRef as HTMLDivElement
    this.initTree()
  },
  methods:{
    initTree(){
      let width = mainDom.offsetWidth
      let height = mainDom.offsetHeight
      this.camera = new PerspectiveCamera(75,width/height,1,1000)
      this.renderer.setSize(width,height)
      dom.appendChild(this.renderer.domElement)
      this.renderer.render(this.scene,this.camera)
      this.initWatchBoxResize()
    },
    initWatchBoxResize(){
      let observer = new ResizeObserver((e)=>{
        let boxSize = e[0].borderBoxSize[0]
        boxSize.blockSize && boxSize.inlineSize&& this.renderer.setSize( boxSize.inlineSize,boxSize.blockSize)
      })
      observer.observe(mainDom,{box:'border-box'})
    }
  }
});
</script>

<style scoped lang="scss">

</style>
