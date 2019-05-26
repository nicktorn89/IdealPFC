import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { default as Header } from '../Header';

describe('<Header />', () => {
  const HeaderComponent = shallow(<Header />);
  const HeaderComponentToJson = shallowToJson(HeaderComponent);

  it('should be equal to snapshot', () => {
    expect(HeaderComponentToJson).toMatchSnapshot();
  });
});
