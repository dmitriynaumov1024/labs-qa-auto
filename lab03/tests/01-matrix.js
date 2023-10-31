import { describe, it } from "mocha"
import chai from "chai"
const expect = chai.expect
import sinon from "sinon"

import Matrix from "../gauss-js-main/matrix.js"
import util from "../gauss-js-main/gauss_functions.js"

describe("Matrix", ()=> {
    
    it("creates a Matrix", ()=> {
        const m = new Matrix(2)
        expect(m.matrix).to.be.instanceOf(Array)
    })

    it("solves a Matrix in predictable way", ()=> {
        // read matrix from a file
        const m = util.read_input("./gauss-js-main/input.txt")
        
        // create mock object and expect some function calls
        const mMock = sinon.mock(m)
        mMock.expects("get_rows").atLeast(1).returns(m.matrix.length)
        mMock.expects("get_cols").atLeast(1).returns(m.matrix.length + 1)
        mMock.expects("exists_zero_row").once().returns(false)
        mMock.expects("exists_wrong_row").once().returns(false)

        // entry point of checked code
        let result = util.gauss(m)
        
        // verify mock
        mMock.verify()

        // verify result
        expect(result).to.be.instanceOf(Array)
        expect(result).to.have.lengthOf(m.matrix.length)
        expect(result).to.not.include.members([-Infinity, Infinity, -NaN, +NaN])
    })

})
