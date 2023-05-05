<template>
  <div>
    <el-menu :default-active="activeComp" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="menu in menuList"  :key="menu.path" :index="menu.path">
        <span slot="title">{{ menu.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';
import { RouteConfig } from 'vue-router';

interface IMenu{
  title:string
  path:string
  name?:string
  children?:IMenu[]
}

@Component({
  components: {},
})
export default class MainMenu extends Vue {
  private get activeComp(){
    return this.$route.path
  }

  private menuList:Array<IMenu> = []

  private mounted(){
    this.menuList = this.initMenu(router.options.routes![0].children!)
  }

  private initMenu (children:Array<RouteConfig>){
    return  children!.map(e=>{
      let data:IMenu = {
        title: e.meta?.title,
        path: e.path,
        name: e.name
      }
      if(e.children){
        data.children = this.initMenu(e.children)
      }
      return data
    })
  }

  private handleSelect(data:string){
    this.$router.push(data)
  }

  handleClick(){
    this.$router.push('/about')
  }
}
</script>
