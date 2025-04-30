<template>
  <van-nav-bar :title="`购物车(${ totalItems })`" left-arrow @click-left="onClickLeft"/>
  <div class="cart-item" v-for="item in $store.state.cartList" :key="item.id">
    <van-checkbox v-model="item.checked" class="item-checkbox" />
      <van-card 
      :key="item.iid"
      :num="item.count"
      :price="item.oldPrice"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.imgURL"
    />

  </div>
    <detail-checkbox class="checkboxbutton" :totalAllPrice="totalAllPrice"/>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const totalItems = computed(() => {
  return store.state.cartList.reduce((sum, item) => sum + (Number(item.count) || 0), 0);
});

const totalAllPrice = computed(() => {
  return store.state.cartList.reduce((total, item) => {
    // 深度验证数据格式
    const price = typeof item.oldPrice === 'string' 
      ? parseFloat(item.oldPrice.replace(/[^\d.-]/g, '')) 
      : Number(item.oldPrice) || 0;
      
    const count = Math.max(Number(item.count) || 0, 0); // 确保不小于0
    
    if (isNaN(price) || isNaN(count)) {
      console.warn('Invalid item data:', item);
      return total;
    }
    
    return (Number(total) + (Number(price) * Number(count))).toFixed(2);
  }, 0);
});



import DetailCheckbox from '../Home/DetailCheckbox.vue';
import { ref } from 'vue';
const onClickLeft = () => history.back();
const checked = ref(true);
</script>

<style scoped>
.price-summary {
  padding: 15px;
  background: #f8f8f8;
  border-radius: 8px;
  margin: 10px 0;
}
.cart-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
  
  .item-checkbox {
  margin-right: 12px;
  flex-shrink: 0;
}
:deep(.van-card) {
  width: 328px;
  border-radius: 10px;
}
</style>