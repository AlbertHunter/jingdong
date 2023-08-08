import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层级是商铺的 id
      99: {
        // 第二层是商品内容及购物数量
        111: {
          _id: '1',
          name: '番茄250g/份',
          imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
          sales: 10,
          price: 33.6,
          oldPrice: 39.6,
          count: 2
        },
        222: {

        }
      },
      2: {

      }
    }
  },
  mutations: {
    changeItemToCart (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) shopInfo = {}
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
        shopInfo[productId] = product
      }
      const count = (product.count + num > 0) ? product.count + num : 0
      shopInfo[productId].count = count
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
    changeItemToCart ({ commit }, data) {
      commit('changeItemToCart', data)
    }
  },
  modules: {
  }
})
