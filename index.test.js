const sum = require("./index")

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 1 to equal 4',() => {
	expect(sum(3,1)).toBe(4);
})