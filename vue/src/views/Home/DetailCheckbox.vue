<template>
  <div class="checkboxbutton">
    <van-submit-bar class="checkboxbutton"
      :price="Number(totalAllPrice * 100)" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>  
    </van-submit-bar>
  </div>
    
</template>

<script setup>
    import { ref } from 'vue';
    const checked = ref(false)
    const onSubmit = () => showToast('点击按钮');
    const props = defineProps({
      totalAllPrice:{
        typr:Number,
        default:''
      }
    })
</script>

<style  scoped>
  .checkboxbutton{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
  }
  :deep(.van-checkbox__label){
    height: 27px !important;
  }
</style>
