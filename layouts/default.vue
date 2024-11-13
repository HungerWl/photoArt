<template>
  <div>
    <!-- 加载动画，加载完成后隐藏 -->
    <!--    <div v-show="isLoading" class="loading-screen">-->
    <!--      <div class="spinner"></div>-->
    <!--    </div>-->

    <Header/>    <!-- 引入头部组件 -->
    <div class="wl-container">
      <main>
        <slot/>   <!-- 渲染页面内容 -->
      </main>
    </div>
    <Footer/>    <!-- 引入底部组件 -->
  </div>
</template>

<script setup>
// import {onMounted, ref} from 'vue'
// 引入头部和底部组件
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'

// const isLoading = ref(true)
// onMounted(() => {
//   setTimeout(() => {
//     isLoading.value = false
//   }, 500) // 加载动画持续时间，可根据需求调整
// })
</script>

<style scoped>
/* 确保页面布局根据视口宽度缩放 */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
