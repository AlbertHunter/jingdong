<template>
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
        <img class="banner__img" src="@/assets/images/banner.jpg" />
      </div>
      <div class="icons">
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="@/assets/images/超市.png" />
          <p class="icons__item__desc">超市便利</p>
        </div>
      </div>
      <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart'
}
</script>
<style lang="scss" scoped>
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';
.position {
    position: relative;
    padding:.16rem .3rem .16rem 0;
    line-height: .22rem;
    font-size:16px;
    line-height: .22rem;
    @include ellipsis;
    color: $content-font-color;
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
.icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;
    &__item {
        width:20%;
        &__img {
        display: block;
        width:.4rem;
        height: .4rem;
        margin:0 auto;
        }
        &__desc {
        margin:.06rem 0 .16rem 0;
        text-align: center;
        color: $content-font-color;
        }
    }
}
.gap {
    height: .1rem;
    background: $content-bg-color;
    margin:0 -.16rem;
}
</style>
