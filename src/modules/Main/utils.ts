import { Nutrients } from './types';

export const roundToDecimal = (value: number) => Math.round(value * 10) / 10;

export const countNutrients = (height: number, weight: number, hasSportLoad?: boolean): Nutrients => 
  ({
    protein: roundToDecimal(weight * (hasSportLoad ? 2.5 : 1.5)),
    fats: roundToDecimal(weight * (hasSportLoad ? 1.5 : 0.8)),
    carbohydrates: roundToDecimal(weight * (hasSportLoad ? 4 : 2)),
  });
