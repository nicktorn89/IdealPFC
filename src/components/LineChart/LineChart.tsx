import React from 'react';
import { Section } from 'react-bulma-components/full';
import { LineChartProps } from './types';
import { LineChart as VendorLineChart, Line, Legend, Tooltip, YAxis, XAxis, CartesianGrid } from 'recharts';

const LineChart: React.FC<LineChartProps> = ({ data }) =>
  <Section>
    <VendorLineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' tickMargin={20} />
      <YAxis unit='ккал' domain={[0, 3000]} tickMargin={20} />
      <Tooltip />
      <Legend margin={{ top: 50 }} />

      <Line type='monotone' dataKey='calories' stroke='#82ca9d' />
    </VendorLineChart>
  </Section>;

export default LineChart;
