import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { default as Chart } from '../ChartPFC';
import { dataMock } from 'src/modules/Main/Main';

describe('<ChartPFC />', () => {
  const ChartPFC = shallow(<Chart data={dataMock} />);
  const ChartPFCToJson = shallowToJson(ChartPFC);

  it('should be equal to snapshot', () => {
    expect(ChartPFCToJson).toMatchSnapshot();
  });
});
