export interface MainState {
  weight: number;
  height: number;
  age: number;
  desiredWeight?: number;

  [key: string]: number | undefined;
}

export interface MainProps {
}

export interface Nutrients {
  protein: number;
  fats: number;
  carbohydrates: number;
}
