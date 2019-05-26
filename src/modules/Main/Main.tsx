import React from 'react';
import { MainState, MainProps } from './types';
import FormComponent from '../../components/Form';
import HeaderComponent from 'src/components/Header';
import ChartPFC from 'src/components/ChartPFC';
import { ChartData } from 'src/components/ChartPFC/types';

const dataMock: ChartData[] = [
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

export class Main extends React.Component<MainProps, MainState> {
  public readonly state = {
    weight: 0,
    height: 0,
    age: 0,
  };

  public handleFieldChange = ({ target }: React.MouseEvent<HTMLInputElement>) => {
    const { name, value } = target as HTMLInputElement;

    if (isNaN(+value)) return;

    this.setState({ [name]: +value });
  }

  public render = () => {
    return (
      <React.Fragment>
        <HeaderComponent />
        <FormComponent
          values={this.state}
          onChangeField={this.handleFieldChange}
        />
        <ChartPFC data={dataMock} />
      </React.Fragment>
    );
  }
}

export default Main;
