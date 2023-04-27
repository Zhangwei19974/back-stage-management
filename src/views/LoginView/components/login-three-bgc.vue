<template>
  <container-flex>
    <widget-three ref="threeRef"/>
  </container-flex>
</template>

<script>
import WidgetThree from '@/components/widgets/widget-three.vue';
import ContainerFlex from '@/components/container/container-flex.vue';
import Vue from 'vue';
import { Color, WebGLRenderer } from 'three';

export default Vue.extend({
  components: { ContainerFlex, WidgetThree },
  mounted() {
    let threeRef= this.$refs.threeRef
    console.log(threeRef);
    let { renderer,camera,scene } = threeRef
    // threeRef.scene!.background = new Color('#ff0000')
    renderer.setClearColor('#428bca',1.0)
    // console.log(this.$refs.threeRef);
  },
  methods:{
  }
});
</script>

<style lang="scss" scoped>

</style>
