<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>
<script setup>
import BScroll from 'better-scroll';
import PullUp from '@better-scroll/pull-up';
import { onMounted, ref } from 'vue';
BScroll.use(PullUp)
const wrapper = ref(null)
const bscroll = ref(null)
const props =defineProps({
  activeName:{
    type:String,
    default:'pop',
  }
})
const emit = defineEmits(['pullingUp'])
onMounted(() => {
  setTimeout(() => {
    bscroll.value = new BScroll(wrapper.value, {
      probeType: 3,
      pullUpLoad: true,
      click:true,
      bounce: {
    top: true,  // 允许顶部回弹
    bottom: true // 允许底部回弹
  },
      preventDefault: false,  // 禁用默认事件阻止（关键）
      stopPropagation: true,  // 阻止事件冒泡
      preventDefaultException: {
      tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A|IMG|VIDEO)$/, // 这些元素允许默认行为
      className: /(^|\s)ignore-prevent(\s|$)/ // 特定class元素允许默认行为
        },
      });     
      
    bscroll.value.on('pullingUp',()=>{
      emit('pullingUp')
      bscroll.value.finishPullUp();
      bscroll.value.refresh();
    })
  }, 200);
  }
);

</script>
<style scoped>
.wrapper {
  height: calc(100vh - 96px);
  overflow: hidden;
  touch-action: none;
}

.content {
  min-height: calc(100% + 1px);
  transform: translateZ(0); 
}

</style>