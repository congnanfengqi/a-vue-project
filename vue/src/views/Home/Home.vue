<template>
  
    <van-pull-refresh v-model="loading" @refresh="onRefresh" success-text="刷新成功" >
      <van-cell class="a"/>
      <scroll class="content" >
        <NavBar></NavBar>
        <swper></swper>
        <activity></activity>
        <hot></hot>
        <TabControl></TabControl>
      <van-back-top />
    </scroll>
    </van-pull-refresh>
  
    
</template>

<script setup>
  import NavBar from '@/components/common/navbar/NavBar.vue';
  import swper from '@/components/common/swper/swper.vue';
  import scroll from '@/components/common/scroll/scroll.vue';
  import activity from './activity.vue';
  import hot from './hot.vue';
  import TabControl from '@/components/context/tabcontrol/TabControl.vue';
  import { ref } from 'vue';
  import { showToast } from 'vant';
  const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        showToast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };
</script>
<style scoped>
  .a{
    padding: 0 !important;
  }
  .content{
    height: 100vh;
    position: relative;
  }
</style>