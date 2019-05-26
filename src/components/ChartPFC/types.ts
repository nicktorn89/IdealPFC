export interface ChartsProps {
  data: ChartData[];
  size?: number;
}

export type ChartData = {
  name: string;
  value: number;
  color: string;
};
