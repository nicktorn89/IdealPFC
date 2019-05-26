export interface LineChartProps {
  data: LineChartData[];
}

export type LineChartData = {
  name: string;
  calories: number;
};
