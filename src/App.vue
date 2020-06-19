<template>
  <div id="app">
    <router-view></router-view>

    <!-- 天猫导航栏-->
    <div class="tm-header-lj">
      <div class="header-top-lj">
        <div class="header-threeheng-lj">
          <a href="https://www.tmall.com/wow/car/act/navtab?pos=5&acm=201803150.1003.2.3323494&scm=1003.2.201803150.OTHER_1523452695069_3323494#mui-nav-category"><img src="./images/three-heng.png" alt /></a>
        </div>

        <div class="header-tmall-lj">
          <img src="./images/TMALL.png" alt />
        </div>

        <div @click="enterBtn" class="header-enter-lj">登录</div>
      </div>

      <div class="tm-search-lj">
        <div class="search-input-lj">
          <img src="./images/search.png" alt />
          <span>搜索商品、品牌</span>
        </div>
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

    <div style="height:1888px"></div>
    <button @click="cartBtn">购物车router</button>
    <button @click="productBtn">商品详情router</button>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    // 路由
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
    searchBtn() {
      this.$router.push("searchPath");
    },

    // 导航栏过渡动画
    leave() {
      let left = document.querySelector(".header-threeheng-lj");
      let right = document.querySelector(".header-enter-lj");
      let tmall = document.querySelector(".header-tmall-lj");
      let search = document.querySelector(".tm-search-lj");
      let input = document.querySelector(".search-input-lj");
      let header = document.querySelector(".tm-search-lj");

      left.style.transform = "translateY(9px)";
      right.style.transform = "translateY(8px)";
      tmall.style.transform = "scale(0)";
      tmall.style.height = "0px";
      input.style.transform = " scaleX(0.8) translateY(-30px)";
      header.style.height = "7px";
    },

    enter() {
      let left = document.querySelector(".header-threeheng-lj");
      let right = document.querySelector(".header-enter-lj");
      let tmall = document.querySelector(".header-tmall-lj");
      let search = document.querySelector(".tm-search-lj");
      let input = document.querySelector(".search-input-lj");
      let header = document.querySelector(".tm-search-lj");

      left.style.transform = "translateY(0px)";
      right.style.transform = "translateY(0px)";
      tmall.style.transform = "scale(1)";
      tmall.style.height = "25px";
      input.style.transform = " scaleX(1) translateY(0px)";
      header.style.height = "36px";
    },

    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 10) {
        this.leave();
      } else {
        this.enter();
      }
    },

    //轮播图
    

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

/* 天猫导航栏头部 */
.tm-header-lj {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 0, 54);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-top-lj {
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  transition: all 0.36s;
}

.header-threeheng-lj {
  margin-top: 2px;
  transition: all 0.36s;
}

.header-tmall-lj {
  transition: all 0.36s;
}

.header-tmall-lj img {
  width: 118.5px;
  height: 20.5px;
}

.header-enter-lj {
  font-size: 14px;
  transition: all 0.36s;
  color: #fff;
}

.tm-search-lj {
  padding: 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: rgb(255, 0, 54);
  transition: all 0.36s;
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
  transition: all 0.36s;
}

.search-input-lj img {
  padding: 10px;
}

/* 天猫导航 */
.nav-ul-lj {
  margin-top: 90px;
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


/* 轮播图 */


</style>