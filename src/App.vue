<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
/* 字体图标 */
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
@import url("../node_modules/vant/lib/index.css");
/* 其他样式 */
* {
  margin: 0;
  padding: 0;
}
a {
  color: indianred;
}
a:hover {
  text-emphasis: none;
}
ul,
li,
ol {
  list-style: none;
}
i,
em {
  font-style: normal;
}
</style>