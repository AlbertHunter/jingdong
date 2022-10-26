<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe7e5;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe600;</span>
      <input type="search" class="search__text" placeholder="山姆会员商店优惠商品">
    </div>
    <div class="banner">
      <img class="banner__img" src="./assets/images/banner.jpg" />
    </div>
  </div>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe68d;</div>
      <div class="docker__title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe67a;</div>
      <div class="docker__title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe63e;</div>
      <div class="docker__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe65f;</div>
      <div class="docker__title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left:0;
  right: 0;
  top:0;
  bottom:.5rem;
  padding:0 .18rem;
}
.position {
  position: relative;
  padding:.16rem .3rem .16rem 0;
  line-height: .22rem;
  font-size:16px;
  line-height: .22rem;
  @include ellipsis;
  color:$content-font-color;
  .position__icon {
      position: relative;
      top:.01rem;
      font-size:.2rem;
  }
  .position__notice {
    position: absolute;
    right:0;
    top:.17rem;
    font-size:.2rem;
  }
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #f5f5f5;
  color:#b7b7b7;
  border-radius: .16rem;
  .iconfont {
    display:inline-block;
    padding:0 .08rem 0 .16rem;
    font-size:.16rem;
  }
  &__text {
    display:inline-block;
    font-size:.14rem;
    border:none;
    background-color: transparent;
    height:.30rem;
    width: calc(100% - 1rem);
  }
}
.banner {
  height:0;
  overflow:hidden;
  padding-bottom:25.4%;
  &__img {
    width: 100%;
  }
}
.docker {
  display:flex;
  position: absolute;
  box-sizing: border-box;
  padding:0 0.18rem;
  bottom: 0;
  width:100%;
  height: .52rem;
  border-top: 1px solid #f1f1f1;
  color:$content-font-color;
  &__item{
    flex:1;
    text-align: center;
    vertical-align: middle;
    .iconfont {
      margin:.07rem 0 .02rem 0;
      font-size:.2rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size:20px;
    transform: scale(.5,.5);
    transform-origin: center top;
  }
}
</style>
