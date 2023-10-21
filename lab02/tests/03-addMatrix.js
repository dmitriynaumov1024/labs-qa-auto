import { describe, it } from "mocha"
import chai from "chai"
import Matrix from "../src/Matrix.js"

describe("Matrix.add", ()=> {
    it("should add Matrix to this into new Matrix", ()=> {
        let rows = 2, cols = 3
        let M = new Matrix({ rows, cols })
        let R = new Matrix({ rows, cols })
        for (let i=0; i<rows; i++) {
            for (let j=0; j<cols; j++) {
                M[i][j] = rows + i*2 + j
                R[i][j] = -3*cols + j*4 - i*i
            }
        }
        let X = M.add(R)
        chai.expect(X).to.not.equal(M)
        chai.expect(X).to.not.equal(R)
        chai.expect(X.constructor).to.equal(Matrix)
    }) 

    it("should be commutative", ()=> {
        let rows = 6, cols = 4
        let M = new Matrix({ rows, cols })
        let R = new Matrix({ rows, cols })
        for (let i=0; i<rows; i++) {
            for (let j=0; j<cols; j++) {
                M[i][j] = rows + i*3 + j*j
                R[i][j] = -2*cols + j*4 - i*i
            }
        }
        let X1 = M.add(R)
        let X2 = R.add(M)
        chai.expect(X1).to.deep.equal(X2)
    })

    it("should throw if matrices have different number of cols", ()=> {
        let M = new Matrix({ rows: 3, cols: 4, fill: 1 })
        let R = new Matrix({ rows: 3, cols: 2, fill: 1 })
        chai.expect(M.add).to.be.instanceOf(Function)
        chai.expect(()=> M.add(R)).to.throw()
        chai.expect(()=> R.add(M)).to.throw()
    })

    it("should throw if matrices have different number of rows", ()=> {
        let M = new Matrix({ rows: 1, cols: 4, fill: 1 })
        let R = new Matrix({ rows: 3, cols: 4, fill: 1 })
        chai.expect(M.add).to.be.instanceOf(Function)
        chai.expect(()=> M.add(R)).to.throw()
        chai.expect(()=> R.add(M)).to.throw()
    })
})
