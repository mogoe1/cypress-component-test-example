import { add } from './add.mjs'
describe('add.js', () => {
    it('sould add', () => {
        expect(add(1, 1)).to.equal(2);
    })
})