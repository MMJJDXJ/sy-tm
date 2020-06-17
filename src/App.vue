<template>
  <div id="app">
    <router-view></router-view>

    <!-- 天猫头部 -->
    <div class="tm-header-lj">
      <a href="https://www.tmall.com/wow/car/act/navtab?pos=5&acm=201803150.1003.2.3323494&scm=1003.2.201803150.OTHER_1523452695069_3323494#mui-nav-category">
        <img src="./images/three-heng.png" alt />
      </a>
      <img class="header-tmall-lj" src="./images/TMALL.png" alt />
      <span @click="enterBtn" class="header-enter-lj">登录</span>
    </div>

    <!-- 天猫搜索框 -->
    <div @click="searchBtn" class="tm-search-lj">
      <div class="search-input-lj">
        <img src="./images/search.png" alt />
        <span>搜索商品、品牌</span>
      </div>
    </div>

    <!-- 天猫导航 -->
    <ul class="nav-ul-lj">
      <a
        href="https://suning.tmall.com/?pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1"
      >
        <li class="nav-li-lj">
          <img src="./images/suning.png" alt />
          <span>苏宁易购</span>
        </li>
      </a>

      <a
        href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2"
      >
        <li class="nav-li-lj">
          <img src="./images/TMsupermarket.png" alt />
          <span>天猫超市</span>
        </li>
      </a>

      <a href="https://pages.tmall.com/wow/jinkou/act/zhiyingchaoshi?from=zebra:offline">
        <li class="nav-li-lj">
          <img src="./images/TMintrtnation.png" alt />
          <span>天猫国际</span>
        </li>
      </a>

      <a
        href="https://tb.cn/x/ju?pos=4&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547844648097_1699747&spm=a211ue.11501597.icon.4"
      >
        <li class="nav-li-lj">
          <img src="./images/efficinet.png" alt />
          <span>聚划算</span>
        </li>
      </a>

      <li @click="classifyBtn" class="nav-li-lj">
        <img src="./images/classify.png" alt />
        <span>分类</span>
      </li>
    </ul>


    <!-- 天猫轮播图 -->









    <div style="height:1000px"></div>
    <button @click="cartBtn">购物车router</button>
    <button @click="productBtn">商品详情router</button>
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

    classifyBtn() {
      this.$router.push("classifyPath");
    },

    enterBtn() {
      this.$router.push("enterPath");
    },

    searchBtn(){
      this.$router.push("searchPath");
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

ul,
li {
  display: none;
}

a {
  text-decoration: none;
}

/* 天猫头部 */
.tm-header-lj {
  height: 44px;
  background-color: rgb(255, 0, 54);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px;
}

.header-tmall-lj {
  height: 20.5px;
  width: 118.5px;
}

.header-enter-lj {
  color: #fff;
  font-size: 14px;
}

/* 天猫搜索框 */
.tm-search-lj {
  padding: 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: rgb(255, 0, 54);
}

.search-input-lj {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  color: #bbbbbb;
}

.search-input-lj img {
  padding: 10px;
}

/* 天猫导航 */
.nav-ul-lj {
  height: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
}

.nav-li-lj {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70px;
  height: 78px;
}

.nav-li-lj img {
  margin: 5px 11px 2px;
  width: 48px;
  height: 48px;
}

.nav-li-lj span {
  font-size: 13px;
  text-align: center;
  margin-top: 7px;
  color: black;
}
</style>