import fs from "fs"
import my_lib from './gauss_functions.js'

function main() {
    let m = my_lib.read_input()
    let golden_list = my_lib.read_golden()
    let output_list = my_lib.gauss(m)
    my_lib.write_in_file(output_list)
}

main()

