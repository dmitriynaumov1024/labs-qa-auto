import { describe, it } from "mocha"
import chai from "chai"
import Mtrx from "mtrx"

const rand = Math.random
const { isMtrxLike } = Mtrx

describe("isMtrxLike", ()=> {

    it("[[a]] should be a matrix", ()=> {
        let matrix = [[rand()]]
        chai.expect(isMtrxLike(matrix)).to.equal(true)
    })

    it("2-dimensional array of any size should be a matrix", ()=> {
        for (let h=1; h<20; h++) {
            for (let w=1; w<20; w++) {
                let matrix = Array(h).fill(0).map(()=> Array(w).fill(0).map(rand))
                chai.expect(isMtrxLike(matrix)).to.equal(true)
            }
        }
    })

    it("2-dimensional jagged array should not be a matrix", ()=> {
        for (let h=2; h<20; h++) {
            let matrix = Array(h).fill(0).map((_, i)=> Array(i+1).fill(0).map(rand))
            chai.expect(isMtrxLike(matrix)).to.equal(false)
        }
    })

    it("1-dimensional array should not be a matrix", ()=> {
        let matrix = [rand(), rand()]
        chai.expect(isMtrxLike(matrix)).to.equal(false)
    })

    it("3-dimensional array should not be a matrix", ()=> {
        let matrix = [[[rand(), rand()]]]
        chai.expect(isMtrxLike(matrix)).to.equal(false)
    })
})
