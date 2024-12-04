<template>
    <div v-if="isMobileDevice !== null" class="adrress-box max-w-[1320px] mx-auto mt-[40px]">
        <div class="text-center text-[19px] sm:text-[24px] md:text-[32px] lg:text-[35px] pb-[10px]">
            <i class="mdi mdi-map-search mr-2 text-[19px] sm:text-[24px] md:text-[32px] lg:text-[35px] icon"></i>
            <span class="title-text">照相地址</span>
        </div>
        <!-- pc , 平板 -->
        <div v-if="!isMobileDevice" class="flex justify-center m-[20px]">
            <div class="flex flex-col flex-1 border-[1px] border-[#dbdbdb] mr-[20px] p-[20px]">
                <div class="flex align-center justify-between border-b-[1px] border-[#dbdbdb] pb-[10px]">
                    <div class="flex flex-col">
                        <span class="text-[22px] font-[700] font-serif uppercase tracking-widest">{{
                            cameraAddress.company_name }}</span>
                        <span class="text-[16px] font-[400] font-serif">{{ cameraAddress.location }}</span>
                    </div>
                    <img class="w-[150px] h-[150px] md:w-[225px] md:h-[120px] object-cover"
                        src="~/assets/img/address.jpg" alt="">
                </div>
                <div class="masonry-container">
                    <div class="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-[16px]">
                        <v-img v-for="item in cameraAddress.options" :key="item" cover :src="item.camera_image"
                            class="masonry-item">
                            <div class="text-overlay">
                                <!-- 文字溢出 -->
                                <div class="text line-clamp-2 font-serif text-gray-800" :title="item.address">
                                    {{ item.address }}
                                </div>
                            </div>
                        </v-img>
                    </div>
                </div>
            </div>
            <div class="w-[400px] md:w-[350px] cursor-pointer">
                <div
                    class="w-full flex align-center justify-between text-[22px] font-serif font-[700] border-t-[3px] border-b-[3px] border-[#000]">
                    <div class="flex space-x-1 text-xl font-bold">
                        <span v-for="(char, index) in letters" :key="index"
                            :class="`py-[20px] transition-colors duration-300 hover:text-${colors[index % colors.length]}`">
                            {{ char }}
                        </span>
                    </div>
                    <span class="text-[16px]">营业时间</span>
                </div>
                <v-date-picker></v-date-picker>
            </div>
        </div>
        <!-- 移动端 -->
        <div v-else class="pb-2">
            <div class="bg-[#283593] w-full text-white px-2 pt-3 pb-2 tracking-widest">
                <div class="flex flex-col w-full">
                    <div class="text-[18px] "></div>
                    <div class="mb-[5px] text-[16px] font-serif">工作室地址: {{ cameraAddress.location }}</div>
                    <img class="w-full h-[200px] object-cover" src="~/assets/img/address.jpg" />
                </div>
            </div>
            <div class="text-center py-2 text-[19px]">
                <i
                    class="mdi mdi-map-marker-outline mr-2 text-[19px] sm:text-[24px] md:text-[32px] lg:text-[35px] text-[#6c1319]"></i>
                <span class="title-text2">拍摄地址</span>
            </div>
            <div class="bg-[#6c1319] waterfall">
                <div v-for="item in cameraAddress.options" :key="item.id">
                    <v-img :src="item.camera_image" :alt="item.title" aspect-ratio="16/9">
                        <span class="item-icon mdi mdi-arrow-right-bold-box-outline"></span>
                    </v-img>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useIsMobile } from '~/composables/isMobile.js';

const isMobileDevice = useIsMobile();
const letters = "OPEN CLOSE".split(""); // 字符串拆分为字母数组
const colors = ["red-500", "blue-500", "green-500", "yellow-500", "purple-500", "pink-500", "cyan-500"];
const { data } = await useFetch(`${useRuntimeConfig().public.apiBase}/camera-address/1`);

const cameraAddress = ref(data.value || {});
</script>

<style scoped langs="scss">
.title-text {
    background: linear-gradient(90deg, #4566b2, #493eac);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
}

.title-text2 {
    background: linear-gradient(90deg, #6c1319, #480904fa);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
}

.icon {
    color: #4566b2;
}

/* 容器，固定高度，超出滚动 */
.masonry-container {
    height: 500px;
    overflow-y: auto;
    /* 垂直方向滚动 */
    border: 1px solid #ddd;
    border-top: 3px solid #ddd;
    padding: 8px;

    /* 添加滚动条美化 */
    scrollbar-width: thin;
    /* 对于 Firefox，设置窄滚动条 */
    scrollbar-color: #888 #f1f1f1;
    /* 滚动条和轨道颜色 */
}

/* 针对 WebKit 内核的滚动条样式 */
.masonry-container::-webkit-scrollbar {
    width: 8px;
    /* 滚动条宽度 */
}

.masonry-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* 滚动条轨道背景 */
    border-radius: 4px;
    /* 圆角 */
}

.masonry-container::-webkit-scrollbar-thumb {
    background: #888;
    /* 滚动条颜色 */
    border-radius: 4px;
    /* 圆角 */
}

.masonry-container::-webkit-scrollbar-thumb:hover {
    background: #555;
    /* 滚动条悬停颜色 */
}

/* 瀑布流网格布局 */
.masonry {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 每行 4 列 */
    gap: 16px;
    /* 卡片之间的间距 */
}

.masonry-item {
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.text-overlay {
    position: absolute;
    bottom: 0;
    /* 初始位置设置为视图外的底部 */
    left: 0;
    width: 100%;
    height: auto;
    background: rgba(42, 6, 6, 0.321);
    /* 半透明背景 */
    backdrop-filter: blur(10px);
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    padding: 5px 10px;

    /* 从底部移动到顶部，动画平滑 */
}

.text {
    color: #fff;
    font-size: 16px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    /* 文字阴影 */
}

.masonry-item:hover .text-overlay {
    transform: translateY(0);
    opacity: 1;
    /* 鼠标移入时滑入 */
}

.photo-gallery {
    gap: 5px;
    /* 瀑布流的间距 */
}

.photo-item {
    border-radius: 8px;
    /* 可选：图片圆角 */
    overflow: hidden;
    /* 保持图片在最大高度范围内 */
}

.waterfall {
    column-count: 2;
    column-gap: 16px;
    padding: 16px;
    background-color: #6c1319;


}

.v-img {
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;
    /* 圆角效果 */
    transition: transform 0.3s ease-in-out;
    /* 放大时的过渡效果 */
}

.v-img:hover {
    transform: scale(1.05);
    /* 悬停时稍微放大 */
}

.item-icon {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 24px;
    color: #fff;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.v-img:hover .item-icon {
    opacity: 1;
    visibility: visible;
}

.v-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 保持图片比例并覆盖容器 */
    border-radius: 8px;
    /* 图片的圆角 */
}
</style>