import { greet } from "./greeting.js";

const names = [
  ["Stefan", "Coach"],
  ["Felix", "Coach"],
  ["Thomas", "Coach"],
  ["Dalia", "Boss"],
  ["Sebastian", "Sebastian"],
];

test.each(names)("returns the proper greetings", (name, status) => {
  const greetingText = greet(name);
  expect(greetingText).toBe(`Howdy ${status}!`);
});
