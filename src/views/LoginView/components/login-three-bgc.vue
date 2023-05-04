<template>
  <container-flex>
    <widget-three ref="threeRef"/>
  </container-flex>
</template>

<script>
import WidgetThree from '@/components/widgets/widget-three.vue';
import ContainerFlex from '@/components/container/container-flex.vue';
import Vue from 'vue';
import {
  AnimationClip,
  AnimationMixer,
  AxesHelper, Clock,
  Color, Group,
  KeyframeTrack,
  Sprite,
  SpriteMaterial,
  TextureLoader,
  WebGLRenderer
} from 'three';
import snowFlake from './images/snowflake.png'
import { map } from 'core-js/internals/array-iteration';
export default Vue.extend({
  components: { ContainerFlex, WidgetThree },
  data: ()=>{
    return {
      addAnimation: null
    }
  },
  mounted() {
    let { renderer,camera,scene,addAnimation,height} = this.$refs.threeRef
    this.addAnimation = addAnimation
    renderer.setClearColor('#4397ad', 0.4);
    renderer.render(scene,camera)
    camera.position.set(0,height/2,0)
    let group = new Group()
    for (let i = 0;i<1000;i++){
      group.add(this.getSnowflakeSprite(10))
    }
    // let axesHelper = new AxesHelper(150)
    // scene.add(axesHelper)
    scene.add(group)
    camera.lookAt(1,height/2,0)
    this.initMouseHover()
  },
  methods: {
    getSnowflakeSprite(time=2){
      let {height } = this.$refs.threeRef
      let texture = new TextureLoader().load(snowFlake)
      let sprintMaterial = new SpriteMaterial({
        map: texture,
        color: '#ffffff'
      })
      let sprite = new Sprite(sprintMaterial)

      sprite.scale.set(10, 10, 0);
      sprite.name = 'sprite'
      // sprite.position.set(0,height,0);
      let clip = this.getSnowFlowClip(sprite,time)
      let mixer = new AnimationMixer(sprite)
      let clipAction = mixer.clipAction(clip)
      clipAction.startAt(Math.random()*time)

      clipAction.play()
      let clock = new Clock()
      this.addAnimation(()=>{
        let t=clock.getDelta()
        mixer.update(t)
      })
      return sprite
    },
    getSnowFlowClip(sprite,time=2){
      let { height,width } = this.$refs.threeRef
      let random = Math.random()
      let y = Math.sin(random*Math.PI*2)*width/2 *Math.random()
      let x = Math.cos(random*Math.PI*2)*width/2*Math.random()
      let times = [0,time]
      let values= [x,height,y,x+20,0,y]
      let rotateValues = [0,Math.PI*time *0.5]
      let posKF = new KeyframeTrack(sprite.name+ '.position',times,values)
      let rotateKF = new KeyframeTrack(sprite.name+ '.material.rotation',times,rotateValues)
      let clip = new AnimationClip('test',time,[posKF,rotateKF])
      return clip
    },
    initMouseHover(){
      console.log(this.$refs.threeRef);
      this.$refs.threeRef.$el.addEventListener('mousemove',(e)=>{
        let { camera} = this.$refs.threeRef
        camera.rotation.y = (camera.rotation.y+(e.movementX/80000))
      })
    },

  }
});
</script>

<style lang="scss" scoped>

</style>
