// ~/composables/useAnimateOnScroll.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useAnimateOnScroll(animationClass = 'fade-in') {
  const isVisible = ref(false);

  const observeElement = (element) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          element.classList.add(animationClass);
          observer.unobserve(element); // 触发一次后停止观察
        }
      });
    });
    observer.observe(element);
  };

  return { isVisible, observeElement };
}
