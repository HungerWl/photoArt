<template>
    <div class="w-full flex item-centers">
        <div class="main"></div>
        <div class="footer w-full">
            <div class="bubbles">
                <div class="bubble" v-for="i in 120" :key="i" :style="generateBubbleStyle()"></div>
            </div>
            <div class="content ">
                <div>
                    <div>
                        <b>自媒体账号</b>
                        <span
                            class="hover:text-[red] transition duration-300 ease-in-out delay-100ms cursor-pointer">小红书</span>
                        <span
                            class="hover:text-[yellow] transition duration-300 ease-in-out delay-100ms cursor-pointer">微博</span>
                        <span
                            class="hover:text-[#000] transition duration-300 ease-in-out delay-100ms cursor-pointer">抖音</span>
                    </div>
                    <div>
                        <b>地址</b>
                        <span>南京市栖霞区XXXX</span>
                    </div>
                    <div>
                        <b>商务合作</b>
                        <span>18933555555</span>
                    </div>
                    <div>
                        <span>捕捉瞬间的美好、定格幸福的回忆</span>
                    </div>
                </div>
            </div>
        </div>
        <svg style="position: fixed; top: 100vh">
            <defs>
                <filter id="blob">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="blob" />
                </filter>
            </defs>
        </svg>
    </div>
</template>

<script>
export default {
    methods: {
        generateBubbleStyle() {
            const size = 2 + Math.random() * 4;
            const distance = 6 + Math.random() * 4;
            const position = -5 + Math.random() * 110;
            const time = 2 + Math.random() * 2;
            const delay = -1 * (2 + Math.random() * 2);

            return {
                '--size': `${size}rem`,
                '--distance': `${distance}rem`,
                '--position': `${position}%`,
                '--time': `${time}s`,
                '--delay': `${delay}s`,
            };
        },
    },
};
</script>

<style scoped>
body {
    display: grid;
    grid-template-rows: 1fr 10rem auto;
    grid-template-areas: "main" "." "footer";
    overflow-x: hidden;
    background: #f5f7fa;
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
}

.footer {
    z-index: 1;
    --footer-background: #0f7ac0;
    display: grid;
    position: relative;
    grid-area: footer;
    min-height: 12rem;
}

.bubbles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background: var(--footer-background);
    filter: url("#blob");
}

.bubble {
    position: absolute;
    left: var(--position, 50%);
    background: var(--footer-background);
    border-radius: 100%;
    animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
        bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
    transform: translate(-50%, 100%);
}

.content {
    width: 1350px;
    margin: 0 auto;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 4rem;
    padding: 2rem;
    background: var(--footer-background);
}

.content a,
.content p {
    color: #f5f7fa;
    text-decoration: none;
}

.content b {
    color: white;
}

.content p {
    margin: 0;
    font-size: 0.75rem;
}

.content>div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content>div>div {
    margin: 0.25rem 0;
}

.content>div>div>* {
    margin-right: 0.5rem;
}

.image {
    align-self: center;
    width: 4rem;
    height: 4rem;
    margin: 0.25rem 0;
    background-size: cover;
    background-position: center;
}

@keyframes bubble-size {

    0%,
    75% {
        width: var(--size, 4rem);
        height: var(--size, 4rem);
    }

    100% {
        width: 0rem;
        height: 0rem;
    }
}

@keyframes bubble-move {
    0% {
        bottom: -4rem;
    }

    100% {
        bottom: var(--distance, 10rem);
    }
}
</style>