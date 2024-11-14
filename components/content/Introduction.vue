<template>
  <div v-if="isMobileDevice !== null" class="introduction w-full my-2 flex align-center justify-center shadow-2xl">
    <video ref="videoPlayer" :class="isMobileDevice ? 'mobile-video' : 'desktop-video'" class="w-full object-cover"
      poster="~/assets/img/intro.jpg" src="~/assets/videos/1.mp4" @click="togglePlay">
      Your browser does not support the video tag.
    </video>
  </div>

</template>

<script lang="js" setup>
import { ref } from 'vue';
import { useIsMobile } from "~/composables/isMobile.js";

const isMobileDevice = useIsMobile();

const videoPlayer = ref(null);
const isPlaying = ref(false);
const togglePlay = () => {
  if (isPlaying.value) {
    videoPlayer.value.pause();
  } else {
    videoPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>

<style lang="scss" scoped>
video {
  cursor: pointer;
}

.mobile-video {
  height: calc(30vh - 20px);
}

.desktop-video {
  height: 600px;
}
</style>
