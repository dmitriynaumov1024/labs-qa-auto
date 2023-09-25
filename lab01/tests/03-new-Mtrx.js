import { describe, it } from "mocha"
import chai from "chai"
import Mtrx from "mtrx"

const rand = Math.random

describe("Mtrx constructor", ()=> {
    
    it("new Mtrx() should create 1x1 matrix by default", ()=> {
        chai.expect(new Mtrx()).to.have.lengthOf(1)
        chai.expect(new Mtrx()[0]).to.have.lengthOf(1)
    })

    it("new Mtrx(a, b) should create a x b matrix", ()=> {
        let a = (rand() * 10 | 0) + 3,
            b = (rand() * 10 | 0) + 2

        let M = new Mtrx(a, b)

        chai.expect(M).to.have.lengthOf(a)
        chai.expect(M[0]).to.have.lengthOf(b)
    })
})
