<script lang="js" setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';

import {useIsMobile} from '~/composables/isMobile.js';

const modules = [Pagination];

const modulesOptions = ref([{
  image: new URL('@/assets/img/2.jpg', import.meta.url).href,
  // 英文标题
  titleEn: "Light Wedding Dress",
  // 中文标题
  titleZh: "轻婚纱",
  // 标语
  slogan: "轻盈优雅，记录幸福瞬间"
},
  {
    image: new URL('@/assets/img/3.jpg', import.meta.url).href,
    titleZh: "证件照",
    titleEn: "Identification Photo",
    slogan: "专业拍摄，呈现最美证件照"
  },
  {
    image: new URL('@/assets/img/1.jpg', import.meta.url).href,
    titleZh: "户外照",
    titleEn: "Outdoor Photo",
    slogan: "自然光影，定格户外之美"
  }
])

const isMobileDevice = useIsMobile(); // 使用工具函数
</script>

<template>
  <div class="wedding-box">
    <swiper
        :modules="modules"
        :pagination="{
        dynamicBullets: true,
    }"
        class="pb-8">
      <swiper-slide v-for="item in modulesOptions" :key="item" class="w-full">
        <!--        平板，pc-->
        <div v-if="!isMobileDevice"></div>
        <!--        手机-->
        <div v-else class="w-full flex flex-column items-center">
          <div class="title font-weight-bold text-[21px] tracking-wider">{{ item.titleZh }}</div>
          <div class="offcanvas-title font-serif uppercase pb-2">{{ item.titleEn }}</div>
          <img :src="item.image" alt="" class="w-auto h-[217px]">
          <div class="w-full flex justify-center gap-4 py-4">
            <v-btn color="indigo-darken-3" variant="flat">
              查看详情
            </v-btn>
            <v-btn color="indigo-darken-3" variant="flat">
              立即预约
            </v-btn>
          </div>
          <div v-html="item.slogan"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.wedding-box {
  width: 100%;
}

.title {
  color: black; // 默认颜色
  transition: color 0.4s ease; // 颜色过渡效果，时长0.3秒
}

.title:hover {
  color: red; // 悬停时变成红色
}

</style>