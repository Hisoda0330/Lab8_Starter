// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('test1_phone_true', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});

test('test2_phone_true', () => {
    expect(functions.isPhoneNumber('987-654-3210')).toBe(true);
});

test('test3_phone_false', () => {
    expect(functions.isPhoneNumber('00000010000')).toBe(false);
});

test('test4_phone_false', () => {
    expect(functions.isPhoneNumber('2023')).toBe(false);
});

test('test1_email_true', () => {
    expect(functions.isEmail('hi@hjp.com')).toBe(true);
});

test('test2_email_true', () => {
    expect(functions.isEmail('jih054@ucsd.edu')).toBe(true);
});

test('test3_email_false', () => {
    expect(functions.isEmail('yeeees@gmailcom')).toBe(false);
});

test('test4_email_false', () => {
    expect(functions.isEmail('jih@ucsdedu')).toBe(false);
});

test('test1_strong_password_true', () => {
    expect(functions.isStrongPassword('ucsd12299')).toBe(true);
});

test('test2_strong_password_true', () => {
    expect(functions.isStrongPassword('hi2023')).toBe(true);
});

test('test3_strong_password_false', () => {
    expect(functions.isStrongPassword('1111222333')).toBe(false);
});

test('test4_strong_password_false', () => {
    expect(functions.isStrongPassword('____')).toBe(false);
});

test('test1_date_true', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});

test('test2_date_true', () => {
    expect(functions.isDate('12/03/2020')).toBe(true);
});

test('test3_date_false', () => {
    expect(functions.isDate('12/3/20')).toBe(false);
});

test('test4_date_false', () => {
    expect(functions.isDate('2023/03/12')).toBe(false);
});

test('test1_hexcolor_true', () => {
    expect(functions.isHexColor('#0000FF')).toBe(true);
});

test('test2_hexcolor_true', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('test3_hexcolor_false', () => {
    expect(functions.isHexColor('8g888')).toBe(false);
});

test('test4_hexcolor_false', () => {
    expect(functions.isHexColor('##a885')).toBe(false);
});