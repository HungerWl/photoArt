<template>
    <div class='wedding-box'>
        <div class="common">
            <i class="bi bi-bag-heart"></i>
            <div class="common-name">婚礼服务</div>
        </div>
        <div class="main">
            <div class="container">
                <nav class="sidebar">
                    <ul>
                        <li>服务项目</li>
                        <li>案例展示</li>
                        <li>联系我们</li>
                    </ul>
                </nav>
                <main class="content">
                    <p>欢迎来到我们的婚礼服务页面！</p>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.wedding-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    background: red;
}

.common {
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

    .common-name {
        font-size: 25px;
        margin-left: 10px;
    }
}

.main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    .container {
        display: flex;
    }

    .sidebar {
        width: 20%;
        background-color: #e0e0e0;
        padding: 20px;
    }

    .content {
        flex: 1;
        padding: 20px;
    }
}
</style>