<template>
    <div class="wrapper">
        <SketchRule
            :thick="state.thick"
            :scale="state.scale"
            :width="divWidth"
            :height="divHeight"
            :start-x="state.startX"
            :start-y="state.startY"
            :isShowReferLine="state.isShowReferLine"
            @onCornerClick="handleCornerClick"
        >
        </SketchRule>
        <div
            id="screens"
            ref="screensRef"
            @wheel="handleWheel"
            @scroll="handleScroll"
        >
            <div ref="containerRef" class="screen-container">
                <n-card
                    embedded="true"
                    hoverable
                    id="canvas"
                    :style="canvasStyle"
                    class="cardbg"
                    @contextmenu="onContextMenu($event, proxy)"
                >
                    <template #cover>
                        <img
                            :src="PageCongfigStore.getPageConfiog.imgurl"
                        />
                    </template>
                    <slot></slot>
                </n-card>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    computed,
    ref,
    reactive,
    onMounted,
    nextTick,
    ComponentInternalInstance,
} from "vue";
import { usePageCongfigStore } from "@/store/modules/PageConfigStore";
import { onContextMenu, getProxy } from "../../hooks/contentMenu.hook";
let PageCongfigStore = usePageCongfigStore();
import "@/assets/iconfont/iconfont.js";
let proxy: Object | null = getProxy();

const screensRef = ref(null);
const containerRef = ref(null);
let divHeight = ref(0);
let divWidth = ref(0);
const state = reactive({
    scale: 0.5, //658813476562495, //1,
    startX: 0,
    startY: 9,
    thick: 20,
    isShowRuler: true, // 显示标尺
    isShowReferLine: false, // 显示参考线
});

const canvasStyle = computed(() => {
    return {
        width: PageCongfigStore.getPageConfiog.width + "px",
        height: PageCongfigStore.getPageConfiog.height + "px",
        transform: `scale(${state.scale})`,
    };
});

// console.log(getCurrentInstance(),'getCurrentInstance(12132)');
onMounted(() => {
    // 滚动居中
    screensRef!.value!.scrollLeft =
        containerRef!.value!.getBoundingClientRect().width / 2 - 2400;

    nextTick().then(() => {
        divWidth.value = document.querySelector(".wrapper").offsetWidth - 20;
        divHeight.value = document.querySelector(".wrapper").offsetHeight - 20;
    });
});
const handleScroll = () => {
    const screensRect = document
        .querySelector("#screens")
        .getBoundingClientRect();
    const canvasRect = document
        .querySelector("#canvas")
        .getBoundingClientRect();
    // 标尺开始的刻度
    const startX =
        (screensRect.left + state.thick - canvasRect.left) / state.scale;
    const startY =
        (screensRect.top + state.thick - canvasRect.top) / state.scale;
    state.startX = startX;
    state.startY = startY;
};
const handleCornerClick = (e) => {
    console.log("handleCornerClick", e);
};
// 控制缩放值
const handleWheel = (e: {
    ctrlKey: any;
    metaKey: any;
    preventDefault: () => void;
    deltaY: number;
}) => {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const nextScale = parseFloat(
            Math.max(0.2, state.scale - e.deltaY / 500).toFixed(2)
        );
        state.scale = nextScale;
    }
    nextTick(() => {
        handleScroll();
    });
};
const showLineClick = () => {
    state.isShowReferLine = !state.isShowReferLine;
};
//
</script>
<style lang="scss" scoped>
body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: sans-serif;
}
body * {
    box-sizing: border-box;
    user-select: none;
}
.wrapper {
    position: relative;
    /* 特别注意,这个width要和传入组件的width成对应关系,
   也就是 780width +thick20 =800
   否则影子不和容器搭配,这个在2X中会进行自动匹配修正,省得配置麻烦
    */
    overflow: auto;
    user-select: none;
    width: 100%;
    height: 100%;
}
#screens {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    // @include bg("background-color");
    @include bgpoint("background-point");
    background-size: 16px 16px, 16px 16px;
}

.screen-container {
    position: absolute;
    width: 5000px;
    height: 3000px;
}
.scale-value {
    position: absolute;
    bottom: 100%;
    left: 0;
}
.button {
    position: absolute;
    bottom: 100%;
    left: 100px;
}
#canvas {
    // width: 1920px;
    // height: 1080px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 10px #00000012;
    @include bgcard("card-background");
}
// :deep(.n-card){
//  background: red;

// }
</style>
