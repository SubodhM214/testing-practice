import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "../src/index";

describe("capitalize", () => {
  test("capitalizes the first character of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("returns the same string if the first character is already capitalized", () => {
    expect(capitalize("World")).toBe("World");
  });

  test("handles empty strings gracefully", () => {
    expect(capitalize("")).toBe("");
  });

  test("throws an error if input is not a string", () => {
    expect(() => capitalize(123)).toThrow("Input must be a string");
  });
});

describe("reverseString", () => {
  test("reverse a normal string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverse if string contains sapce", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("reverse if string is empty", () => {
    expect(reverseString("")).toBe("");
  });

  test("throws an error if input is not a string", () => {
    expect(() => reverseString(123)).toThrow("Input must be a string");
  });
});

describe("calculator", () => {
  test("add two numbers", () => {
    expect(calculator.add(8, 9)).toBe(17);
  });

  test("subtract two numbers", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
  });

  test("multiply two numbers", () => {
    expect(calculator.multiply(5, 0)).toBe(0);
  });

  test("divide two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("throws error for division by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
  });
});

describe("caesarCipher", () => {
  test("shifts letters correctly", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves case of letters", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("aBcD", 5)).toBe("fGhI");
  });

  test("does not shift non-alphabetic characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("Hi there!", 2)).toBe("Jk vjgtg!");
  });

  test("wraps correctly with large shift values", () => {
    expect(caesarCipher("abc", 29)).toBe("def"); // 29 is effectively a shift of 3
    expect(caesarCipher("abc", -1)).toBe("zab"); // Negative shift
  });

  test("handles empty string", () => {
    expect(caesarCipher("", 3)).toBe("");
  });
});

describe("analyzeArray", () => {
  test("calculates average of an array", () => {
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result.average).toBe(3);
    expect(result.min).toBe(1);
    expect(result.max).toBe(5);
    expect(result.length).toBe(5);
  });

  test("handle an empty array", () => {
    const result = analyzeArray([]);
    expect(result).toBeNull(); // Or whatever behavior you prefer
  });

  test("handle negative numbers", () => {
    const result = analyzeArray([-1, -2, -3, -4, -5]);
    expect(result.average).toBe(-3);
    expect(result.min).toBe(-5);
    expect(result.max).toBe(-1);
    expect(result.length).toBe(5);
  });

  test("returns error for an array with non-number elements", () => {
    const result = analyzeArray([1, 2, "3", 4]);
    expect(result).toEqual({ error: "All items in the array must be numbers" });
  });
});
