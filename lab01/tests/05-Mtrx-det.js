import { describe, it } from "mocha"
import chai from "chai"
import Mtrx from "mtrx"

const rand = Math.random

describe("Mtrx.det", ()=> {

    it("Mtrx.det should always be a for [[a]], a!=0", ()=> {
        let a = (rand() * 10 | 0 ) + 1
        let M = new Mtrx([[a]])
        chai.expect(M.det).to.equal(a)
    })

    it("Mtrx.det of zero matrix should always be 0", ()=> {
        for (let i=1; i<=4; i++) {
            let M = new Mtrx(i, i, (row, col)=> 0)
            chai.expect(M.det).to.equal(0)
        }
    })
})
