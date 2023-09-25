import { describe, it } from "mocha"
import chai from "chai"
import Mtrx from "mtrx"

const rand = Math.random

describe("Mtrx.add", ()=> {
    
    it("Mtrx.add should produce matrix with the same shape", ()=> {
        let a = (rand() * 10 | 0) + 3,
            b = (rand() * 10 | 0) + 2

        let M = new Mtrx(a, b, (row, col) => rand())
        let R = new Mtrx(a, b, (row, col) => rand())

        let S = Mtrx.add(M, R)

        chai.expect(Mtrx.isSameShape(M, S)).to.be.true
        chai.expect(Mtrx.isSameShape(R, S)).to.be.true
    })

    it("Mtrx.add should add element-wise", ()=> {
        let a = (rand() * 10 | 0) + 3,
            b = (rand() * 10 | 0) + 2

        let M = new Mtrx(a, b, (row, col) => rand())
        let R = new Mtrx(a, b, (row, col) => rand())

        let S = Mtrx.add(M, R)

        for (let i=0; i<a; i++) {
            for (let j=0; j<b; j++) {
                chai.expect(M[i][j] + R[i][j]).to.equal(S[i][j])
            }
        }
    })

    it("Mtrx.add should be commutative", ()=> {
        let a = (rand() * 10 | 0) + 3,
            b = (rand() * 10 | 0) + 2

        let M = new Mtrx(a, b, (row, col) => rand())
        let R = new Mtrx(a, b, (row, col) => rand())

        let S = Mtrx.add(M, R)
        let T = Mtrx.add(R, M)

        for (let i=0; i<a; i++) {
            for (let j=0; j<b; j++) {
                chai.expect(T[i][j]).to.equal(S[i][j])
            }
        }
    })

})
