/*
 * @Author: sunheng
 * @Date: 2023-03-21 13:39:18
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-31 16:34:11
 * @Description: 请填写简介
 */
import { reactive, h } from "vue";
import { RouterLink } from "vue-router";
import { MenuOption, MenuDividerOption, MenuGroupOption } from "naive-ui";
export const GetMenuList = (): Array<
    MenuOption | MenuDividerOption | MenuGroupOption
> => {
    return reactive([
        {
            label: () => h("span", null, { default: () => "项目" }),
            key: "project",
            children: [
                {
                    type: "group",
                    label: () => h("span", null, { default: () => "我的" }),
                    key: "mine",
                    children: [
                        {
                            label: () =>
                                h(
                                    RouterLink,
                                    {
                                        to: {
                                            name: "myproject",
                                        },
                                    },
                                    { default: () => "全部项目" }
                                ),
                            key: "all-project",
                        },
                        {
                            label: () =>
                                h(
                                    RouterLink,
                                    {
                                        to: {
                                            name: "mymodel",
                                        },
                                    },
                                    { default: () => "我的模板" }
                                ),
                            key: "my-Model",
                        },
                    ],
                },
            ],
        },
    ]);
};
