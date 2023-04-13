<!--
 * @Author: sunheng
 * @Date: 2023-03-09 14:32:44
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-31 17:29:58
 * @Description: 请填写简介
-->
<template>
    <div class="main">
        <div class="left">
            <div class="carousel">
                <n-carousel autoplay>
                    <template v-for="item in carouselImgList">
                        <img class="carousel-img" :src="GetImgSrc(item, `login`)" />
                    </template>
                </n-carousel>
            </div>
        </div>
        <div class="right">
            <aside>
                <TransitionGroup name="list" tag="ul">
                    <li v-for="item in items" :key="item">
                        {{ item }}
                    </li>
                </TransitionGroup>
            </aside>
            <div class="cardDom">
                <n-card title="登陆" class="card">
                    <div class="logo">
                        <img :src="GetImgSrc('logo', 'login')" />
                    </div>
                    <div style="
                                    font-size: 34px;
                                    width: 100%;
                                    text-align: center;
                                    color: #fdda09;
                                    font-weight: 600;
                                ">
                        SENUV
                    </div>
                    <div class="loginform">
                        <n-form ref="formRef" :model="formValue" size="large">
                            <n-form-item path="user.username">
                                <n-input v-model:value="formValue.user.username" placeholder="请输入用户名">
                                    <template #prefix>
                                        <n-icon :component="PersonOutline" /> </template></n-input>
                            </n-form-item>
                            <n-form-item path="user.password">
                                <n-input v-model:value="formValue.user.password" placeholder="请输入密码" type="password">
                                    <template #prefix>
                                        <n-icon :component="LockClosedOutline" /> </template></n-input>
                            </n-form-item>
                            <n-form-item path="checkboxValue">
                                <n-checkbox v-model:checked="formValue.checkboxValue">
                                    自动登陆
                                </n-checkbox>
                            </n-form-item>
                            <n-form-item>
                                <n-button type="primary" style="width: 400px; color: #fff" round @click="HandleLogin">
                                    登陆
                                </n-button>
                            </n-form-item>
                        </n-form>
                    </div>
                </n-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GetImgSrc } from "@/utils/index";
import { PersonOutline, LockClosedOutline } from "@vicons/ionicons5";


let router = useRouter();
//  轮播图
const carouselImgList = ["one", "two"];

// 表单
let formValue = ref({
    user: {
        username: "admin",
        password: "admin",
    },
    checkboxValue: "",
});
// 登陆按钮
const HandleLogin = () => {
    router.push({
        name: "Project",
    });
};
</script>




<style scoped lang="scss">
.main {
    width: 100%;
    height: calc(100vh - 54px);
    display: flex;
    background: url("../../assets/login-bg.png");
    background-position: 0 -120px;
    background-repeat: no-repeat;

    .left {
        padding: 1px;
        overflow: hidden;
        flex: 1;
        height: 100%;

        .carousel {
            width: 30%;
            min-width: 500px;
            margin: 130px 180px;
        }
    }

    .right {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .cardDom {
            min-width: 500px;
            width: 30%;
            height: 650px;
            box-shadow: 0 0 11px 1px rgba(1, 13, 1, 0.1);

            .card {
                height: 100%;
                background-color: rgba($color: #f0f0f0b3, $alpha: 0.2);

                .logo {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                }

                .loginform {}
            }
        }
    }
}

// 轮播图
.carousel-img {
    margin-top: 150px;
    width: 100%;
    height: 400px;
    object-fit: cover;
}

::v-deep.n-form-item .n-form-item-feedback-wrapper {
    grid-area: inherit;
}
</style>
