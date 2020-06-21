<template>
  <div class="searchRouter">
    <span>搜索框</span>
    <button @click="searchBack">返回</button>
  </div>
</template>


<script>
export default {
  methods: {
    searchBack() {
      this.$router.go(-1);
    }
  }
};
</script>


<style scoped>
.searchRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
}

</style>