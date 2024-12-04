<script setup>
import LottieAnimation from '~/components/LottieAnimation.vue';
import emptyLottie from '~/assets/lottie/woman.json';
</script>

<template>
    <div class="empty">
        <LottieAnimation :animationData="emptyLottie" :loop="true" :autoplay="true" width="100%" height="100%" />
    </div>
</template>
<style scoped>
.empty {
    position: absolute;
    /* 使用绝对定位将空状态放置在容器中心 */
    top: 50%;
    /* 垂直居中 */
    left: 50%;
    /* 水平居中 */
    transform: translate(-50%, -50%);
    /* 通过transform微调，使空状态完全居中 */
    text-align: center;
}
</style>