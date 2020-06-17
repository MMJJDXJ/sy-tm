<template>
  <div class="productRouter">
    <span>商品详情</span>
    <button @click="productBack">返回</button>
  </div>
</template>


<script>
export default {
    methods:{
      productBack() {
      this.$router.go(-1);
    }
  }
};
</script>


<style>
.productRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
}

</style>