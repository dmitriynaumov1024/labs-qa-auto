import fs from "fs"
import my_lib from './gauss_functions.js'

function test() {
    let m = my_lib.read_input()
    let golden_list = my_lib.read_golden()
    let output_list = my_lib.gauss(m)
    my_lib.write_in_file(output_list)
    if(my_lib.cmp_lists(output_list, golden_list)) {
        fs.writeFileSync('result.txt', "test passed")
    } else {
        fs.writeFileSync('result.txt', "test not passed")
    }
}

test()

