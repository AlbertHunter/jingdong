<template>
    <div class="content">
        <div class="category">
            <div class="category__item" :class="{'category__item--active': currentTab === item.tab}" @click="handleCategoryClick(item)" v-for="item in categories" :key="item.tab">
              {{ item.name }}
            </div>
        </div>
        <div class="product">
            <div class="product__item" v-for="item in productList" :key="item.id">
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
                    <span class="product__number__minus" @click="()=>{changeItemToCart(shopId, item.id, item, -1)}">-</span>
                  {{cartList?.[shopId]?.[item.id]?.count || 0}}
                    <span class="product__number__plus" @click="()=>{changeItemToCart(shopId, item.id, item, 1)}">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '@/utils/request'

const useCurrentList = () => {
  const route = useRoute()
  const shopId = route.params.id
  const productList = ref({})
  const productObj = reactive({ list: {} })
  const categories = [
    {
      name: '全部商品',
      tab: 'all'
    },
    {
      name: '秒杀',
      tab: 'seckill'
    },
    {
      name: '新鲜水果',
      tab: 'fruit'
    }
  ]
  const currentTab = ref(categories[0].tab)
  /**
   * 获取商品列表
   * @returns {Promise<void>}
   */
  const getProducts = async (tab) => {
    const result = await get(`/api/shop/${shopId}/products?tab=${tab}`)
    if (result?.code === 200 && result?.data) {
      const data = result.data
      productList.value = data
      productObj.list = data
    }
  }
  /**
  * 切换列表左侧菜单
  */
  const handleCategoryClick = (item) => {
    currentTab.value = item.tab
  }

  console.log(productList)
  console.log(productObj)

  watchEffect(() => {
    getProducts(currentTab.value)
  })

  return { categories, shopId, currentTab, productList, handleCategoryClick }
}
const useCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeItemToCart = (shopId, productId, productInfo, num) => {
    store.dispatch('changeItemToCart', {
      shopId, productId, productInfo, num
    })
  }
  return { cartList, changeItemToCart }
}
export default {
  name: 'Content',
  setup: () => {
    const { productList, shopId, currentTab, categories, handleCategoryClick } = useCurrentList()
    const { cartList, changeItemToCart } = useCartEffect()
    return {
      categories,
      currentTab,
      productList,
      shopId,
      cartList,
      changeItemToCart,
      handleCategoryClick,
      test: 'sss'
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: .5rem;
}
.category {
    overflow-y: scroll;
    height: 100%;
    width:.76rem;
    background: #f5f5f5;
    &__item {
        line-height: .4rem;
        text-align: center;
        font-size: 14px;
        color: #333;
        &--active {
            background: #fff;
        }
    }
}
.product {
    overflow-y: scroll;
    flex: 1;
    &__item {
        position:relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid #f1f1f1;
        &__img {
            width: .68rem;
            height: .68rem;
            margin-right: .16rem;
        }
        &__title {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: #333;
        }
        &__sales {
            margin: .06rem 0;
            font-size: .12rem;
            color: #333;
        }
        &__price {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: #e93b3b;
        }
        &__yen {
            font-size: .12rem;
        }
        &__origin {
            margin-left: .06rem;
            line-height: .2rem;
            font-size: .12rem;
            color: #999;
            text-decoration: line-through;
        }
        .product__number {
            position: absolute;
            right: .18rem;
            bottom: .12rem;
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
</style>
