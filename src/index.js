const capitalize = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.split("").reverse().join("");
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
};

const caesarCipher = (str, shift) => {
  return str
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code < 90 ? 65 : 97;
        return String.fromCharCode(
          ((((code - base + shift) % 26) + 26) % 26) + base
        );
      }
      return char;
    })
    .join("");
};

const analyzeArray = (arr) => {
  if (!arr.every((item) => typeof item === "number")) {
    return { error: "All items in the array must be numbers" };
  }
  if (arr.length === 0) {
    return null;
  }
  const average = arr.reduce((sum, item) => sum + item, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    average,
    min,
    max,
    length: arr.length,
  };
};
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
