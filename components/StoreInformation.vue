<template>
    <div class='storeInformation-box'>
        <div class="store">
            <i class="bi bi-globe-asia-australia"></i>
            <div class="store-name">门店信息</div>
        </div>
        <!-- 地图 -->
    </div>
</template>

<script setup>
onMounted(() => {
    // 创建地图实例
    const map = new AMap.Map('container', {
        zoom: 11, // 初始缩放级别
        center: [116.397428, 39.90923] // 初始中心点坐标
    });
    console.log(map, 111);

})
</script>

<style scoped lang="scss">
.storeInformation-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 30px;
}

.store {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    transition: color 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        color: rgb(255, 0, 0) // 鼠标悬停时改变文字颜色
    }

    .store-name {
        font-size: 25px;
        margin-left: 10px;
    }
}
</style>