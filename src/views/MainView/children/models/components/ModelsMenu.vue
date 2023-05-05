<template>
  <div>
    <el-menu :default-active="activeComp" mode="horizontal">
      <div v-for="menu in menuList" :key="menu.path">
        <el-menu-item v-if="!menu.children" :index="menu.path">
          <span slot="title">{{ menu.title }}</span>
        </el-menu-item>
        <el-submenu v-else :index="menu.path">
          <template slot="title">
            <span>{{menu.title}}</span>
          </template>
          <el-menu-item v-for="childrenMenu in menu.children" :key="childrenMenu.path">{{childrenMenu.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item>asdasd</el-menu-item>
      </div>
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

  handleClick(){
    this.$router.push('/about')
  }
}
</script>
