<template>
  <div class="container">
    <!-- 关闭的按钮 -->
    <div class="close">
      <span class="iconfont iconicon-test"></span>
    </div>
    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <!-- 用户密码输入框 -->
    <div class="inputs">
      <AuthInput
        placeholder="手机号码"
        :value="form.username"
        @input="handleUsername"
        :rule="/^1[0-9]{4,10}$/"
        err_message="手机格式不对"
      ></AuthInput>
      <AuthInput
        placeholder="密码"
        type="password"
        v-model="form.password"
        :rule="/^[0-9a-zA-Z]{3,12}$/"
        err_message="密码格式不对"
      ></AuthInput>
    </div>
    <P class="tips">
      没有账号？
      <router-link to="/register">点击这里注册</router-link>
    </P>
    <!-- <button @click="handleSubmit">登录按钮</button> -->
    <AuthButton text="登录" @click="handleSubmit" />
  </div>
</template>

<script>
// 导入输入框组件
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
//导入请求库
import axios from "axios";
export default {
  data() {
    return {
      // 发送给后台的数据(表单数据)
      form: {
        username: "",
        password: ""
      }
    };
  },

  // 注册组件
  components: {
    AuthInput,
    AuthButton
  },
  methods: {
    // 传递给输入框组件，用于获取用户名
    handleUsername(value) {
      this.form.username = value;
    },
    handleSubmit() {
      // console.log(this.form);
      this.$axios({
        // url:"http://localhost:3000/login",
        url: "/login", //main.js里面有设置
        method: "POST", // method相当于type
        data: this.form
        // then的回调函数相当于success
      }).then(res => {
        // console.log(res);
        const { message, data } = res.data;
        if (message === "登录成功") {
          // 把token和id保存到本地 (localStorage:本地存储，js存储对象)
          // localStorage.setItem:获取本地存储中的值
          localStorage.setItem("token",data.token);
          localStorage.setItem("user_id",data.user.id);
          
          // 跳转到首页
          this.$router.push("/personal");
        }
      });
    }
  }
};
</script>

<style scoped lang='less'>
.container {
  padding: 20px;
}
.close {
  padding: 20px 0;
  span {
    font-size: 27 / 360 * 100vw;
  }
}
.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}
.input {
  input {
    margin-bottom: 20px;
  }
}
.tips {
  text-align: right;
  margin-bottom: 20px;
  a {
    color: #3385ff;
  }
}
</style>