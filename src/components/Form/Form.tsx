import React, { useState } from 'react';
import { FormProps } from './types';
import { Columns, Section, Form, Button } from 'react-bulma-components/full';

const fields = [
  'height', 'age', 'weight', 'desiredWeight',
];

const labels = [
  'Рост, см', 'Возраст', 'Вес, кг', 'Желаемый вес, кг',
];

const FormComponent: React.FC<FormProps> = ({ values, onChangeField }) => {
  const [isVisible, setVisibility] = useState(false);

  const handleToggle = () => {
    setVisibility(!isVisible);
  };

  const renderFields = fields.map((element, index) => (
    <Columns.Column key={index} >
      <Form.Label>
        {labels[index]}
        <Form.Input 
          name={element}
          value={values[element]}
          onChange={onChangeField}
        />
      </Form.Label>
    </Columns.Column>
  ));

  return (
    <Section>
      <Button onClick={handleToggle}>
        {isVisible ? 'Скрыть данные' : 'Ввести данные'}
      </Button>
      <Columns>
        {isVisible && renderFields}
      </Columns>
    </Section>
  );
};

export default FormComponent;
