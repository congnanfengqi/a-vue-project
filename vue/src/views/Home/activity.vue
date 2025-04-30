<template >
  <div class="activity-container">
    <template v-for="(item,index) in activity" :key="index" >
      <div class="activity-item"><img :src="item.image" alt="">
        <span>{{ item.title }}</span></div>
  </template>
  </div>
</template>
<script setup>
import { gethomebanners } from '@/network/home';
import { ref } from 'vue';
const activity =ref([])
gethomebanners().then(res=>{
    activity.value=res.data.recommend.list
  })
</script>
<style scope>
img{
  width: 70px;
}
span{
  font-size: 11px;
  padding-top: 7px;
  height: 10px;
}
.activity-item{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.activity-container {
  justify-content: space-around;
  display: flex;          /* 启用flex布局 */
  gap: 16px;             /* 设置元素间距 */
  overflow-x: auto;      /* 允许水平滚动 */
  padding: 25px 0;       /* 添加内边距 */
  width: 100%;
  border-bottom: 4px solid gainsboro;
  
}

</style>
  /* .activity{
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
   .act{
    width: 60px;
    
   }
  img{
    width: 50px;
    height: 50px;
  }
  p{
    font-size: 12px;
  } */
 
  