/*
 * @Author: sunheng
 * @Date: 2023-04-13 10:35:14
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-26 15:14:30
 * @Description: 拖拽
 */
import { ref,computed} from "vue";
import { DragKeyEnum, ConfigType, ChartOptionType } from "@/charts/index.d";
import { createComponent } from "@/charts/index";
import { setComponentXY } from "@/utils/index";
import { useChartEditStore } from "@/store/modules/chartEditStore/index";
let { addtComponent,setComponentId,getComponentActive } = useChartEditStore();
let ActiveId = ref("");
export const getActiveItem=(id:number):boolean=>{
    return getComponentActive(id)
}
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
    // 将当前的组件id存档到store,判断是否是活跃的
    setComponentId(Component.id)
    // 将组件放到store里面
    addtComponent(Component);
};
// 选出当前活跃的
export const hanldeClick = (item: ChartOptionType) => {
    setComponentId(item.id)
};
