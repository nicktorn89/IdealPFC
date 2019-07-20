import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Main } from '../Main';
import { MainState } from '../types';

describe('<Main />', () => {
  const MainComponent = shallow(<Main />);
  const MainComponentToJson = shallowToJson(MainComponent);
  
  it('renders Main component', () => {
    expect(MainComponent).toExist();
  });

  it('should have 0 as default value in state', () => {
    const { weight, height, age } = MainComponent.state() as MainState;
    
    expect(weight).toBe(0);
    expect(height).toBe(0);
    expect(age).toBe(0);
  });

  it('desiredWeight should be undefined by default', () => {
    expect(MainComponent.state('desiredWeight')).toBeUndefined();
  });

  it('should be equal to snapshot', () => {
    expect(MainComponentToJson).toMatchSnapshot();
  });
});
