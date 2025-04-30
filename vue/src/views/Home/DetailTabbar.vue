<template>
  <div class="detailtabbar">
    <van-action-bar >
      <van-action-bar-icon icon="chat-o" text="客服" dot  @click="contactService"/>
      <van-action-bar-icon icon="cart-o" text="购物车" badge="5" @click="goToCart" />
      <van-action-bar-icon icon="shop-o" text="店铺" badge="12" @click="viewShop"  />
      <van-action-bar-button type="warning" text="加入购物车" to="/shopping" @click="addToCart" />
      <van-action-bar-button type="danger" text="立即购买" @click="buyNow" />
    </van-action-bar>

  </div>
</template>

<script setup>

const emit = defineEmits(['addToCart'])
const addToCart=()=> {
        emit('addToCart')
      }
const contactService = () => showToast('联系客服');
const goToCart = () => showToast('前往购物车');
const viewShop = () => showToast('查看店铺');

const buyNow = () => showToast('立即购买');
</script>
  
<style  scoped>
  .detailtabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
</style>