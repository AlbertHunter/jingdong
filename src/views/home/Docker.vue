<template>
    <div class="docker">
      <span v-for="(item,index) in dockerList" :key="index" :class="{'docker__item': true, 'docker__item--active': index ===0}">
      <router-link :to="item.to">
        <div class="iconfont" v-html = "item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
      </span>
    </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe68d;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe67a;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe63e;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe65f;', text: '我的', to: { name: 'Profile' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/viriables.scss';
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
        a {
          color: #333;
          text-decoration: none;
        }
        &--active {
          color: #1FA4FC;
          a {
            color: #1FA4FC;
          }
        }
    }
    &__title {
        font-size:20px;
        transform: scale(.5,.5);
        transform-origin: center top;
    }
}
</style>
