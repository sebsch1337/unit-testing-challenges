import { cubicVolume } from "./calculations.js";

const number = [
  [0, 1, 2, 0],
  [-1, 2, 3, 0],
  [32, -34, 3, 0],
  [45, 43, -2, 0],
  [2, 3, 4, 24],
];

test.each(number)(
  "returns if all numbers are positive",
  (firstNumber, secondNumber, thirdNumber, isPositive) => {
    const positiveOrNegative =
      cubicVolume(firstNumber, secondNumber, thirdNumber) >= 0;
    expect(isPositive).toBe(positiveOrNegative);
  }
);
