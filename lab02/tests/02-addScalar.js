import { describe, it } from "mocha"
import chai from "chai"
import Matrix from "../src/Matrix.js"

describe("Matrix.addScalar", ()=> {
    it("should add scalar value to this into new Matrix", ()=> {
        let a = 1, b = 5, rows = 2, cols = 5
        let M = new Matrix({ rows, cols, fill: () => a })
        let Q = M.addScalar(b)
        chai.expect(Q.constructor).to.equal(Matrix)
        chai.expect(Q.size).to.deep.equal(M.size)
        chai.expect(Q).to.not.equal(M)
        for (let i=0; i<rows; i++) {
            for (let j=0; j<cols; j++) {
                chai.expect(Q[i][j]).to.equal(M[i][j] + b)
            }
        }
    })
})

describe("Matrix.subScalar", ()=> {
    it("should substract scalar value from this into new Matrix", ()=> {
        let a = 1, b = 5, rows = 2, cols = 5
        let M = new Matrix({ rows, cols, fill: () => a })
        let Q = M.subScalar(b)
        chai.expect(Q.constructor).to.equal(Matrix)
        chai.expect(Q.size).to.deep.equal(M.size)
        chai.expect(Q).to.not.equal(M)
        for (let i=0; i<rows; i++) {
            for (let j=0; j<cols; j++) {
                chai.expect(Q[i][j]).to.equal(M[i][j] - b)
            }
        }
    })
})
