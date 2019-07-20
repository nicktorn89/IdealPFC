export interface ChartsProps {
  data: PieChartData[];
  size?: number;
}

export type PieChartData = {
  name: string;
  value: number;
  color: string;
};
