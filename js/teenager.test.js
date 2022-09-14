import { checkTeenagerStatus } from "./teenager.js";

const ages = [
  [12, false],
  [13, true],
  [15, true],
  [19, true],
  [20, false],
  [201234, false],
];

test.each(ages)("returns correct teenager status", (age, isTeenager) => {
  const teenagerStatus = checkTeenagerStatus(age);
  expect(teenagerStatus).toBe(isTeenager);
});
