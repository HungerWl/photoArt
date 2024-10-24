<template>
  <div>
    <Header />    <!-- 引入头部组件 -->
    <div class="container">
      <main>
        <slot />   <!-- 渲染页面内容 -->
      </main>
    </div>
    <Footer />    <!-- 引入底部组件 -->
  </div>
</template>

<script setup>
// 引入头部和底部组件
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<style scoped>
/* 确保页面布局根据视口宽度缩放 */
</style>
