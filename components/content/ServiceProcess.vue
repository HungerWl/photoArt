<script lang="js" setup>
import {useIsMobile} from '~/composables/isMobile.js';
import {ref} from "vue";

const isMobileDevice = useIsMobile(); // 使用工具函数

const lineOpitons = ref([
  {
    text: '预约',
    color: '#fff',
    background: "#283593",
    icon: "bi bi-calendar3",
    describe: "心动不如行动，立即预约，开启你的闪耀时刻！"
  },
  {
    text: '到店',
    color: '#fff',
    background: "#ba68c8",
    icon: "bi bi-house-heart",
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
    icon: "bi bi-camera-fill",
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
  <div class="service-process py-[10px]">
    <!--    移动端-->
    <div v-if="isMobileDevice">
      <div class="text-center text-[19px] title-container">
        <i class="bi bi-calendar2-heart mr-2 text-[red] icon"></i>
        <span class="title-text">服务流程</span>
        <div class="w-full overflow-x-auto mt-[5px]">
          <v-timeline direction="horizontal">
            <v-timeline-item
                v-for="item in lineOpitons"
                :key="item.text"
                :dot-color="item.background"
                :icon="item.icon"
                :fill-dot="true"
                size="small"
            >
              <div :style="{ color: item.color, background: item.background }"
                   class="w-[200px] border border-gray-200 flex flex-col text-left px-4 py-3 rounded-md shadow-lg">
                <div class="font-semibold text-lg leading-snug">
                  {{ item.text }}
                </div>
                <div class="text-sm leading-normal opacity-80">
                  {{ item.describe }}
                </div>
              </div>
              <template v-slot:opposite>
                <v-img
                    :width="120"
                    :height="80"
                    aspect-ratio="16/9"
                    cover
                    src=""
                ></v-img>
              </template>
            </v-timeline-item>
          </v-timeline>
        </div>
      </div>
    </div>
    <!--    PC端,平板-->
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
  font-size: 20px;
}

/* 图标颜色渐变 */
.icon {
  color: #ff7e5f;
  animation: iconColorChange 1s ease-in-out forwards, bounce 1s ease infinite alternate;
}
</style>