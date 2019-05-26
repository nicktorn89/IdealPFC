import React from 'react';
import { Navbar } from 'react-bulma-components/full';
import { HeaderProps } from './types';

const HeaderComponent: React.FC<HeaderProps> = ({}) => {

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item>IdealPFC</Navbar.Item>
      </Navbar.Brand>

      <Navbar.Container position='end'>
        <Navbar.Item>Toggle in night mode</Navbar.Item>
      </Navbar.Container>
    </Navbar>
  );
};

export default HeaderComponent;
