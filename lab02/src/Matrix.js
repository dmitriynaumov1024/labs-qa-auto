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

    addScalar (value) {
        let options = this.size
        options.fill = (i, j) => this[i][j] + value
        return new Matrix(options)
    }

    subScalar (value) {
        return this.addScalar(-value)
    }

    add (other) {
        let thisSize = this.size
        let otherSize = other.size
        if (thisSize.rows != otherSize.rows) {
            throw new ValueError("matrices must have the same number of rows")
        }
        if (thisSize.cols != otherSize.cols) {
            throw new ValueError("matrices must have the same number of cols")
        }
        return new Matrix({ 
            rows: thisSize.rows, cols: thisSize.cols, 
            fill: (i, j) => this[i][j] + other[i][j] 
        })
    }
}

export default Matrix
