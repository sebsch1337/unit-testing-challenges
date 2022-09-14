import { cubicVolume } from "./calculations.js";

const number = [
  [0, 1, 2, true],
  [-1, 2, 3, false],
  [32, -34, 3, false],
  [45, 43, -2, false],
  [12, 34, 65, true],
];

test.each(number)(
  "returns if all numbers are positive",
  (firstNumber, secondNumber, thirdNumber, isPositive) => {
    const positiveOrNegative =
      cubicVolume(firstNumber, secondNumber, thirdNumber) >= 0;
    expect(isPositive).toBe(positiveOrNegative);
  }
);
