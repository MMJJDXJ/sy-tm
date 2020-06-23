<template>
  <div class="classifyRouter">
    <span>分类</span> 
    <button @click="classifyBack">返回</button>
  </div>
</template>


<script>
export default {
  methods: {
    classifyBack() {
      this.$router.go(-1);
      this.$destroy(true);
    }
  }
};
</script>


<style scoped>
.classifyRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
}

</style>