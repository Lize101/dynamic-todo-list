import { checkInput, createItems } from "../src/scripts/utils"

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

test('check tagname and text content', () => {
    const sampleText = 'Item3';
    const sampleItem = createItems(sampleText);

    // console.log('Sample Item textContent:', sampleItem.textContent);

    expect(sampleItem.textContent).toContain('Item3');
    expect(createItems(sampleText).tagName).toBe('LI');
    // expect(sampleItem.firstChild?.nodeValue).toBe(sampleText);

});
