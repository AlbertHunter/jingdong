<template>
    <div class="wrapper">
      <div class="search">
        <div
          class="search__back iconfont"
          @click = "handleBackClick"
        >&#xe662;</div>
        <div class="search__content">
          <span class="search__content__icon iconfont">&#xe600;</span>
          <input
            class="search__content__input"
            placeholder="请输入商品名称"
          />
        </div>
      </div>
      <ShopInfo :item="data2" :hideBorder = "true" v-show="item.imgUrl"/>
      <Content />
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '@/utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content.vue'
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const data2 = ref({})
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.code === 200 && result?.data) {
      data.item = result.data
      data2.value = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, data2, getItemData }
}
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return handleBackClick
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content },
  setup () {
    const { item, data2, getItemData } = useShopInfoEffect()
    const handleBackClick = useBackRouterEffect()
    getItemData()
    return { item, data2, handleBackClick }
  }
}
</script>

<style lang="scss">
@import '@/style/viriables.scss';
.wrapper {
    padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color:#b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bg-color;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-font-color;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background:none;
      height: .32rem;
      color:$content-font-color;
      font-size:.14rem;
      &::placeholder {
        color: $content-font-color;
      }
    }
  }
}
</style>
