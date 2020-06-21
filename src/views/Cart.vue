<template>
  <div class="cartRouter">
    <div class="shop-cart">
      <span>购物车</span>
      <button @click="cartBack">返回</button>
    </div>

    <div v-for="(item,index) in carList" :key="index">
      <div class="car-top">
        <div class="car-top-left">
          <input type="checkbox" class="checkbox" />
          <img src="../images/tianmao.png" alt class="tm-logo" />
          <div class="shop-name">{{item.shopName}}</div>
          <img src="../images/arrow-right.png" alt class="arrow-right" />
        </div>
        <div class="edit">编辑</div>
      </div>
      <div class="car-bottom">
        <div class="car-bottom-l">
          <input type="checkbox" class="checkbox" />
        </div>

        <div class="car-bottom-r">
            <div class="car-bottom-r-t">
               <img src="../images/manjian.png" alt="" class="manjian">
                <div class="manjian-text">6.16-6.20每满300减40，可跨店</div>
                <div class="coudan">凑单</div>
                <img src="../images/arrow-right.png" alt="" class="arrow-right">
            </div>

            <div class="car-bottom-r-b">
                <div>
                    <img :src="item.img" alt=""  class="image">
                </div>


            </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      carList: [
        {
          num: "1",
          shopName: "嘉兴童车正品店",
          dic: "兰博基尼儿童电动车四轮遥控汽车男女宝宝超大玩具",
          img: require("../images/1.png"),
          price: 1238,
          people: 41
        },

        {
          num: "2",
          shopName: "智贝母婴专营店",
          dic: "智能机器狗遥控对话机器人女孩电子狗狗走路会叫电动儿童玩具男孩",
          img: require("../images/2.png"),
          price: 126,
          people: 32
        },

        {
          num: "3",
          shopName: "爱婴乐母婴专营店",
          dic: "儿童益智玩具小孩一至二岁3-5五4两三动脑宝宝智力开发多功能男孩",
          img: require("../images/3.png"),
          price: 117,
          people: 435
        },

        {
          num: "4",
          shopName: "知叶玩具专营店",
          dic: "三宝超变战陀新款男孩拉线战斗盘坨螺三星升级版合体陀螺玩具儿童",
          img: require("../images/4.png"),
          price: 77,
          people: 63
        },

        {
          num: "5",
          shopName: "建雄旗舰店",
          dic: "儿童决明子玩具沙池套装宝宝玩沙子挖沙家用室内围栏沙滩池沙池组",
          img: require("../images/5.png"),
          price: 226,
          people: 55
        },

        {
          num: "6",
          shopName: "美康村家居旗舰店",
          dic: "flynova自由航线会飞行指尖陀螺手指回旋悬浮黑科技玩具10岁以上",
          img: require("../images/6.png"),
          price: 1238,
          people: 41
        },

        {
          num: "7",
          shopName: "苏克母婴专营店",
          dic: "抖音猪小屁网红同款电动跳舞婴儿有声会动宝宝玩具男1岁2儿童女孩",
          img: require("../images/7.png"),
          price: 28,
          people: 456
        },

        {
          num: "8",
          shopName: "auby澳贝旗舰店",
          dic: "澳贝宝宝玩具手摇铃可安全水煮磨牙棒咬咬乐0-6个月婴儿牙胶",
          img: require("../images/8.png"),
          price: 49,
          people: 435
        },

        {
          num: "9",
          shopName: "科迈特旗舰店",
          dic: "哈哈舔舔汪智能玩具狗狗走路会叫机器狗电动小狗宠物毛绒仿真狗",
          img: require("../images/9.png"),
          price: 298,
          people: 429
        },

        {
          num: "10",
          shopName: "乐乐熊母婴专营店",
          dic: "婴儿玩具0到1岁半幼儿有声会动9个月3儿童8男孩6女宝宝益智早教",
          img: require("../images/10.png"),
          price: 65,
          people: 466
        },

        {
          num: "11",
          shopName: "琳蜜旗舰店",
          dic: "2020年夏季新款粉色短袖t恤女宽松韩版中长款半袖上衣女装ins潮桖",
          img: require("../images/11.png"),
          price: 50,
          people: 55
        },

        {
          num: "12",
          shopName: "安踏官方网店",
          dic: "安踏中国航天联名短袖2020夏新款运动半袖针织衫情侣t恤男女体恤",
          img: require("../images/12.png"),
          price: 159,
          people: 223
        }
      ]
    };
  },
  methods: {
    cartBack() {
      this.$router.go(-1);
    }
  }
};
</script>


<style scoped>
.cartRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.shop-cart {
  width: 100%;
  padding: 10px auto;
  font-size: 18px;
 
}

.car-top {
  display: flex;
  flex-direction: row;
  padding: 8px;
  text-align: center;
  align-items: center;
  font-size: 12px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.shop-name {
  line-height: 35px;
  margin-left: 10px;

}

.tm-logo {
  width: 15px;
  height: 15px;
  margin-left: 8px;
}

.arrow-right {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}

.car-top-left {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}

.edit {
  margin-right: 8px;
}

.car-bottom {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;

   border-bottom: 20px solid rgb(238,238,238);
}

.car-bottom-l{
  line-height: 200px;
  padding: 8px;
}

.manjian{
  width: 45px;
  height: 15px;
}

.car-bottom-r-t{
  display: flex;
  flex-direction: row;
  font-size: 12px;
  margin-top: 10px;

  align-items: center;
}

.manjian-text{
  margin-left: 12px;
  margin-right: 90px;
}

.coudan{
  color:rgb(255,85,0) ;
}

.image{
  width: 100px;
  height: 100px;
}

.car-bottom-r-b{
  padding-top: 35px;
}
</style>