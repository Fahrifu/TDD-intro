import romanNumeralConverter from './romanNumeral.mjs';

function runTests() {
    const tests = [
        { input: 1, expected: "I" },
        { input: 4, expected: "IV" },
        { input: 9, expected: "IX" },
        { input: 40, expected: "XL" },
        { input: 90, expected: "XC" },
        { input: 400, expected: "CD" },
        { input: 900, expected: "CM" },
        { input: 1000, expected: "M" },
    ];

    for (const { input, expected } of tests) {
        const result = romanNumeralConverter(input);
        console.log(
            `Input: ${input}, Expected: ${expected}, Result: ${result}, Pass: ${result === expected}`
        );
    }
}

runTests();
