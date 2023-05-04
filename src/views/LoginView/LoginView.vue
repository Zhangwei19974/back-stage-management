<template>
  <div style="position: relative;width: 100%;">
    <container-flex >
      <!--      <widget-three ref="three"/>-->
      <login-three-bgc/>
    </container-flex>
    <container-flex style="position: absolute;top: 0;pointer-events: none" :justify-content="'center'" align-items="center">
      <el-card class="box-card" style="pointer-events: auto" >
        <div class="login-box">
          <div class="login-box-title">登录</div>
          <el-form label-width="80px" :rules="rules" :model="formData" ref="formRef">
            <el-form-item label="用户名" prop="userName" >
              <el-input v-model="formData.userName" placeholder="请输入账号" @keydown.enter.native="handleKeydown"/>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
              <el-input v-model="formData.password"  placeholder="请输入密码" @keydown.enter.native="handleKeydown"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleKeydown">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </container-flex>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import useAppStore from '@/store';
import ContainerFlex from '@/components/container/container-flex.vue';

// import LoginThreeBgc from '@/views/LoginView/components/login-three-bgc.vue'
import { getUserInfo, login } from '@/api';

export default {
  components: {  ContainerFlex,
    // 异步加载组件，优化首次打开的时间
    LoginThreeBgc: ()=>import('@/views/LoginView/components/login-three-bgc.vue')
  },
  computed: {
    ...mapState(useAppStore,['backRouter','isLogin','token','isBackRouter']),

  },
  data: ()=>{
    return{
      rules: {
        userName: { required: true, message: '用户名必填', trigger: 'change' },
        password: { required: true, message: '密码必填', trigger: 'change' },
      },
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions(useAppStore,['setIsLogin','setToken']),
    async submit(){
      let res = await login(this.formData)
      console.log(res);
      let {code,msg,data} = res
      if(code === 200){
        this.setToken(data.token)
        this.setIsLogin(true)
        // this.token = data.token
        console.log(data);
        if(this.isBackRouter){
          this.$router.go(-1)
          return
        }
        this.$router.push('/')
      }
      this.$message.error(msg)
      // let resData = await getUserInfo()
      // console.log(resData);
      // this.setIsLogin(true)
    },
    handleKeydown(){
      this.$refs.formRef.validate((isValid,fields)=>{
        console.log(isValid,fields);
        if(isValid){
          this.submit()
          return
        }
        let notValidList = this.$refs.formRef.$slots.default.filter(e=>e.componentOptions.propsData.prop in fields)
        notValidList[0].componentInstance.$children[1].focus()
        console.log(notValidList);
        console.log(this.$refs.formRef);
      })
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
