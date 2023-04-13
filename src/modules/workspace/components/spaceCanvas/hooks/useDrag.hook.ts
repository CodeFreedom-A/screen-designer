/*
 * @Author: sunheng
 * @Date: 2023-04-13 10:35:14
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 15:57:09
 * @Description: 拖拽
 */
import { DragKeyEnum, ConfigType, ChartOptionType } from "@/charts/index.d";
import { createComponent } from "@/charts/index";
import { setComponentXY } from "@/utils/index";
import { useChartEditStore } from "@/store/modules/chartEditStore/index";
let { addtComponent } = useChartEditStore();
export const handleDrag = async (e: DragEvent) => {
    const DragDataString = e!.dataTransfer!.getData(DragKeyEnum.CHARTS);
    if (!DragDataString) return;
    const DragData: ConfigType = JSON.parse(DragDataString);
    let Component: ChartOptionType = await createComponent(DragData);
    // 计算出位置
    setComponentXY(
        Component,
        e.offsetX - (DragData.weigetX as number),
        e.offsetY - (DragData.weigetY as number)
    );
    // 将组件放到store里面
    addtComponent(Component);
};
