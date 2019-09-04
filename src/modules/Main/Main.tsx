import React, { useState } from 'react';
import { MainState, MainProps } from './types';
import FormComponent from '../../components/Form';
import HeaderComponent from 'src/components/Header';
import PieChart from 'src/components/PieChart';
import { PieChartData } from 'src/components/PieChart/types';
import LineChart from 'src/components/LineChart';
import { LineChartData } from 'src/components/LineChart/types';

export const dataMock: PieChartData[] = [
  {
    name: 'Белки',
    value: 200,
    color: '#FFFF4C',
  },
  {
    name: 'Жиры',
    value: 150,
    color: '#FF4C4C',
  },
  {
    name: 'Углеводы',
    value: 650,
    color: '#4C4CFF',
  },
];

export const anotherMock: LineChartData[] = [
  {
    name: '1 неделя',
    calories: 2500,
  },
  {
    name: '2 неделя',
    calories: 2300,
  },
  {
    name: '3 неделя',
    calories: 2100,
  },
  {
    name: '4 неделя',
    calories: 1900,
  },
  {
    name: '5 неделя',
    calories: 1700,
  },
];

export const Main: React.FC<MainProps> = () => {
  const [bodyParameters, setBodyParameters] = useState({
    weight: 0,
    height: 0,
    age: 0,
  });

  const handleFieldChange = ({ target }: React.MouseEvent<HTMLInputElement>) => {
    const { name, value } = target as HTMLInputElement;
    const newBodyParameters = { ...bodyParameters };

    if (isNaN(+value)) return;

    (newBodyParameters as {[key: string]: number})[name] = Number(value);
    setBodyParameters(newBodyParameters);
  };

  return (
    <React.Fragment>
      <HeaderComponent />
      <FormComponent
        values={bodyParameters}
        onChangeField={handleFieldChange}
      />
      <PieChart data={dataMock} />
      <LineChart data={anotherMock} />
    </React.Fragment>
  );
};

export default Main;
