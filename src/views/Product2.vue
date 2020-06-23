<template>
  <div class="productRouter">
    <!-- 商品 评价 详情 -->
    <div class="top-table-zy">
      <div class="return-zy">
        <img src="../images/return.png" alt @click="productBack" />
      </div>
      <div class="search-zy">
        <img src="../images/searchimg.png" alt />
      </div>
      <div class="toptext-zy">商品</div>
      <div class="toptext-zy">评价</div>
      <div class="toptext-zy">详情</div>
      <div class="edit-zy">
        <img src="../images/edit-zy.png" alt />
      </div>
      <div class="shoppingcar-zy">
        <img src="../images/shoppingcar.png" alt />
      </div>
    </div>

    <!-- middle -->
    <!-- <div class="swiper-div-zy">
    <div class="swiper-img-zy">-->

    <!-- 轮播图 -->
    <div class="myswiperdiv-zy">
      <van-swipe @change="onChange" class="my-swiper-zy">
        <van-swipe-item>
          <img class="img-swiper" src="../images/swiper-one.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="img-swiper" src="../images/swiper-two.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="img-swiper" src="../images/swiper-three.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="img-swiper" src="../images/swiper-four.jpg" alt />
        </van-swipe-item>

        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>

    <!-- 标题 -->
    <div class="middle-span-zy">维达卷纸至有分量3层180克10卷卫生纸巾厕纸有芯卷纸新旧混发</div>
    <table class="middle-table-zy">
      <tr>
        <td>满88包邮(21kg内)</td>
        <td>&nbsp;</td>
        <td>月销量2万+件</td>
        <td>&nbsp;</td>
        <td>江苏无锡</td>
      </tr>
    </table>

    <!-- 头像区域 -->
    <div class="tmheaddiv-zy">
      <div class="tmheaddiv-div">
        <div class="pinkimg-zy">
          <img src="../images/pink.jpg" alt class="tmheadimg" />
        </div>

        <div class="tmhead-span-div">
          <span class="tmhead-span">此商品活动中，请尽快购买！</span>
        </div>
      </div>
    </div>
    <!-- 促销 -->
    <table class="middle-table2-zy">
      <tr>
        <td style="color: #999999;font-size: 12px;">促销</td>
        <td style="color: #ff0036;font-size: 12px;">&nbsp;促销</td>
        <td style="font-size: 12px;">满2件，打9折</td>
        <td class="td-zy"></td>
        <td style="color: #999999">
          <img src="../images/clickright.png" alt />
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td style="color: #ff0036;font-size: 12px;">&nbsp;积分</td>
        <td style="font-size: 12px;">购买可得2积分</td>
      </tr>
    </table>

    <!-- 物流 -->
    <table class="middle-table3-zy">
      <tr>
        <td style="color: #999999;font-size: 12px;">物流</td>
        <td style="font-size: 12px;">至沧浪区：30分钟内付款，预计6月21日送达，可选送...</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>
          <img src="../images/tmzs.jpg" alt style="width:73px;height:14px" />
          <span style="color: #999999;font-size: 12px; ">&nbsp;天猫保障的配送服务</span>
        </td>
      </tr>
    </table>
    <!-- 服务 -->
    <table class="middle-table4-zy">
      <tr>
        <td style="font-size: 12px;color: #999999;">服务</td>
        <td style="font-size: 12px;">假一赔四</td>
        <td>.</td>
        <td style="font-size: 12px;">满88包邮</td>
        <td>.</td>
        <td style="font-size: 12px;">一站式购齐</td>
        <td>.</td>
        <td style="font-size: 12px;">破损包退</td>
        <td class="td2-zy"></td>
        <td style="color: #999999;">
          <img src="../images/clickright.png" alt />
        </td>
      </tr>
    </table>

    <div class="line-zy"></div>

    <!-- <div>
  <span>参数</span>
  <span>品牌</span>
  <span>型号...</span>
    </div>-->

    <!-- 参数 -->
    <table class="middle-table5-zy">
      <tr>
        <td style="font-size: 12px;color: #999999;">参数</td>
        <td style="font-size: 12px;">品牌</td>
        <td style="font-size: 12px;">型号...</td>
        <td class="one-zy"></td>
        <td style="color: #999999;">
          <img src="../images/clickright.png" alt />
        </td>
      </tr>
    </table>

    <div class="line-zy"></div>
    <!-- </div>
    </div>-->
  </div>
</template>


<script scoped>
export default {
  data() {
    return {
      current: 0
    };
  },

  methods: {
    productBack() {
      this.$router.go(-1);
    },

    onChange(index) {
      this.current = index;
      console.log(this.currentex);
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

.top-table-zy {
  display: fixed;
}

.top-table-zy {
  height: 45px;
  border: 1px solid red;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  background-color: #fff;
}
.top-table-zy img {
  width: 20px;
  height: 25px;
}

.top-table-zy div {
  width: 300px;
}
.top-table-zy .return-zy img {
  margin-left: 20px;
}

.top-table-zy .search-zy img {
  width: 25px;
  margin-left: 10px;
}
.top-table-zy .toptext-zy {
  color: #999999;
  margin-left: 28px;
}

.edit-zy {
  margin-left: 50px;
}
.edit-zy img {
  width: 32px;
}
.shoppingcar-zy img {
  width: 28px;
}
.swiper-div-zy {
  height: 690px;
  overflow: auto;
}
.swiper-img-zy {
  width: 100%;
  height: 361px;
  border: 1px solid red;
  /* background-colorgb(150, 112, 112)70); */
}

/* 轮播图 */
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.myswiperdiv-zy {
  top: 300px;
  border: 1px solid red;
  width: 100%;
  height: 300px;
}
.my-swiper-zy {
  width: 100%;
  height: 300px;
}
.img-swiper {
  width: 100%;
  height: 300px;
}
.middle-span-zy {
  color: #051b28;
  width: 365px;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
}
.middle-table-zy {
  width: 100%;
  margin-left: 5px;
  color: #999999;
  font-size: 14px;
}

/* 头像 */
.tmheaddiv-div {
  margin-left: 5px;
  /* margin-top: 20px; */
}

.tmheaddiv-zy {
  width: 100%;
  height: 45px;
  background-color: rgb(252, 226, 226);
  margin-top: 5px;
}
.tmhead-span {
  color: #f10035;
  margin-left: 25px;
  margin-top: -10px;
}
.tmhead-span-div {
  margin-top: -28px;
  margin-left: 25px;
}

.tmheadimg {
  /* border: 1px solid rgb(99, 22, 243); */
  margin-top: 6px;
}

/* 促销 */
.middle-table2-zy tr td {
  border: 3px solid transparent;
}

.td-zy {
  width: 180px;
}
/* 物流 */
.middle-table3-zy tr td {
  border: 3px solid transparent;
}
/* 服务 */
.middle-table4-zy {
  /* border: 1px solid red; */
  width: 100%;
  text-align: center;
}
.td2-zy {
  width: 30px;
}
.line-zy {
  width: 100%;
  height: 10px;
  /* border: 1px solid rgb(226, 214, 214); */
  background-color: #eee;
}

.middle-table5-zy {
  width: 100%;
  text-align: center;
  border: 3px solid transparent;

  display: flex;
  display: -webkit-flex;
}

.middle-table5-zy tr td {
  border: 3px solid transparent;
}

/* .middle-table5-zy td{
    flex-grow: 1;
} */

.one-zy {
  width: 230px;
}
</style>

