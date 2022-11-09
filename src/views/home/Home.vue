<template>
    <div class="wrapper">
        <StaticPart />
        <NearBy />
    </div>
    <Docker />
  </template>
<script>
import StaticPart from './StaticPart'
import NearBy from './NearBy'
import Docker from './Docker'
export default {
  name: 'Home',
  components: { StaticPart, NearBy, Docker }
}
</script>
<style lang="scss" scoped>
@import '@/style/viriables.scss';
.wrapper {
    position: absolute;
    overflow-y: auto;
    left:0;
    right: 0;
    top:0;
    bottom:.5rem;
    padding:0 .18rem .2rem .18rem;
}
</style>
