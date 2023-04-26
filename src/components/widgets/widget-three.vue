<template>
  <container-flex ref="threeRef"/>
</template>

<script lang="ts">
import Vue from 'vue';
import ContainerFlex from '@/components/container/container-flex.vue';
import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export default Vue.extend({
  components: { ContainerFlex },
  mounted() {
    let dom = (this.$refs.threeRef as any).$el
    console.log(this.$refs.threeRef);

    let observer = new ResizeObserver((e)=>{
      console.log('Asdasd',e[0].borderBoxSize[0]);
    })
    observer.observe(dom,{box:'border-box'})


    console.log(dom.offsetHeight,dom.offsetWidth);
    let width = dom.offsetWidth
    let height = dom.offsetHeight
    let scene = new Scene()
    let camera = new PerspectiveCamera(75,width/height,1,1000)
    let renderer  = new WebGLRenderer()
    renderer.setSize(width,height)
    dom.appendChild(renderer.domElement)
    renderer.render(scene,camera)
  }
});
</script>

<style scoped lang="scss">

</style>
