<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="item in banners" :key="item">
      <img :src="item.image" class="img_size"  />
    </van-swipe-item>
  </van-swipe>

</template>
<script setup>
  import { gethomebanners } from '@/network/home';
  import { ref,onMounted } from 'vue';
  const banners = ref([])
  onMounted(() => {
  fetchBanners();
});

const fetchBanners = async () => {
    const res = await gethomebanners();
    banners.value = res.data.banner.list
}

</script>
<style scoped>
  .img_size{
    width: 400px;
    height: 200px;
  }
</style>