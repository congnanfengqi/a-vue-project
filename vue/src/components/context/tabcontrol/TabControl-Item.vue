<template>
  <div  class="goodslist">
    <template v-for="item in goodslist" :key="item.iid" >
        <div class="goodslistitem" @click="handleClick(item)">
          <img :src="item.show.img" alt="" class="goodslistimg">
          <div class=" goodslisttitle">{{ item.title}}</div>
          <div class="goodslist1">   
            <span class="goodslistprice">￥{{ item.price }}</span>
            <span>&nbsp;{{ item.cfav }}</span>
          </div>
  </div>
</template>
  </div>
</template>
<script setup>
    const props =defineProps({
      goodslist:{
        type:Array,
        required:true}
    })
    const emit = defineEmits(['item-click']);
    const handleClick = (item) => {
      emit('item-click', item.iid); // 发射 iid
    };
</script>

<style scoped>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
 justify-content: space-evenly;
  gap: 10px; 
  padding-top: 10px;
}
  .goodslistitem{
    width: 168px;
    height: 300px;
  }
  .goodslistimg{
    width: 170px;
    height: 250px;
    border-radius: 7px;
  }
  .goodslisttitle{
    font-size: 13px;
    text-overflow:ellipsis;
    overflow:hidden; 
    white-space:nowrap;
  }
  .goodslistprice{
    color: deeppink;
  }
  .goodslist1{
    display: flex;
    justify-content: center;
  }
  .goodslistprice::after{
    content: ""; 
    display: inline-block; 
    background: url(../../../assets/img/collect.svg) no-repeat center;
    background-size: contain; /* 等比例缩放图标 */
    width: 12px; 
    height: 12px; 
    margin-left: 4px; 
    }

</style>