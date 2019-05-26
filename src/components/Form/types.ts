import { MainState } from 'src/modules/Main/types';

export interface FormProps {
  values: MainState;
  onChangeField: (e: React.MouseEvent<HTMLInputElement>) => void;
}
