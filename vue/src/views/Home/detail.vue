<template>
  <div class="detail">
    {{ $store.state.counter }}
    <van-nav-bar title="商品介绍" left-arrow @click-left="onClickLeft" :fixed="true" />
    <div class="t-1">
      <van-swipe :autoplay="3000" lazy-render >
      <van-swipe-item v-for="image in topImages" :key="image" >
        <img :src="image" class="img_size"  />
      </van-swipe-item>
    </van-swipe>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-comment-info ref="comment" :comment-info="commentInfo"/>
    <detail-param-info :param-info="paramInfo"/>
    <detail-goods-info :detail-info="detailInfo" />
    <detail-tabbar @addToCart="addToCart"/>
  </div> 
  </div>
</template>

<script setup>
    import { useRoute} from 'vue-router';
    import { useStore } from 'vuex';
    import {  ref } from 'vue';
    import { getDetail,Goods,Shop,GoodsParam } from '@/network/home';
    import detailBaseInfo from './detailBaseInfo.vue';
    import DetailShopInfo from './DetailShopInfo.vue';
    import DetailGoodsInfo from './DetailGoodsInfo.vue';
    import DetailParamInfo from './DetailParamInfo.vue';
    import DetailCommentInfo from './DetailCommentInfo.vue';
    import DetailTabbar from './DetailTabbar.vue';
    const onClickLeft = () => history.back();
    const store = useStore();
    const route = useRoute();
    const iid = ref(null)
    const topImages = ref([])
    const goods =ref({})
    const shop =ref({})
    const detailInfo =ref({})
    const paramInfo =ref({})
    const commentInfo =ref({})
    iid.value =route.params.iid
    getDetail(iid.value).then(res=>{
      const data =res.result
      topImages.value = data.itemInfo.topImages
      goods.value = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      shop.value = new Shop(data.shopInfo)
      detailInfo.value = data.detailInfo;
      paramInfo.value = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.list) {
            commentInfo.value = data.rate.list[0];
          }
     
    })
    const addToCart=()=> {
        // 1.创建对象
        const obj = {
          
        }
        // 2.对象信息
        obj.iid = iid.value;
        obj.imgURL = topImages.value[0]
        obj.title = goods.value.title
        obj.desc = goods.value.desc
        obj.newPrice = goods.value.newPrice
        obj.oldPrice = goods.value.oldPrice
        // 3.添加到Store中        
        store.commit('addCart', obj)
        // store.dispatch('addCart', obj)
      }
    
    
</script>

<style  scoped>
  .img_size{
    width: 375px;
    height:370px;
  }
  .t-1{
    margin-top: 23px;
  }
</style>