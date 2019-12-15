# algorithms

It is not memorization. Look at the code and try to understand what it does.

- **Linear algorithms:** If you are looping through the array and looking at all the elements one by one then it is O(n) because you spend constant time looking at a single element and there are n total elements.

- **Logarithmic algorithms:** For binary search each time you look at an element you are essentially discarding half of the array. So after the first lookup you only care about n/2 elements in the array. After the second lookup, you only care about n/4 elements of the array.
 - You do the pivot lookup operation {n/2, n/4, n/8 ... n/n} times and each time you do it you spend constant time since you are doing a simple comparison operation or equality check.
 - So basically you are counting the number of elements in the set {n/2, n/4, n/8 ... n/n} which is log base 2 of n or O(logn)

- **nLogn algorithms:** Another class of problems are problems like quicksort or mergesort. What is quicksort for example doing? You choose a pivot for an array/subarray then look at every single element of that array/subarray and arrange them in a way that smaller elements go to the left of the pivot and larger elements go to the right side of the pivot. 
 - What this means is that every time you choose a pivot, you do O(n) work since you are processing every single element of the array/subarray.
 - First time you choose the pivot, you do O(n) work. Then you divide the array into two parts (which should be approximately equal to n/2). Then you do quicksort for the two halves that is O(n/2) + O(n/2) work. Then you divide those subarrays into halfs and choose pivots for the 4 smaller subarrays repeat the process. You continue until the array is fully sorted.
 - What this means is every time you choose a pivot, you do 'n' units of work. And similar to binary search the number of times we choose the pivot = number of elements in the set {n/2, n/4, n/8 ... n/n} -> log(n)
 - Hence the complexity is n*log(n)
- **Exponential complexities:** Next let's take a look at exponential algorithms. This is basically what you studied in permutations and combinations during math class in school/college
 - Let's consider the recursive implementation of n queens problem. You have 8 rows to place the queens and the queen can be placed in one of 8 columns. So for the first column you have 8 possibilities, for the second column you have 8 possibilities and so on. Complexity is n^n
 - Let us consider the problem where we are asked to find all the permutations of the string with unique characters. Let's assume the string has 5 characters - there are 5 positions we are trying to fill. So in the first position you have 5 possibilities, for the second position you have 4 possibilities (since you placed one character in the first position), for the third position you have 3 possibilities (since 2 characters have been placed in positions 1, 2) and so on. The complexity = n\*n-1\*n-2...\*1 and this is O(n!)
 -  Next suppose you are asked to find the number of possible values in a byte - one byte = 8 bits. You have 8 positions that can take 2 values (0 or 1). For position 1 you have 2 values, for position 2 you have 2 values and so on. The value of this is 2^8 hence the complexity of such problems is O(2^n ).

Obviously there are algorithms for which calculating the complexity if a lot more difficult and requires knowledge of things like calculus to accurately compute however this is not needed in interviews.

If you want to be extra safe just memorize the formula for the master theorem for more complicated recursion based problems but again - for most interview questions figuring out the time complexity is straightforward.
