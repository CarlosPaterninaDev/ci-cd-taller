const { division } = require("./src");

it("should be 2", () => {
  expect(division(4, 2)).toBe(2);
});

it("should be error", () => {
  expect(division(4, 0)).toBe("Division by zero");
});
