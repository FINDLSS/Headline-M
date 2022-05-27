<template>
  <div id="app">
    <h1>黑马头条</h1>

    <i class="toutiao toutiao-shouji"></i>
    <hr>
    <van-button disabled type="primary">禁用状态</van-button>
    <van-button disabled type="info">禁用状态</van-button>
    <!-- 下面是路由的占位符： -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'APP'
}
</script>

<style lang="less"></style>
