<template>
  <div id="welcome">
    <Logo></Logo>
    <!-- 介绍 -->
    <Introduction></Introduction>
    <!-- 主营业务 -->
    <WeddingServices></WeddingServices>
    <!--    服务流程-->
    <ServiceProcess></ServiceProcess>
  </div>
</template>

<script setup>
import Logo from "~/components/content/Logo.vue";
import Introduction from "~/components/content/Introduction.vue";
import WeddingServices from "~/components/content/WeddingService.vue";
import ServiceProcess from "~/components/content/ServiceProcess.vue";
</script>

<style lang="scss" scoped>
.title-box {
  font-family: "Arial", sans-serif;
  font-weight: bold;
}
</style>
