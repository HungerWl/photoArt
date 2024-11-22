<script lang="js" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { useIsMobile } from '~/composables/isMobile.js';

const modules = [Pagination];

const modulesOptions = ref([])
const { data } = await useFetch(`${useRuntimeConfig().public.apiBase}/wedding-services`);

modulesOptions.value = data.value.results


const isMobileDevice = useIsMobile(); // 使用工具函数
</script>

<template>
  <div class="wedding-box" v-if="isMobileDevice !== null">
    <swiper :modules="modules" :pagination="{
      dynamicBullets: true,
    }" class="pb-8">
      <swiper-slide v-for="item in modulesOptions" :key="item" class="w-full">
        <!--        平板，pc-->
        <div v-if="!isMobileDevice" class="w-full flex flex-column items-center py-3">
          <div class="w-full flex flex-col align-center">
            <!-- 标题 -->
            <div class="title font-weight-bold text-[30px] tracking-wider">
              {{ item.title_zh }}
            </div>
            <div class="offcanvas-title font-serif text-[30px] uppercase pb-2">
              {{ item.title_en }}
            </div>
            <ul class="card-list">
              <li v-for="node in item.pc_images" :key="node" class="card">
                <img :src="node.image" alt="" class="w-full h-[400px] md:h-[280px] object-cover" />
                <h2 class="text-[23px] py-2 offcanvas-title font-serif uppercase">{{ node.title }}</h2>
                <p class="px-2 text-[19px] text-[#515151] pb-4 offcanvas-title font-serif">{{ node.describe }}</p>
              </li>
            </ul>
            <div class="my-2">
              <v-btn class="mr-[30px]" size="x-large" prepend-icon="mdi-eye-arrow-right-outline"
                color="deep-purple-darken-2">
                查看详情
              </v-btn>
              <v-btn size="x-large" prepend-icon=" mdi-account-card-outline" color="deep-purple-darken-2">
                立即预约
              </v-btn>
            </div>
          </div>
        </div>
        <!--        手机-->
        <div v-else class="w-full flex flex-column items-center">
          <div class="title font-weight-bold text-[21px] tracking-wider">
            {{ item.title_zh }}
          </div>
          <div class="offcanvas-title font-serif uppercase pb-2">
            {{ item.title_en }}
          </div>
          <img :src="item.image" alt="" class="w-auto h-[217px]" />
          <div class="w-full flex justify-center gap-4 py-4">
            <v-btn color="indigo-darken-3" variant="flat"> 查看详情 </v-btn>
            <v-btn color="indigo-darken-3" variant="flat"> 立即预约 </v-btn>
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

/* Lazy Load Styles */
.card-image {
  display: block;
  min-height: 30rem;
  /* layout hack */
  background: #fff center center no-repeat;
  background-size: cover;
  filter: blur(3px);
  /* blur the lowres image */
}

.card-image>img {
  display: block;
  width: 100%;
  opacity: 0;
  /* visually hide the img element */
}

.card-image.is-loaded {
  filter: none;
  /* remove the blur on fullres image */
  transition: filter 1s;
}

.card-list {
  display: flex;
  align-items: center;
  text-align: center;
}

.card {
  display: inline-block;
  width: 100%;
  max-width: 25rem;
  margin: 1rem;
  font-size: 1rem;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.5);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s;
}

.card:hover {
  transform: translateY(-0.5rem) scale(1.0125);
  box-shadow: 0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5);
}

.card-description {
  display: block;
  padding: 1em 0.5em;
  color: #515151;
  text-decoration: none;
}
</style>