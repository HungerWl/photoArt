<template>
  <div class="product-introduction">
    <!-- 产品介绍名称 -->
    <div class="product-introduction-name">
      <!-- 遍历productIntroductionBox数组，生成span标签 -->
      <span v-for="(i, idx) in productIntroductionBox" :key="i.name" :class="{ active: idx === activeIndex }"
        @click="changeSlide(idx)">
        {{ i.name }}
      </span>
    </div>

    <!-- 产品介绍内容 -->
    <div class="product-introduction-content">
      <!-- 使用swiper组件，设置导航和模块 -->
      <swiper ref="swiperRef" :navigation="true" :modules="modules" class="mySwiper w-full h-full"
        :initial-slide="activeIndex" @slideChange="onSlideChange" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }">
        <!-- swiper-slide组件，生成轮播图 -->
        <swiper-slide v-for="(i, idx) in productIntroductionBox" :key="idx">
          <img src="/assets/img/image.png" alt="">
          <img src="/assets/img/image.png" alt="">
          <img src="/assets/img/image.png" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { ref } from 'vue';
import { Navigation, Autoplay } from 'swiper/modules';

// 当前选中的索引
const activeIndex = ref(0);

// 定义产品介绍名称数组
const productIntroductionBox = ref([
  { name: "产品介绍" },
  { name: "轻婚纱" },
  { name: "花颜照" },
  { name: "职业形象照" },
  { name: "文艺照" },
]);

// 定义swiper组件的模块
const modules = ref([Navigation, Autoplay]);

// 获取Swiper组件实例
const swiperRef = ref(null);

// 点击事件，切换轮播图
const changeSlide = (idx) => {
  activeIndex.value = idx; // 更新activeIndex值
};

// Swiper滑动时更新activeIndex
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex; // 滑动时同步更新activeIndex
};
</script>

<style scoped lang="scss">
.product-introduction {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.product-introduction-name {
  padding-top: 20px;

  >span {
    font-weight: 600;
    color: #000;
    margin-right: 20px;
    transition: color 0.3s;

    &.active {
      color: red;
      /* 高亮颜色 */
    }

    &:hover {
      color: red;
      cursor: pointer;
    }
  }
}

.product-introduction-content {
  width: 100%;
  height: 400px;
  // border: 1px solid #000;
  margin-top: 20px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      margin-right: 10px;
    }
  }

  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
}
</style>
