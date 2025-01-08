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