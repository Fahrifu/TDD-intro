import romanNumeralConverter from './romanNumeral.mjs';

describe('Roman Numeral Converter', () => {
    test('Converts 1 to I', () => {
        expect(romanNumeralConverter(1)).toBe('I');
    });no

    test('Converts 4 to IV', () => {
        expect(romanNumeralConverter(4)).toBe('IV');
    });

    test('Converts 9 to IX', () => {
        expect(romanNumeralConverter(9)).toBe('IX');
    });

    test('Converts 40 to XL', () => {
        expect(romanNumeralConverter(40)).toBe('XL');
    });

    test('Converts 90 to XC', () => {
        expect(romanNumeralConverter(90)).toBe('XC');
    });

    test('Converts 400 to CD', () => {
        expect(romanNumeralConverter(400)).toBe('CD');
    });

    test('Converts 900 to CM', () => {
        expect(romanNumeralConverter(900)).toBe('CM');
    });

    test('Converts 1000 to M', () => {
        expect(romanNumeralConverter(1000)).toBe('M');
    });

    test('Converts 1987 to MCMLXXXVII', () => {
        expect(romanNumeralConverter(1987)).toBe('MCMLXXXVII');
    });

    test('Converts 3999 to MMMCMXCIX', () => {
        expect(romanNumeralConverter(3999)).toBe('MMMCMXCIX');
    });
});