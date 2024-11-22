<script setup>
import { ref } from 'vue';
import { useIsMobile } from '~/composables/isMobile.js';
import LottieAnimation from '~/components/LottieAnimation.vue';
import cameraLottie from '~/assets/lottie/camera.json';
const titleBox = ref([
    "门店信息",
    "婚纱照",
    "化妆服务",
    "商务合作",
    "价格清单"
]);

const isMobileDevice = useIsMobile(); // 检测设备类型

// 处理标题点击事件
const handleTitleClick = (title) => {
    switch (title) {
        case "门店信息":
            openModal(ModalDialog, '动态标题');
            break;

        case "婚纱照":

            break;
        case "化妆服务":

            break;
        case "商务合作":

            break;
        case "价格清单":
            break;
    }
};

</script>


<template>
    <div v-if="isMobileDevice !== null" class="header-box">
        <!-- 平板/PC -->
        <template v-if="!isMobileDevice">
            <span v-for="name in titleBox" :key="name" class="header-item" @click="handleTitleClick(name)">
                {{ name }}
            </span>
            <div>
            </div>
        </template>

        <!-- 移动端 -->
        <template v-else>
            <div class="mobile-header">
                <LottieAnimation :animationData="cameraLottie" :loop="true" :autoplay="true" width="40px"
                    height="40px" />
                <h5 class="mobile-title">Photography_Studio</h5>
                <v-menu>
                    <template #activator="{ props }">
                        <i v-bind="props" class="mdi mdi-menu text-[31px]"></i>
                    </template>
                    <v-list>
                        <v-list-item v-for="name in titleBox" :key="name" @click="handleTitleClick(name)">
                            <v-list-item-title>{{ name }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </template>
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

.header-item {
    margin-right: 1.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #2995f9;
    }
}

/* 使用 SCSS 嵌套结构优化样式 */
.mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1.25rem;

    .mobile-title {
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        font-size: 15px;
    }
}
</style>
