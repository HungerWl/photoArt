<!-- pages/error.vue -->
<template>
    <div class="error-page">
        <div class="error-container">
            <h1>500 - 服务器内部错误</h1>
            <p>抱歉，服务器遇到了一些问题。请关闭稍后再试。</p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    color: #333;
}

.error-container {
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    color: #666;
}
</style>