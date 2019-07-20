import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { default as Chart } from '../LineChart';
import { anotherMock } from 'src/modules/Main/Main';

describe('<LineChart />', () => {
  const LineChart = shallow(<Chart data={anotherMock} />);
  const LineChartToJson = shallowToJson(LineChart);

  it('should be equal to snapshot', () => {
    expect(LineChartToJson).toMatchSnapshot();
  });
});
