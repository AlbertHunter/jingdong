<template>
    <div class="docker">
      <span v-for="(item,index) in dockerList" :key="index" :class="{'docker__item': true, 'docker__item--active': index ===0}">
        <div class="iconfont" v-html = "item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </span>
    </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe68d;', text: '首页' },
      { icon: '&#xe67a;', text: '购物车' },
      { icon: '&#xe63e;', text: '订单' },
      { icon: '&#xe65f;', text: '我的' }
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
