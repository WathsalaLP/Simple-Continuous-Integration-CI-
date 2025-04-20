const add = require('./itbin_2110_0090');

test('add 3 + 5 to equal 8',() => {
    expect(add(3, 5)).toBe(8);
});