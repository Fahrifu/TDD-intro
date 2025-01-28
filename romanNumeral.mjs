function romanNumeralConverter(nInt) {
    if (nInt < 1 || nInt > 1000) throw new Error("Input must be between 1 and 1000");

    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];

    let output = "";
    for (const { value, numeral } of romanNumerals) {
        while (nInt >= value) {
            output += numeral;
            nInt -= value;
        }
    }

    return output;
}

export default romanNumeralConverter;