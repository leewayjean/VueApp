import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)
// state
const state = {
  geohash:"31.14419,121.66034",//地址geohash值
  latitude:null, //经度
  longitude:null, // 纬度
  cartList:[], // 购物车商品
  isLogin:false,//用户是否已经登录
  userInfo:{},//登录成功后返回的用户信息
  
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
