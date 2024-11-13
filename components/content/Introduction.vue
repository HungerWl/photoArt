<template>
  <div class="introduction w-full h-[600px] relative overflow-hidden my-[10px]">
    <video
        ref="videoPlayer"
        class="w-full h-full absolute inset-0 object-cover"
        poster="~/assets/img/intro.jpg"
        src="~/assets/videos/1.mp4"
        width="100%"
        @click="togglePlay"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script lang="js" setup>
import {ref} from 'vue';

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
.introduction {
  @apply h-[200px] md:h-[450px] lg:h-[800px];
}

video {
  cursor: pointer;
}
</style>
