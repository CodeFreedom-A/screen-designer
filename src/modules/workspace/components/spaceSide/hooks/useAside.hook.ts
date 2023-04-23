/*
 * @Author: sunheng
 * @Date: 2023-04-11 10:18:02
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-23 14:48:54
 * @Description: 请填写简介
 */
import { ref } from "vue";
import type { MenuOption } from "naive-ui";
import { PackagesCategoryEnum } from "@/charts/index.d";
import { useAsideStore } from "@/store/modules/AsideStore/AsideStore";

const menuOptions: MenuOption[] = [];
// 返回的是图标数据
const { getPackagesList } = useAsideStore();

// 给格式化lable和icon,暂时先不弄icon,后期找到在家
const packagesListInfo = {
    [PackagesCategoryEnum.CHARTS]: {
        label: "图表",
    },
    [PackagesCategoryEnum.INFORMATIONS]: {
        label: "信息",
    },
    [PackagesCategoryEnum.TABLES]: {
        label: "列表",
    },
    [PackagesCategoryEnum.DECORATES]: {
        label: "组件",
    },
};

// 提取信息,加入到menu里,这里的是一个
const handleFormat = () => {
    for (const key in getPackagesList) {
        menuOptions.push({
            key,
            // @ts-ignore
            label: packagesListInfo[key].label,
            // @ts-ignore
            list: getPackagesList[key],
        });
    }
};
handleFormat();
// default-value
const DefauletValue = ref(menuOptions[0].key);

const DefauletObject = ref(menuOptions[0]);

const clickItemHandle = (key: string, item: any) => {
    DefauletValue.value = key;
};

export { menuOptions, DefauletValue, DefauletObject, clickItemHandle };
