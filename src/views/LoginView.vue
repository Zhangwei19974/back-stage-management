<template>
  <div style="position: relative">
    <container-flex >
      <widget-three/>
    </container-flex>
    <container-flex style="position: absolute;top: 0" :justify-content="'center'" align-items="center">
      <el-card class="box-card" >
        <div class="login-box">
          <div class="login-box-title">登录</div>
          <el-form label-width="80px"  :model="formData" ref="formRef">
            <el-form-item label="用户名" prop="userName" >
              <el-input v-model="formData.userName" placeholder="请输入账号"/>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
              <el-input v-model="formData.password"  placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </container-flex>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import useAppStore from '../store';
import ContainerFlex from '@/components/container/container-flex.vue';
import WidgetThree from '@/components/widgets/widget-three.vue';

export default {
  components: { WidgetThree, ContainerFlex },
  computed:{
    ...mapState(useAppStore,['isLogin']),

  },
  data:()=>{
    return{
      formData:{
        userName:'',
        password:''
      }
    }
  },
  mounted() {
  },
  methods:{
    ...mapActions(useAppStore,['setIsLogin']),
    submit(){
      this.setIsLogin(true)
      this.$router.push('/')
    }
  }

};
</script>

<style lang="scss" scoped>
.box-card{
  width: 500px;
  padding-bottom: 20px;
  .login-box{
    display: flex;
    flex-direction: column;
    gap: 30px;
    .login-box-title{
      margin: auto;
      font-size: 22px;
    }
    .login-box__options{
      display: flex;
      justify-content: center;
    }
  }
}
</style>
