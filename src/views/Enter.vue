<template>
  <div class="enterRouter">
    <!-- <img @click="enterBack" class="loginLeft-img-lj" src="../images/loginLeft-lj.png" alt=""> -->
    <div class="accoount-TBlogin-lj">淘宝账户登录</div>
    <div class="accoount-div1-lj"></div>
    <input class="accoount-name-lj" type="text" placeholder="手机号/邮箱/会员名">
    <div class="accoount-password-lj">
      <input type="password" placeholder="请输入登录密码">
      <img src="../images/enterEyes-lj.png" alt="">
    </div>
    <div class="accoount-div2-lj"></div>
    <div class="accoount-login-lj">
      <div class="accoount-loginEnter-lj">登录</div>
      <div class="accoount-dxlogin-lj">
        <span>短信验证码登录</span>
        <span>免费注册</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // methods: {
  //   enterBack() {
  //     this.$router.go(-1);
  //   }
  // }
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
  display: flex;
  flex-direction: column;
}

.loginLeft-img-lj{
  position: absolute;
  left: 15px;
  top: 12px;
}

.accoount-TBlogin-lj{
  height: 44px;
  background: #f7f7f8;
  color: #000;
  border-bottom: 1px solid rgb(192, 192, 192);
  font-size: 17px;
  text-align: center;
  line-height: 45px;
}

.accoount-div1-lj{
  height: 20px;
  background: #f0f0f0;
}

.accoount-name-lj{
  line-height: 50px;
  padding-left: 15px;
  border: none;
  border-bottom: 1px solid #dddddd;
}

.accoount-password-lj{
  line-height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  border-bottom: 1px solid #dddddd;
}

.accoount-password-lj input{
  padding: 0 15px;
  border: none;
}

.accoount-password-lj img{
  position: absolute;
  right: 10px;
}

.accoount-login-lj{
  height: 100%;
  padding: 0 10px 0 10px;
  background-color: #f0f0f0;  
}

.accoount-loginEnter-lj{
  text-align: center;
  line-height: 45px;
  background: #ff0036;
  border-radius: 5px;
  color: #fff;
  margin-top: 15px;
  font-size: 16px;
}

.accoount-dxlogin-lj{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0 8px;
  color: #ff0036;
  font-size: 16px;
}

</style>