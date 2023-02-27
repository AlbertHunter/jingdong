<template>
    <div class="content">
        <div class="category">
            <div class="category__item category__item--active">全部商品</div>
            <div class="category__item">秒杀</div>
            <div class="category__item">新鲜水果</div>
            <div class="category__item">休闲食品</div>
            <div class="category__item">时令蔬菜</div>
            <div class="category__item">肉蛋家禽</div>
        </div>
        <div class="product">
            <div class="product__item">
                <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" />
                <div class="product__item__detail">
                    <h4 class="product__item__title">番茄250g/份</h4>
                    <p class="product__item__sales">月售10件</p>
                    <p class="product__item__price">
                        <span class="product__item__yen">&yen;</span>33.6
                        <span class="product__item__origin">&yen;66.6</span>
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus">-</span>
                    0
                    <span class="product__number__plus">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
