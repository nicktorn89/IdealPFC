import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { default as Chart } from '../PieChart';
import { dataMock } from 'src/modules/Main/Main';

describe('<PieChart />', () => {
  const PieChart = shallow(<Chart data={dataMock} />);
  const PieChartToJson = shallowToJson(PieChart);

  it('should be equal to snapshot', () => {
    expect(PieChartToJson).toMatchSnapshot();
  });
});
