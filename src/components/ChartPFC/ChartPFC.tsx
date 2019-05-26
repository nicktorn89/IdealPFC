import React from 'react';
import { Section } from 'react-bulma-components/full';
import { ChartsProps } from './types';
import { PieChart, Pie, Cell } from 'recharts';
import isEmpty from 'ramda/es/isEmpty';

const ChartPFC: React.FC<ChartsProps> = ({ data, size = 50 }) => {

  if (isEmpty(data)) return null;

  return (
    <Section>
      <PieChart width={330} height={330}>
        <Pie 
          data={data}
          dataKey='value'
          nameKey='name' 
          cx='50%' 
          cy='50%' 
          outerRadius={size}
        >
          {data.map((entry, index) => <Cell key={index} fill={entry.color} />)}
        </Pie>
      </PieChart>
    </Section>
  );
};

export default ChartPFC;
