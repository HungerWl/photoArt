<template>
    <div id="banner-width" class="logo-box">
        <div></div>
        <div class="title">
            <span>photography Studio</span>
            <div class="title-text w-full pl-[20px]">你的拍摄灵感，从这里开始 !</div>
        </div>
        <div class="title-icon">
            <i class="bi bi-wechat"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-sina-weibo"></i>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


onMounted(() => {
});
</script>

<style scoped lang="scss">
.logo-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #0f7ac0;
        /* 调整蓝色值 */
        font-size: 48px;
        font-weight: 800;
        text-transform: uppercase;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #57a2d3 // 鼠标悬停时改变文字颜色
        }

        .title-text {
            font-size: 16px;
            text-align: left;
            color: #5c5c5c
        }
    }

    .title-icon {
        font-size: 24px;

        >i {
            margin-right: 20px;
            cursor: pointer;
            // 鼠标悬停时显示手型
            transition: color 0.3s ease-in-out;
            // 添加过渡效果

            &:hover {
                color: #2995f9;
                // 鼠标悬停时改变文字颜色
                cursor: pointer;
            }
        }
    }
}
</style>