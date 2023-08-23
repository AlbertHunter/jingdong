import { createStore } from 'vuex'
const setLocalStorage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
/**
 * @returns {shopId: {shopName: '', productList: {productId: {}}}}
 */
const getLocalStorage = () => {
  if (typeof localStorage?.cartList !== 'undefined') {
    return JSON.parse(localStorage.cartList)
  } else {
    return {}
  }
  // return JSON.parse(localStorage.cartList) || {}
}
export default createStore({
  // state: {
  //   cartList: {
  //     // 第一层级是商铺的 id
  //     99: {
  //       // 第二层是商品内容及购物数量
  //       111: {
  //         _id: '1',
  //         name: '番茄250g/份',
  //         imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
  //         sales: 10,
  //         price: 33.6,
  //         oldPrice: 39.6,
  //         count: 2
  //       },
  //       222: {
  //
  //       }
  //     },
  //     2: {
  //
  //     }
  //   }
  // },
  state: {
    cartList: getLocalStorage()
  },
  mutations: {
    changeItemToCart (state, payload) {
      const { shopId, productId, productInfo, num, shopName } = payload
      if (typeof state.cartList === 'undefined') state.cartList = {}
      let shopInfo = {
        shopName: '',
        productList: {}
      }
      if (typeof state.cartList[shopId] !== 'undefined') shopInfo = state.cartList[shopId]
      let product = {}
      if (typeof shopInfo.productList[productId] === 'undefined') {
        shopInfo.shopName = shopName
        product = productInfo
        product.count = 0
        shopInfo.productList[productId] = product
      } else {
        product = shopInfo.productList[productId]
      }
      const count = (product.count + num > 0) ? product.count + num : 0
      if (num > 0) product.checked = true
      shopInfo.productList[productId].count = count
      state.cartList[shopId] = shopInfo
      setLocalStorage(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.checked = !product.checked
      state.cartList[shopId].productList[productId] = product
      setLocalStorage(state)
    },
    setCartAllItemsChecked (state, payload) {
      const { shopId } = payload
      const products = Object.values(state.cartList[shopId].productList || {})
      if (products.some((p) => p.checked === false)) {
        products.forEach((p) => {
          p.checked = true
        })
      } else {
        products.forEach((p) => {
          p.checked = false
        })
      }
      setLocalStorage(state)
    },
    emptyCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalStorage(state)
    }
  },
  actions: {
    changeItemToCart ({ commit }, data) {
      commit('changeItemToCart', data)
    },
    changeCartItemChecked ({ commit }, data) {
      commit('changeCartItemChecked', data)
    },
    setCartAllItemsChecked ({ commit }, data) {
      commit('setCartAllItemsChecked', data)
    },
    emptyCartProducts ({ commit }, data) {
      commit('emptyCartProducts', data)
    }
  },
  modules: {
  }
})
