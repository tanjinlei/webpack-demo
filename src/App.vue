<template>
  <div class="Red">
      迪丽肉巴
      <router-link to="/login"><input type="button" value="登录"></router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message: "啊嘞啊嘞"
        }
    }
}
</script>

<style>
    .Red{
        color: red;
    }

</style>