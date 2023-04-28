<!--
 * @Author: sunheng
 * @Date: 2023-04-27 17:24:23
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-28 16:39:24
 * @Description: 请填写简介
-->
<template>
    <div class="pageconfig">
        <n-form
            ref="formRef"
            inline
            :label-width="40"
            :model="PageCongfig"
            label-placement="left"
        >
            <n-form-item label="宽" path="PageCongfig.width" style="width: 40%">
                <n-input-number
                    v-model:value="PageCongfig.width"
                    placeholder="输入宽"
                    size="small"
                />
            </n-form-item>
            <n-form-item
                label="高"
                path="PageCongfig.height"
                style="width: 40%"
            >
                <n-input-number
                    v-model:value="PageCongfig.height"
                    placeholder="输入高"
                    size="small"
                />
            </n-form-item>
            <n-form-item>
                <n-upload
                    v-model:file-list="uploadFileListRef"
                    :show-file-list="false"
                    :customRequest="customRequest"
                    multiple
                    directory-dnd
                    :max="1"
                >
                    <n-upload-dragger>
                        <div v-if="uploadFileListRef.length == 0">
                            <div style="margin-bottom: 12px">
                                <n-icon size="48" :depth="3">
                                    <archive-icon />
                                </n-icon>
                            </div>
                            <n-text style="font-size: 16px">
                                点击或者拖动文件到该区域来上传
                            </n-text>
                            <n-p depth="3" style="margin: 8px 0 0 0">
                                请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
                            </n-p>
                        </div>
                        <div v-else class="card-bg">
                            <n-image :src="ImageUrl" />
                        </div>
                    </n-upload-dragger>
                </n-upload>
            </n-form-item>
            <n-form-item
                label="背景颜色"
                path="PageCongfig.color"
                label-width="100"
                style="width: 100%"
            >
                <n-color-picker v-model:value="PageCongfig.color" />
            </n-form-item>
            <n-form-item
                label="应用类型"
                path="PageCongfig.backType"
                label-width="100"
                style="width: 100%"
            >
                <n-space vertical  style="width: 93%;"  >
                    <n-select
                        v-model:value="PageCongfig.backType"
                        :options="BackOptions"
                    />
                </n-space>
            </n-form-item>
        </n-form>
    </div>
</template>
<script lang="ts" setup>
import { ref, nextTick, computed } from "vue";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { usePageCongfigStore } from "@/store/modules/PageConfigStore";
import { UploadCustomRequestOptions } from "naive-ui";
import { fileToUrl } from "@/utils";
let PageCongfigStore = usePageCongfigStore();
let PageCongfig = PageCongfigStore.getPageConfiog;
// const changeSizeHandle=(key:string)=>{
//     PageCongfigStore.setPageConfig(key)
// }
let uploadFileListRef = ref([]);
let ImageUrl = ref("");
const BackOptions = ref([
    {
        label: "应用背景",
        value: 0,
        disabled: true,
    },
    {
        label: "应用颜色",
        value: 1,
    },
]);
const customRequest = (options: UploadCustomRequestOptions) => {
    let { file } = options;
    nextTick().then(() => {
        if (file.file) {
            ImageUrl.value = fileToUrl(file.file);
            PageCongfigStore.setPageConfig("imgurl", ImageUrl.value);
            PageCongfigStore.setPageConfig("backType",0)
            BackOptions.value[0].disabled = false;
        }
    });
};
</script>
<style lang="scss" scoped>
.pageconfig {
    :deep(.n-form) {
        flex-wrap: wrap;
    }
}
.card-bg {
    width: 100%;
    height: 100%;
    :deep(.n-image) {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
