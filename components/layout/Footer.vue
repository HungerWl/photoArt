<template>
  <div class='footer-box w-full bg-black text-white text-center py-4'>
    <!-- 平板，PC -->
    <div v-if="!isMobileDevice">
      <div class="h-[400px]"></div>
    </div>
    <!-- 手机 -->
    <div v-else>
      <div class="logo flex flex-col pt-4 pb-6">
        <span class="logo-text text-[30px] font-weight-bold text-uppercase">photography Studio</span>
        <span class="logo-text text-[21px]">你的拍摄灵感，从这里开始 !</span>
        <div class="icon-box flex justify-center mt-[10px]">
          <i class="bi bi-wechat mx-5 text-[21px]"></i>
          <i class="bi bi-whatsapp mx-5 text-[21px]"></i>
          <i class="bi bi-sina-weibo mx-5 text-[21px]"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {useIsMobile} from '~/utils/isMobile';

const isMobileDevice = useIsMobile(); // 使用工具函数
</script>

<style lang="scss" scoped>

</style>