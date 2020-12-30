import { add, subtract, multiply, divide } from '../helpers/calculator'
const assert =  require('assert');

describe('Calculator TestOps Cypress', function() {

    it('should passed', function () {
        assert.equal(add(345, 2), 347);
        assert.equal(add(2, 345), 347);
    });

    it('should skipped', function () {
        this.skip();
        assert.equal(multiply(367, 123), 45141);
        assert.equal(multiply(123, 367), 45141);
    });

    it('should failed', function () {
        assert.equal(divide(600, 2), 200);
    });

    describe('Nested describe', function () {
        it('subtract', function () {
            assert.equal(subtract(500, 200), 300);
            assert.equal(subtract(200, 300), -100);
        });
    })
});
