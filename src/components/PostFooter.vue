<template>
  <div class="footer-wrap">
    <!-- 普遍页脚 -->
    <div class="footer" v-show="!isFocus">
      <input type="text" placeholder="写跟帖" @focus="handleFocus" />
        
        <!-- 用事件的方式跳转并且带上参数 -->
      <span class="comment"
      @click="$router.push()">
        <em>{{post.comment_length}}</em>
        <i class="iconfont iconpinglun-"></i>
      </span>

      <!-- 收藏 -->
      <i class="iconfont iconshoucang"
      :class="{ star_active:post.has_star }"
      @click="$emit(`handleStar`)"
      ></i>



      <i class="iconfont iconfenxiang"></i>
    </div>

    <!-- 输入评论页脚，这里显示隐藏必须要用v-show，原因是为了获得textare的dom元素 -->
    <div class="footer-comment" v-show="isFocus">
      <textarea rows="3" @blur="isFocus = false" :autofocus="isFocus"></textarea>
    </div>
  </div>
</template>

<script>
export default {

    // 接受文章的详情
    props:["post"],

  data() {
    return {
      // 输入框是否获得焦点,初始值为false
      isFocus: false
    };
  },

  methods: {
    // 获得焦点的时候触发:获得焦点的时候改变输入框
    handleFocus() {
      this.isFocus = true;
    }
  }
};
</script>

<style scoped lang="less">
.footer-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px #eee solid;
  padding: 0 10px;
  box-sizing: border-box;
  background: rgb(231, 203, 203);
}

.footer-comment {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  textarea {
    width: 260/360 * 100vw;
    background: #eee;
    padding: 10px;
    border: none;
    box-sizing: border-box;
    border-radius: 8px;
    resize: none;
  }
  span {
    font-size: 12px;
    background: red;
    width: 60/360 * 100vw;
    height: 26/360 * 100vw;
    line-height: 26/360 * 100vw;
    color: #fff;
    text-align: center;
    border-radius: 50px;
  }
}
.footer{
    height: 60/360*100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    input{
        width: 40%;
        height: 36/360*100vw;
        background: #eee;
        border: none;
        font-size: 12px;
        padding: 0 15px;
        border-radius: 50px;
    }

    .comment{
        display: block;
        position:relative;


        em{
            position: absolute;
            display: block;
            background: red;
            border-radius: 50px;
            color: #fff;
            padding: 0 5px;
            font-size: 10px;
            height: 14px;
            line-height: 14px;
            left: 0;
            top:-5px;
        }
    }

    .iconfont{
        font-size: 24px;
    }
}
.star_active{
    color:red;
}
</style>