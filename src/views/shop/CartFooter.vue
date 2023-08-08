<template>
  <div class="mask" v-if="showCart" @click="handleCartShowChange(total)"/>
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div class="product__header__all">
          <span/>全选
        </div>
        <div class="product__header__clear">
          <span>清空购物车</span>
        </div>
      </div>
      <template v-for="item in productList">
        <div class="product__item" v-if="item.count > 0" :key="item.id">
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__sales">月售{{ item.sales }}件</p>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product__number">
            <span class="product__number__minus iconfont" @click="()=>{changeItemToCart(shopId, item.id, item, -1)}">-</span>
            {{ item.count || 0}}
            <span class="product__number__plus iconfont" @click="()=>{changeItemToCart(shopId, item.id, item, 1)}">+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img
          :src="require('@/assets/images/basket.png')"
          alt=""
          class="check__icon__img"
          @click="handleCartShowChange(total)"
        >
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;{{ price }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const useCurrentCart = () => {
  const route = useRoute()
  const shopId = route.params.id
  const store = useStore()
  const cartList = store.state.cartList
  const showCart = ref(false)

  const total = computed(() => {
    const cartShop = cartList[shopId]
    let count = 0
    if (cartShop) {
      for (const i in cartShop) {
        const product = cartShop[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const cartShop = cartList[shopId]
    let res = 0
    if (cartShop) {
      for (const i in cartShop) {
        const product = cartShop[i]
        res += product.count * product.price
      }
    }
    return res.toFixed(2)
  })
  const productList = computed(() => {
    return cartList[shopId] || {}
  })
  const changeItemToCart = (shopId, productId, productInfo, num) => {
    store.dispatch('changeItemToCart', {
      shopId, productId, productInfo, num
    })
  }
  const handleCartShowChange = (total) => {
    console.log(productList)
    if (total > 0) {
      showCart.value = !showCart.value
    }
  }
  return {
    total,
    price,
    shopId,
    productList,
    showCart,
    changeItemToCart,
    handleCartShowChange
  }
}

export default {
  name: 'CartFooter',
  setup: () => {
    return {
      ...useCurrentCart()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: .01rem solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontColor;
    &__all {
      width: .64rem;
      margin-left: .18rem;
      display: flex;
      align-items: center;
    }
    &__icon {
      color: $medium-fontColor;
      font-size: .2rem;
      margin-right: .08rem;
    }
    &__icon--active {
      color: $btn-bgColor;
    }
    &__clear {
      flex: 1;
      margin-right: .18rem;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .18rem;
    border-bottom: .01rem solid $content-bgColor;
    &__check {
      line-height: .5rem;
      margin-right: .2rem;
      color: $medium-fontColor;
      font-size: .2rem;
    }
    &__check--active {
      color: $btn-bgColor;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      font-weight: bold;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontColor;
      @include ellipsis;
    }
    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontColor;
    }
    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      font-size: .14rem;
      display: flex;
      align-items: center;
      &__minus,&__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .17rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid #666;
        color: #666;
        margin-right: .1rem;
      }
      &__plus {
        background: #0091ff;
        color: #fff;
        margin-left: .1rem;
      }
    }
  }
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid #F1F1F1;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      right: .2rem;
      top: .04rem;
      color: #fff;
      width: .2rem;
      height: .2rem;
      transform: scale(.5);
      background-color: #E93B3B;
      border-radius: 50%;
      font-size: .12rem;
      text-align: center;
      line-height: .2rem;
    }
  }
  &__info {
    flex: 1;
    margin: auto 0;
    color: #333;
    font-size: .12rem;
    &__price {
      color: #E93B3B;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    line-height: .49rem;
    text-align: center;
    color: #fff;
    font-size: .14rem;
    background-color: #4FB0F9;
  }
}
</style>
