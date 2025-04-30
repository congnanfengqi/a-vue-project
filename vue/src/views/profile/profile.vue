<template>
  <van-nav-bar title="个人档案" style="background-color: deeppink;">
  </van-nav-bar>
  <div class="user-profile">
  <!-- 用户信息区域 -->
  <div class="user-header">
    <div class="user-avatar">
      <img src="../../assets/img/头像.svg" alt="用户头像">
      <span class="vip-badge">VIP</span>
    </div>
    <div class="user-info">
      <h2>用户名</h2>
      <p>会员等级: 黄金会员</p>
      <p>账户余额: ¥1,288.00</p>
    </div>
    <div class="settings-btn">
      <i class="icon-settings"></i>
    </div>
  </div>
  
  <!-- 订单状态快捷入口 -->
  <div class="order-status">
    <div class="status-item">
      <i class="icon-payment"></i>
      <span>待付款</span>
    </div>
    <div class="status-item">
      <i class="icon-deliver"></i>
      <span>待发货</span>
    </div>
    <div class="status-item">
      <i class="icon-receive"></i>
      <span>待收货</span>
    </div>
    <div class="status-item">
      <i class="icon-review"></i>
      <span>待评价</span>
    </div>
    <div class="status-item">
      <i class="icon-refund"></i>
      <span>退款/售后</span>
    </div>
  </div>
  
  <!-- 功能入口 -->
  <div class="function-grid">
    <div class="grid-item">
      <i class="icon-coupon"></i>
      <span>优惠券</span>
    </div>
    <div class="grid-item">
      <i class="icon-points"></i>
      <span>积分</span>
    </div>
    <div class="grid-item">
      <i class="icon-favorite"></i>
      <span>收藏</span>
    </div>
    <div class="grid-item">
      <i class="icon-history"></i>
      <span>浏览记录</span>
    </div>
    <div class="grid-item">
      <i class="icon-address"></i>
      <span>地址管理</span>
    </div>
    <div class="grid-item">
      <i class="icon-service"></i>
      <span>客服中心</span>
    </div>
    <div class="grid-item">
      <i class="icon-feedback"></i>
      <span>意见反馈</span>
    </div>
    <div class="grid-item">
      <i class="icon-about"></i>
      <span>关于我们</span>
    </div>
  </div>
  
  <!-- 底部操作 -->
  <div class="user-actions">
    <button class="logout-btn">退出登录</button>
  </div>
</div>
  
</template>
<script setup>

</script>
<style  scoped>
.user-profile {
  padding: 15px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.user-header {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #ff9500, #ff5e3a);
  padding: 20px;
  border-radius: 10px;
  color: white;
  margin-bottom: 15px;
}

.user-avatar {
  position: relative;
  margin-right: 15px;
}

.user-avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid white;
}

.vip-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: gold;
  color: #333;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
}

.user-info {
  flex: 1;
}

.user-info h2 {
  margin: 0 0 5px 0;
  font-size: 18px;
}

.user-info p {
  margin: 3px 0;
  font-size: 12px;
  opacity: 0.9;
}

.settings-btn {
  font-size: 20px;
}

.order-status {
  display: flex;
  background: white;
  border-radius: 10px;
  padding: 15px 0;
  margin-bottom: 15px;
}

.status-item {
  flex: 1;
  text-align: center;
}

.status-item i {
  font-size: 24px;
  display: block;
  margin-bottom: 5px;
  color: #ff5e3a;
}

.function-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.grid-item {
  text-align: center;
}

.grid-item i {
  font-size: 24px;
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.user-actions {
  text-align: center;
}

.logout-btn {
  background: white;
  border: 1px solid #ddd;
  padding: 10px 30px;
  border-radius: 20px;
  color: #333;
  font-size: 14px;
}
 
</style>