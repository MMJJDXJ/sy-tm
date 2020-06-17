<template>
  <div class="cartRouter">
    <span>购物车</span>
    <button @click="cartBack">返回</button>
  </div>
</template>


<script>
export default {
  methods: {
    cartBack() {
      this.$router.go(-1);
    }
  }
};
</script>


<style>
.cartRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
}

</style>