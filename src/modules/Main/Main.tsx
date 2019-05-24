import React, { ChangeEvent, MouseEvent as ReactMouseEvent } from 'react';
import { MainState, MainProps } from './types';

export class Main extends React.Component<MainProps, MainState> {
  public render = () => {
    return <span>Hello</span>;
  }
}

export default Main;
