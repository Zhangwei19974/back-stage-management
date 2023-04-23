import setupPina from '@/plugins/setup-pina';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
export default function (){
  Vue.use(ElementUI)
  return{
    pinia:setupPina()
  }
}
