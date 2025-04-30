<template>
  <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<van-tree-select 
  v-model:main-active-index="activeIndex"
  height="810"
  :items="categorys"
  max="3"
>
  <template #content>
    <div class="image-container">
      <div 
          v-for="(item, index) in images" 
          :key="index" 
          class="image-card"
        >
        <van-image :src="item.imageUrl" 
        v-show="shouldShowImage" class="image" />
        <div class="title">{{ item.title }}</div>
      </div>
 
     

    </div>
  </template>
</van-tree-select>
</template>
<script setup>
import { getCategory,getSubcategory } from '@/network/classify';
import { onMounted, ref,watch } from 'vue';
import { showToast } from 'vant';
    const value = ref('');
    const onSearch = (val) => showToast(val);
    const onCancel = () => showToast('取消');
    const images = ref([])
    const activeIndex = ref(0);
    const categorys = ref([])
    const _getCategory=()=>{
      getCategory().then(res=>{
        // 添加安全访问和空值检查
        console.log(res);
    const list = res?.data?.category?.list || [];
      categorys.value = list.map(item => ({
      text: item.title,
      maitKey: item.maitKey 
    }));
    watch(activeIndex, (newIndex) => {
  // 获取当前选中的 maitKey
  const currentMaitKey = categorys.value[newIndex]?.maitKey;
  // 如果需要，可以用它加载子分类
  if (currentMaitKey) {
    getSubcategory(currentMaitKey).then(res => {
      console.log('子分类数据:', res.data);
      const list = res.data?.list || [];
      images.value = list.map(item => ({
    // 根据实际数据结构提取需要的字段，例如图片 URL
    imageUrl: item.image || 'default.jpg', // 示例字段
    title: item.title || '未命名'              // 示例字段
  }));
  
    });
  }
});
    
    })
    }
    onMounted(()=>{
      _getCategory()
    })
    const shouldShowImage = (index) => activeIndex.value === index;
    // getSubcategory().then(res=>{
    //   console.log(res);
      
    // })
</script>

<style scoped>
.image-card {
  display: inline-block; /* 或 flex 布局 */
  margin: 10px;
  text-align: center; /* 文字居中 */
}

.image {
  width: 100px;
  height: 100px;
  display: block; /* 避免图片下方间隙 */
}

.title {
  margin-top: 8px;
  font-size: 14px;
  color: #333;
}
</style>