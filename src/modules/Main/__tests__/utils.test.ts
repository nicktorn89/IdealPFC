import { countNutrients } from '../utils';

describe('Person that has sport load, weight = 75kg, height = 180cm', () => {
  it('Should return 187.5g of protein', () => {
    expect(countNutrients(180, 75, true).protein).toBe(187.5);
  });

  it('Should return 112.5g of fats', () => {
    expect(countNutrients(180, 75, true).fats).toBe(112.5);
  });

  it('Should return 300g of carbohydrates', () => {
    expect(countNutrients(180, 75, true).carbohydrates).toBe(300);
  });
});

describe(`Person that hasn't sport load, weight = 106kg, height = 140cm`, () => {
  it('Should return 159g of protein', () => {
    expect(countNutrients(140, 106, false).protein).toBe(159);
  });

  it('Should return 84.8g of fats', () => {
    expect(countNutrients(140, 106, false).fats).toBe(84.8);
  });

  it('Should return 212g of carbohydrates', () => {
    expect(countNutrients(140, 106, false).carbohydrates).toBe(212);
  });
});
