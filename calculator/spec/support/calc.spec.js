const plus = require("../../plus");
const minus = require("../../minus");
const dev = require("../../dev");
const mul = require("../../mul");

describe("Проверка калькулятора", function() {
    it("2 + 5 => 7", function() {
        expect(plus(2, 5)).toBe(7);
    });
    it("5 - 2 => 3", function() {
        expect(minus(5, 2)).toBe(3);
    });
    it("9 / 3 => 3", function() {
        expect(dev(9, 3)).toBe(3);
    });
    it("2 * 5 => 10", function() {
        expect(mul(2, 5)).toBe(10);
    });
});