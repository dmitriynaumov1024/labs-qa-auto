#What this project does
 This project solves the given system of linear equations using Gauss-elimination method

#files
 in this directory there are following files
* input.txt __ it is the file where our matrix example is written like this
	        size
		________
               |       |
               |matrix |
               |_______|

* golden.txt __ it is the file where our correct answer is located
* matrix.py __ here is my matrix class
* gauss_functions.js __ this file contains the functions which solve our main problem (gauss_ forward, gauss_backward, gauss and other related functions) 
* gauss_test.js __ this file  contains the operation of the testing 
* main.js __ this file solves the main problem(without testing)
 the files that will be generated are 
*output.txt__here result-values are written
*result.txt__here test results are written(test passed or not)




#description
My project solves the system of linear equations using matrixes
If the system doesn't have solution or the system is linearly dependent the answer is "no solution"
If a letter is typed in place of number, or a wrong size is typed the answer is "wrong imput"
And finally, when our system has solution the answer is written like this   "sol1 sol2 sol3 ... soln"
NOTE: in my output file the solutions are written in 7 precision, in the golden file, 5 precision



#to run the main program type in command line
 js main.js
to clean the generated files type 
 rm output.txt


#to run the test type in command line
 js gauss_test.js
to clean the generated files type 
 rm output.txt result.txt
