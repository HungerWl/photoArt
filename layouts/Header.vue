<script setup>
import { ref } from 'vue';
import { useIsMobile } from '~/composables/isMobile.js';
import LottieAnimation from '~/components/LottieAnimation.vue';
import cameraLottie from '~/assets/lottie/camera.json';

const titleBox = ref([
    { name: "门店信息" },
    { name: "婚纱照" },
    { name: "化妆服务" },
    { name: "商务合作" },
    { name: "价格清单" },
]);

const isMobileDevice = useIsMobile(); // 使用工具函数

const menuVisible = ref(false); // 控制菜单显示

// 处理标题点击事件
const handleTitleClick = (title) => {
    console.log('点击了标题:', title);
    menuVisible.value = false; // 点击后关闭菜单
};
</script>
<template>
    <div class="header-box" v-if="isMobileDevice !== null">
        <!-- 平板，PC -->
        <div v-show="!isMobileDevice">
            <!-- 平板，PC 显示 -->
            <span v-for="i in titleBox" :key="i.name"
                class="mr-5 sm:mr-4 md:mr-8 lg:mr-10 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#2995f9] relative">
                {{ i.name }}
            </span>
        </div>
        <!-- 移动端 -->
        <div v-show="isMobileDevice" class="w-full flex items-center justify-between px-5">
            <LottieAnimation :animationData="cameraLottie" :loop="true" :autoplay="true" width="40px" height="40px" />
            <h5 class="offcanvas-title font-serif uppercase tracking-widest text-[15px]" id="offcanvasRightLabel">
                Photography_Studio
            </h5>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <i v-bind="props" class="mdi mdi-menu text-[31px]"></i>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in titleBox" :key="index" :value="item.name">
                        <v-list-item-title @click="handleTitleClick">{{ item.name }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>



<style scoped lang="scss">
.header-box {
    width: 100%;
    height: 60px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>