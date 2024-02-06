const { add } = require('./index.js');

test('Наш тестовый тест)', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(1);
    expect(add(0, 0)).toBe(0);
});

