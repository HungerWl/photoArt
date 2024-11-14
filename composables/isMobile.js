import { onMounted, onUnmounted, ref } from 'vue';

export function useIsMobile() {
    const isMobileDevice = ref(null);

    let resizeObserver;

    function updateIsMobileDevice() {
        isMobileDevice.value = document.body.clientWidth <= 767;
    }

    onMounted(() => {
        resizeObserver = new ResizeObserver(updateIsMobileDevice);
        resizeObserver.observe(document.body); // 观察 body 尺寸变化
        updateIsMobileDevice(); // 初始检查
    });

    onUnmounted(() => {
        resizeObserver.disconnect(); // 取消观察
    });

    return isMobileDevice;
}
