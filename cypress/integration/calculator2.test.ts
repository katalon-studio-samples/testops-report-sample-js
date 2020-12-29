import { add, subtract, multiply, divide } from '../helpers/calculator'
const assert =  require('assert');

describe('CalculatorTestCypress2', function() {
    it('add', function () {
        assert.equal(add(345, 2), 347);
        assert.equal(add(2, 345), 347);
    });

    it('subtract', function () {
        assert.equal(subtract(500, 200), 300);
        assert.equal(subtract(200, 300), -100);
    });

    //skip test case
    it('multiply', function () {
        this.skip();
        assert.equal(multiply(367, 123), 45141);
        assert.equal(multiply(123, 367), 45141);
    });

    //fail test case
    it('divide', function () {
        assert.equal(divide(600, 2), 200);
    });
});
