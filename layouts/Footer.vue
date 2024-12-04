<template>
  <div v-if="isMobileDevice !== null" class='footer-box w-full bg-[#0f7ac0] text-white'>
    <!-- 平板，PC -->
    <pcFooter v-if="!isMobileDevice" class="pt-[20px]"></pcFooter>
    <!-- 手机 -->
    <div v-else class="text-center bg-black">
      <div class="logo flex flex-col pt-4 pb-6">
        <span class="logo-text text-[30px] font-weight-bold uppercase">見 川_摄影工作室</span>
        <span class="logo-text text-[21px]">你的拍摄灵感，从这里开始 !</span>
        <div class="icon-box flex justify-center mt-[10px]">
          <i class="mdi mdi-wechat mx-5 text-[21px]"></i>
          <i class="mdi mdi-phone-forward mx-5 text-[21px]"></i>
          <i class="mdi mdi-sina-weibo mx-5 text-[21px]"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsMobile } from '~/composables/isMobile.js';
import pcFooter from '~/layouts/pcFooter.vue'

const isMobileDevice = useIsMobile(); // 使用工具函数
</script>

<style lang="scss" scoped></style>