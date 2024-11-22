<template>
  <!-- 首页 -->
  <div id="home" class="w-full h-full">
    <Header />
    <Logo />
    <Introduction />
    <WeddingService />
    <ServiceProcess />
    <Address />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "~/layouts/Header.vue";
import Logo from "~/components/content/Logo.vue";
import Introduction from "~/components/content/Introduction.vue";
import WeddingService from "~/components/content/WeddingService.vue";
import ServiceProcess from "~/components/content/ServiceProcess.vue";
import Address from "~/components/content/Address.vue";
import Footer from "~/layouts/Footer.vue";

onMounted(() => { });
</script>

<style scoped></style>