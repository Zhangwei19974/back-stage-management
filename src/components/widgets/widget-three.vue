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
  data: function():{
    renderer: WebGLRenderer
    scene: Scene
    camera:PerspectiveCamera
    animationLoop:Array<()=>(void | any)>
    width:number
    height:number
    } {
    return {
      renderer: new WebGLRenderer(),
      scene: new Scene(),
      camera: new PerspectiveCamera(),
      animationLoop: [],
      width: 0,
      height: 0
    };
  },
  mounted() {
    mainDom = (this.$refs.threeMainRef as any).$el
    dom = this.$refs.threeRef as HTMLDivElement
    this.initTree()
  },
  methods: {
    initTree(){
      this.width = mainDom.offsetWidth
      this.height = mainDom.offsetHeight
      let fov =Math.atan(this.height/this.width/2)*2*90
      this.camera = new PerspectiveCamera(fov,this.width/this.height,100,this.width*Math.cos(fov))
      this.renderer.setSize(this.width,this.height)
      dom.appendChild(this.renderer.domElement)
      this.renderer.render(this.scene,this.camera)
      this.initWatchBoxResize()
      this.initAnimation()
    },
    initWatchBoxResize(){
      let observer = new ResizeObserver((e)=>{
        let boxSize = e[0].borderBoxSize[0]
        this.width = boxSize.inlineSize
        this.height = boxSize.blockSize
        boxSize.blockSize && boxSize.inlineSize&& this.renderer.setSize( boxSize.inlineSize,boxSize.blockSize)
        this.camera.aspect = this.width/this.height
        this.$emit('resize')
        this.camera.updateProjectionMatrix()
      })
      observer.observe(mainDom,{box: 'border-box'})
    },
    initAnimation(){
      // 自动场景加载
      this.animationLoop.forEach(fun=>{
        fun()
      })
      this.renderer.render(this.scene,this.camera)
      requestAnimationFrame(this.initAnimation)
    },
    addAnimation(fun:()=>(void | any)){
      this.animationLoop.push(fun)
    }
  }
});
</script>

<style scoped lang="scss">

</style>
