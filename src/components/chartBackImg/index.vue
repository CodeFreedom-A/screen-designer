<!--
 * @Author: sunheng
 * @Date: 2023-04-13 16:33:01
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 17:04:41
 * @Description: 请填写简介
-->
<template>
    <div style="width: 100%; height: 100%;">
        <n-image lazy :src="imgSrc" style="width: 100%; height: 100%;" />
    </div>
</template>
<script lang="ts" setup>
import { fetchImages } from "@/charts/index"
import { ConfigType } from "@/charts/index.d"
import { ref, watch, PropType } from "vue";
let props = defineProps({
    option: {
        type: Object as PropType<ConfigType>,
        require: true
    }
})
let imgSrc = ref('')

const getImgScr = async()=>{
    imgSrc.value= await fetchImages(props.option)
}
watch(() => (props.option),(val) => {
    if (val) {
        getImgScr()
    }

}, {
    immediate: true,
    deep: false
})
</script>
