<template>
  <div class="logo-area">
    <div v-if="isMobileDevice" class="flex justify-center pt-2">
      <div class="title">
        <div class="text-[#5c5c5c] tracking-wider font-weight-bold">你的拍摄灵感，从这里开始 !</div>
      </div>
    </div>
    <div v-else class="logo-box">
      <div></div>
      <div class="title">
        <span class="text-[40px]">photography Studio</span>
        <div class="title-text w-full pl-[3px] text-xl">你的拍摄灵感，从这里开始 !</div>
      </div>
      <div class="title-icon">
        <i class="bi bi-wechat"></i>
        <i class="bi bi-whatsapp"></i>
        <i class="bi bi-sina-weibo"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useIsMobile} from '~/composables/isMobile.js';

const isMobileDevice = useIsMobile();

</script>
<style lang="scss" scoped>
.logo-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #0f7ac0;
    /* 调整蓝色值 */
    font-size: 48px;
    font-weight: 800;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #57a2d3 // 鼠标悬停时改变文字颜色
    }

    .title-text {
      text-align: left;
      color: #5c5c5c
    }
  }

  .title-icon {
    font-size: 24px;

    > i {
      margin-right: 20px;
      cursor: pointer;
      // 鼠标悬停时显示手型
      transition: color 0.3s ease-in-out;
      // 添加过渡效果

      &:hover {
        color: #2995f9;
        // 鼠标悬停时改变文字颜色
        cursor: pointer;
      }
    }
  }
}
</style>