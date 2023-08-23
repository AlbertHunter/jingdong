<template>
  <div class="top">
    <div class="top__header">
      <div
        class="top__header__back iconfont"
        @click="handleClickBack"
      >&#xe60a;</div>
      <div class="top__header__title">确认订单</div>
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div v-if="address" @click="handleAddressClick">
        <div class="top__receiver__address">
          {{address.city}}{{address.department}}{{address.houseNumber}}
        </div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__item">{{address.name}}</span>
          <span class="top__receiver__info__item">{{address.phone}}</span>
        </div>
        <div class="top__receiver__icon iconfont">&#xe60a;</div>
      </div>
      <div v-else>
        <div class="top__receiver__address">暂无可用地址</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'OrderConfirmation',
  setup () {
    const router = useRouter()
    const route = useRoute()
    const shopId = route.params.id
    console.log(shopId)
    const handleClickBack = () => router.back()
    const address = {
      id: '1',
      city: '北京',
      department: '海淀区西三环北路2号院北京理工大学国防科技园',
      houseNumber: '2号楼10号',
      name: '小慕',
      phone: '18611112222',
      createdAt: 'Tue Jan 12 2021 23:24:33 GMT+0800 (China Standard Time)',
      updatedAt: 'Tue Jan 12 2021 23:24:33 GMT+0800 (China Standard Time)'
    }
    const handleAddressClick = () => {
      console.log('地址选择')
    }
    return {
      handleClickBack,
      handleAddressClick,
      address
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';

.top {
  position: relative;
  height: 1.81rem;
  background-size: 100% 1.44rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .2rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;
    color: $content-fontColor;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      font-weight: bold;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      @include ellipsis;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__item {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: $medium-fontColor;
      }
    }
    &__icon {
      position: absolute;
      right: .16rem;
      top: 50%;
      font-size: .16rem;
      transform: translateY(-.08rem) rotate(180deg);
      color: $medium-fontColor;
    }
  }
}
</style>
