import { describe, it } from "mocha"
import chai from "chai"
import Matrix from "../src/Matrix.js"

describe("Matrix constructor", ()=> {
    it("should create matrix", ()=> {
        let a = new Matrix({ rows: 2, cols: 3, fill: 0 })
        chai.expect(a.constructor).to.equal(Matrix)
        chai.expect(a.length).to.equal(2)
        chai.expect(a[0].length).to.equal(3)
        for (let row of a) {
            for (let item of row) {
                chai.expect(item).to.equal(0)
            }
        }
    })

    it("should throw error when rows are not positive integer", ()=> {
        chai.expect(()=> new Matrix({ rows: -2, cols: 2 })).to.throw()
    })

    it("should throw error when cols are not positive integer", ()=> {
        chai.expect(()=> new Matrix({ rows: 2, cols: -1 })).to.throw()
    })
})
