import { ChartOptionType } from "@/charts/index.d";
export const setComponentXY = (
    component: ChartOptionType,
    x: number,
    y: number
) => {
    x&&(component.attr.x=x);
    y&&(component.attr.y=y);
};
