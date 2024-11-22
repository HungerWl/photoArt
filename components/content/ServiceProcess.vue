<script lang="js" setup>
import { useIsMobile } from '~/composables/isMobile.js';
import { ref } from "vue";

const isMobileDevice = useIsMobile(); // 使用工具函数

const lineOpitons = ref([
  {
    text: '咨询',
    color: '#fff',
    background: "#283593",
    icon: "mdi mdi-account-voice",
    describe: "免费咨询，专业解答，助您做出最佳选择"
  },
  {
    text: '预约',
    color: '#fff',
    background: "#283593",
    icon: "mdi mdi-clipboard-text-clock-outline",
    describe: "心动不如行动，立即预约，开启你的闪耀时刻！"
  },
  {
    text: '到店',
    color: '#fff',
    background: "#ba68c8",
    icon: "mdi mdi-home-export-outline",
    describe: "踏入我们的摄影空间，开启一场美妙的视觉之旅！"
  },
  {
    text: '造型',
    color: '#fff',
    background: "#e57373",
    icon: "mdi mdi-face-woman-shimmer-outline",
    describe: "专业的造型师，让您美得无可挑剔！"
  },
  {
    text: '拍摄',
    color: '#fff',
    background: "#66bb6a",
    icon: "mdi mdi-camera",
    describe: "多种风格任你选，让每一张照片都充满故事！"
  },
  {
    text: '选片',
    color: '#fff',
    background: "#ffca28",
    icon: "mdi mdi-image-search-outline",
    describe: "精心挑选，只为呈现最完美的你！"
  },
  {
    text: '修片',
    color: '#fff',
    background: "#26c6da",
    icon: "mdi mdi-image-edit-outline",
    describe: "让您的照片更具质感，更具艺术气息！"
  },
  {
    text: '取照',
    color: '#fff',
    background: "#ef5350",
    icon: "mdi mdi-card-account-phone",
    describe: "每一张照片都是一份美好的回忆！"
  },
])
</script>

<template>
  <div v-if="isMobileDevice !== null" class="service-process w-full py-[10px]">
    <div class="text-center text-[19px] sm:text-[24px] md:text-[32px] lg:text-[35px] pb-[20px]">
      <i class="mdi mdi-orbit mr-2 text-[19px] sm:text-[24px] md:text-[32px] lg:text-[35px] icon"></i>
      <span class="title-text">服务流程</span>
    </div>
    <!--    移动端-->
    <div v-if="isMobileDevice" class="w-full grid grid-cols-4 gap-4">
      <div v-for="(item, index) in lineOpitons" :key="index" class="w-full flex flex-col items-center justify-center">
        <i :class="item.icon" class="text-2xl mb-1"></i>
        <h2 class="">{{ item.text }}</h2>
      </div>
    </div>
    <!--    PC端,平板-->
    <div v-else class="w-full max-w-[1280px] mx-auto">
      <div class="grid grid-cols-4 gap-4 justify-center">
        <div v-for="(item, index) in lineOpitons" :key="index"
          class="card-box-pc bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center cursor-pointer">
          <i :class="item.icon" class="text-4xl mb-2"></i>
          <h2 class="text-lg font-bold mb-2">{{ item.text }}</h2>
          <p class="text-gray-600 text-sm">{{ item.describe }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 渐变文字样式 */
.title-text {
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
}

/* 图标颜色渐变 */
.icon {
  color: #ff7e5f;
}

.card-box-pc {
  position: relative;
  /* Necessary for absolute positioning of the triangle */
}

.card-box-pc:hover::before {
  content: "";
  position: absolute;
  top: 0;
  /* Adjust the position as needed */
  left: 0;
  /* Adjust the position as needed */
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 0;
  border-color: #283593 transparent transparent transparent;
  /* Adjust the color as needed */
}

.card-box-pc:hover * {
  transition: color 0.3s ease-in-out;
  color: red;
}
</style>