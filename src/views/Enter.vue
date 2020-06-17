<template>
  <div class="enterRouter">
    <span>登陆</span>
    <button @click="enterBack">返回</button>
  </div>
</template>


<script>
export default {
  methods: {
    enterBack() {
      this.$router.go(-1);
    }
  }
};
</script>


<style>
.enterRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
}

</style>