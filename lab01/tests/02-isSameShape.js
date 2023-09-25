import { describe, it } from "mocha"
import chai from "chai"
import Mtrx from "mtrx"

const rand = Math.random
const { isSameShape } = Mtrx

describe("isSameShape", () => {

    it("[[a]] should be the same shape as [[b]]", ()=> {
        let A = [[rand()]], 
            B = [[rand()]]
        chai.expect(isSameShape(A, B)).to.be.true
    })

    it("[[a]] should not be the same shape as [[b, c]]", ()=> {
        let A = new Mtrx([[rand()]]),
            B = new Mtrx([[rand(), rand()]])
        chai.expect(isSameShape(A, B)).to.be.false
    })

    it("isSameShape should throw when row is undefined", ()=> {
        let A = [[rand()]], B = [undefined]
        chai.expect(()=> isSameShape(A, B)).to.throw()
    })
})
