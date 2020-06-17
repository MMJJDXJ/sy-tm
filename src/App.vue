<template>
  <div id="app">
    <router-view></router-view>
    <button @click="cartBtn">购物车router</button>
    <button @click="productBtn">商品详情router</button>
    <button @click="ClassifyBtn">分类router</button>
    <button @click="EnterBtn">登陆router</button>
  </div>
</template>

<script>
export default {
  methods: {
    cartBtn() {
      this.$router.push("cartPath");
    },

    productBtn() {
      this.$router.push("productPath");
    },

    ClassifyBtn() {
      this.$router.push("classifyPath");
    },

    EnterBtn() {
      this.$router.push("enterPath");
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100;
  background-color: rgba(94, 139, 156, 0.452);
}

button{
  height: 50px;
}
</style>