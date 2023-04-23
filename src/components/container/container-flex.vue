<template>
  <div class="container-flex" :style="styleComp">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContainerFlex extends Vue{
  @Prop({default:'row'}) readonly flexDirection?:'row'|'column';
  @Prop({default:'flex-start'}) readonly justifyContent?:'center'|'flex-start';
  @Prop({default:'flex-start'}) readonly alignItems?:'center'|'flex-start';
  get styleComp(){
    return {
      'flex-direction':this.flexDirection,
      justifyContent:this.justifyContent,
      alignItems:this.alignItems
    }
  }
}
</script>

<style lang="scss" scoped>
.container-flex{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
