// utils/isMobile.js

import { ref, onMounted, onUnmounted } from 'vue';

export function useIsMobile() {
    const isMobileDevice = ref(false);

    function updateIsMobileDevice() {
        isMobileDevice.value = window.matchMedia("(max-width: 767px)").matches;
    }

    onMounted(() => {
        updateIsMobileDevice(); // 初始检查一次
        window.addEventListener("resize", updateIsMobileDevice); // 监听窗口变化
    });

    onUnmounted(() => {
        window.removeEventListener("resize", updateIsMobileDevice); // 清除监听器
    });

    return isMobileDevice;
}
