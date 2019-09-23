<template>
  <!-- input是输入框每次输入的时候都会触发
  success与error是用来判断对错（现在是改变颜色，后面就增加一个提示框） -->
  <input
    class="input"
    :class="{
      success:status === 'success',
      error:status === 'error'
  }"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
    @change="handleChange"
  />
</template>

<script>
export default {
    data(){
        return {
            status:''
        }
    },
    // 这个是需要传输的数据。防止覆盖
  props: ["placeholder", "value", "name", "rule","err_message"],
  mounted() {
    console.log("rule" + this.rule);
  },
  methods: {
    //   每次输入框输入值的时候都会触发
    handleInput(event) {
        // 将输入框所输入的值存起来        
        const {value} = event.target;
        // 触发父组件的input事件，返回输入框的值
      this.$emit("input", value);
        // console.log( "每次输入的值"+event.target.value);
          // 如果输入正确就sucess，反之就error
      if(this.rule){
        //   console.log( "判断是否成功需要传入的值"+this.rule);
          if(this.rule.test(value)){
              this.status = "success";
          }else{
              this.status = "error";
          }
      }
    },
    // 输入框失去焦点的时候触发
    handleChange(){
        if(this.err_message && this.status === "error"){
            // alert(this.err_message)
            this.$toast.fail(this.err_message)
        }
    }
  }
};
</script>

<style scoped lang="less">
.input {
  width: 100%;
  height: 38/360 * 100vw;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: #fff;
  border: none;
  border-bottom: 2px #666 solid;
  outline: none;
  font-size: 18px;
}
.success{
    border-bottom-color:blue;
}
.error{
    border-bottom-color: red;
}
</style>