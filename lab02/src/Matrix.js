class Matrix extends Array {
    constructor ({ rows, cols, fill } = options) {
        if ((rows <= 0) || ((rows | 0) != rows)) {
            throw ValueError("rows must be integer greater than 0")
        }
        if ((cols <= 0) || ((cols | 0) != cols)) {
            throw ValueError("cols must be integer greater than 0")
        }
        super(rows)
        let fillFunc = (fill instanceof Function) ? fill : ((a, b) => fill)
        for (let i=0; i<rows; i++) {
            this[i] = new Array(cols)
            for (let j=0; j<cols; j++) {
                this[i][j] = fillFunc(i, j)
            }
        }
    }

    get size () {
        return { 
            rows: this.length, 
            cols: this[0].length 
        }
    }
}

export default Matrix
