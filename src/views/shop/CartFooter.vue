<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img :src="require('@/assets/images/basket.png')" alt="" class="check__icon__img">
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;128</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
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
