<template>
  <div class="container">
      <van-tabs v-model:active="activeName" >
      <van-tab 
        v-for="tab in tabs" 
        :key="tab.name"
        :title="tab.title" 
        :name="tab.name"
        >
        <scroll :activeName="activeName" @pulling-up="loadMore" class="scroll-content">
          <TabControlItem :goodslist="goodlist[tab.name].list" @item-click="handleItemClick"/>
        </scroll>
      </van-tab>
    </van-tabs>
    </div>
</template>
<script setup>
import TabControlItem from './TabControl-Item.vue';
import router from '@/router';
import scroll from '@/components/common/scroll/scroll.vue';
import { ref,reactive,onMounted,} from 'vue';
import { getHomeData } from '@/network/home';
const activeName = ref('pop');
const iid =ref(null)
const tabs = [
  { title: '流行', name: 'pop' },
  { title: '新款', name: 'new' },
  { title: '精选', name: 'sell' }
]
const goodlist =reactive({
  pop:{page:1,list:[]},
  new:{page:1,list:[]},
  sell:{page:1,list:[]}
}) 
const fetchData = (type) => {
  getHomeData(type, goodlist[type].page).then(res => {
    goodlist[type].list.push(...res.data.list)
    goodlist[type].page += 1
  })
}
const loadMore = () => {
   fetchData(activeName.value)
}
onMounted(() => {
  fetchData('pop')
  fetchData('new')
  fetchData('sell')
})

const handleItemClick = (iid) => {
  router.push(`/detail/${iid}`); // 跳转到详情页，携带 iid
};

</script>
  
<style scoped>
  :deep(.van-tab__text) {
  overflow: visible !important;
}
.container {
  height: 100%;
  min-height: 100vh;
}
.scroll-content{
  /* touch-action: none; 禁止浏览器默认的触摸滚动行为*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>


