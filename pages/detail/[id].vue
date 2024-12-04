<template>
    <div class='detail-box'>
        <div class="flex flex-col max-w-[1200px] mx-auto text-[#0033cc] px-[10px] py-[5px]">
            <span class="text-[20px] md:text-[30px] lg:text-[40px] font-bold">見 川_摄影工作室</span>
            <span
                class="uppercase text-[12px] md:text-[16px] lg:text-[20px] font-bold font-serif tracking-wider">Photography_Studio</span>
        </div>
        <div class="w-full bg-[#0033cc] h-[60px] md:h-[80px] lg:h-[100px] text-[#fff] flex items-center justify-center transition-all duration-300"
            :class="{ 'fixed opacity-0.5 top-0 left-0 z-50 shadow-lg': isSticky }">
            <span
                class="text-[16px] md:text-[23px] lg:text-[35px] font-bold font-serif tracking-wider transition-colors duration-300"
                :class="{ 'text-[red]': isSticky }">
                MarryMe 轻婚纱照
            </span>
        </div>
        <div v-if="isMobileDevice !== null && items.length > 0">
            <!-- 手机端 -->
            <div v-if="isMobileDevice">
                <div class="masonry" :style="{ columnCount: mobileColumnCount }">
                    <div class="masonry-item relative" v-for="item in items" :key="item.id">
                        <NuxtImg class="masonry-item" :src="item.image" densities="x1 x2" fit="cover" loading="lazy">
                        </NuxtImg>
                    </div>
                </div>
            </div>
            <!-- pc，平板 -->
            <div v-else>
                <div class="masonry" :style="{ columnCount: desktopColumnCount }">
                    <div class="masonry-item relative" v-for="item in items" :key="item.id">
                        <NuxtImg class="masonry-item" :src="item.image" densities="x1 x2" fit="cover" loading="lazy">
                        </NuxtImg>
                    </div>
                </div>
            </div>
        </div>
        <empty v-else></empty>
    </div>
</template>
<script setup>
useHead({
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
    ]
})
import { ref, onMounted, onUnmounted } from 'vue';
import { useIsMobile } from '~/composables/isMobile.js';
import empty from '~/components/empty.vue';
import { useRoute } from 'vue-router';

const isMobileDevice = useIsMobile()
const mobileColumnCount = 2; // 手机端列数
const desktopColumnCount = 4; // pc或平板列数

const items = ref([])

const route = useRoute();
const id = route.params.id;
const { data } = await useFetch(`${useRuntimeConfig().public.apiBase}/wedding-services-more-demo/${id}`);
items.value = data.value.demo_images

const isSticky = ref(false)
// 添加滚动监听
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
    const scrollPosition = window.scrollY
    isSticky.value = scrollPosition > 45  // 可以根据需要调整这个值
}
</script>

<style scoped lang="scss">
.detail-box {
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden; // 防止水平滚动
}

.masonry {
    column-gap: 10px;
    padding: 10px;
}

.masonry-item {
    break-inside: avoid;
    margin-bottom: 10px;
}

.masonry-image {
    width: 100%;
    display: block;
    object-fit: cover;
}
</style>