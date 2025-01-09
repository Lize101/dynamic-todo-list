import { checkInput } from "../src/scripts/utils"

test('if input value is empty then return false', () => {
    expect(checkInput('')).toBe(false);
});

test('if input value has whitespace then return false', () => {
    expect(checkInput(' ')).toBe(false);
});

test('if input value is valid then return true', () => {
    expect(checkInput('Item')).toBe(true);
});

test('if spaces surround the value then trim and return true', () => {
    expect(checkInput(' Item2 ')).toBe(true);
});

test('if special characters exist then return true', () => {
    expect(checkInput('!&*%£')).toBe(true);
});