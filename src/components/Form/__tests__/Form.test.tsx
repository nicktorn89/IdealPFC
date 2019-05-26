import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { default as Form } from '../Form';
import { MainState } from 'src/modules/Main/types';

describe('<Form />', () => {
  const valuesMock: MainState = { weight: 0, height: 0, age: 0 };
  const voidFunc = () => { return; };

  const FormComponent = shallow(<Form 
    values={valuesMock} 
    onChangeField={voidFunc}
  />);
  const FormComponentToJson = shallowToJson(FormComponent);

  it('should be equal to snapshot', () => {
    expect(FormComponentToJson).toMatchSnapshot();
  });
});
