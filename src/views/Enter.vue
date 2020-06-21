<template>
  <div class="enterRouter">
    <div class="accoount-login-lj">淘宝账户登录</div>
    <div class="accoount-div-lj"></div>
    <input type="text" placeholder="手机号/邮箱/会员名">




    
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

<style scoped>
.enterRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
  overflow: auto;
}

.accoount-login-lj{
  height: 44px;
  background: #f7f7f8;
  color: #000;
  border-bottom: 1px solid rgb(192, 192, 192);
  font-size: 17px;
  text-align: center;
  line-height: 45px;
}

.accoount-div-lj{
  height: 16px;
  background: rgb(239, 239, 239);
}
</style>