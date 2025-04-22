<template>
  <div class="tabbar">
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/classify" icon="search">分类</van-tabbar-item>
    <van-tabbar-item replace to="/shopping" icon="search">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/profile" icon="search">个人</van-tabbar-item>
  </van-tabbar>
  <router-view></router-view>
    <!-- <tabbar-item></tabbar-item> -->
    
  </div>
</template>

<script setup>
// import {ref} from 'vue';
// const active = ref('home');
// import TabbarItem from './TabbarItem.vue';  
</script>

<style lang="scss" scoped>

</style>