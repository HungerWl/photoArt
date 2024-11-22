import { reactive } from 'vue';

export function useAlert() {
    // 定义响应式状态
    const alert = reactive({
        visible: false,
        title: '',
        message: '',
        type: 'info',  // 默认信息提示
        icon: ''
    });

    // 控制alert弹出
    const showAlert = (title, message, type = 'info', icon) => {
        alert.title = title;
        alert.message = message;
        alert.type = type;
        alert.icon = icon
        alert.visible = true;
    };

    // 关闭alert
    const closeAlert = () => {
        alert.visible = false;
    };

    return {
        alert,
        showAlert,
        closeAlert,
    };
}
