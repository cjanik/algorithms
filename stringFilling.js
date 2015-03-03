/*
Problem Statement
    	
Cat Taro likes strings. He is currently constructing a string S of length N. Each character of S will be either 'A' or 'B'. Taro has already chosen some of the characters. You are given these choices as a int[] position and a String value. For each valid i, the character at the 1-based index position[i] in S is the character value[i].

To Taro, the ugliness of a string is the number of pairs of equal consecutive characters. For example, the ugliness of "ABABAABBB" is 3: there is one pair "AA" and two (overlapping) pairs "BB".

Taro now wants to finish S by filling in the remaining characters. His goal is to create a string with the smallest possible ugliness. Let X be the number of possible strings Taro may produce. Return the value (X modulo 1,000,000,007).

 
Definition
    	
Class:	TaroFillingAStringDiv1
Method:	getNumber
Parameters:	int, int[], String
Returns:	int
Method signature:	int getNumber(int N, int[] position, String value)
(be sure your method is public)
    
 
Constraints
-	N will be between 1 and 1,000,000,000, inclusive.
-	position will contian between 1 and 50 elements, inclusive.
-	value and position will contain the same number of elements.
-	Each element of position will be between 1 and N, inclusive.
-	All elements of position will be distinct.
-	value will consist only of characters 'A' and 'B'.
 
Examples
0)	
    	
3
{1, 3}
"AB"
Returns: 2
Currently, Taro's string looks as follows: A_B. He can either produce the string AAB or the string ABB. Both have the same ugliness.
1)	
    	
4
{2, 1, 3, 4}
"ABBA"
Returns: 1
All characters of S have already been chosen.
2)	
    	
25
{23, 4, 8, 1, 24, 9, 16, 17, 6, 2, 25, 15, 14, 7, 13}
"ABBBBABABBAAABA"
Returns: 1
3)	
    	
305
{183, 115, 250, 1, 188, 193, 163, 221, 144, 191, 92, 192, 58, 215, 157, 187, 227, 177, 206, 15, 272, 232, 49, 11, 178, 59, 189, 246}
"ABAABBABBAABABBBBAAAABBABBBA"
Returns: 43068480

So the solution will involve:
Finding all the empty gaps. Counting their length.
If length even, and bounded by opposites, then 1 option.
If length even, and bounded by sames, then n+1 options.
If length odd, and bounded by opposites, then n+1 options.
If length odd, and bounded by sames, then 1 option.

These are the number of permutations of each individual gap section. 
Those need to multiply by each other. 

*/

function fillString( stringLength, positions, values){
	var chosenValuesLength = values.length,
		stringHash = {},
		gapStart,
		gapLength,
		numPermutations = 1,
		permutationsArray = [1];

	for ( var i in positions){
		stringHash[positions[i]] = values[i];
	}

	//console.log(stringHash);

	// for i in positions
	// identify gap
	// identify gap length
	var i,
		gapLength = 0,
		sortedPositions = positions.sort(function compareNumbers(a, b) {  return a - b; });

	//console.log(sortedPositions);

	for( i = 0; i < chosenValuesLength - 1; i++){
		gapLength = sortedPositions[i+1] - sortedPositions[i] - 1;
		//console.log('GAP LENGTH: ', gapLength);
		if( gapLength > 0 ){
			//console.log('GAP LEN: ', gapLength, ' between ', stringHash[ sortedPositions[i] ], ' & ', stringHash[ sortedPositions[i+1] ]);
		
			if( ( gapLength % 2 === 0 && stringHash[ sortedPositions[i] ] === stringHash[ sortedPositions[i+1] ] )
				|| ( gapLength % 2 === 1 && stringHash[ sortedPositions[i] ] !== stringHash[ sortedPositions[i+1] ] ) ) {

				permutationsArray.push(gapLength+1);
			}


		}
	}

	for( var i in permutationsArray){
		numPermutations *= permutationsArray[i];
	}

	return numPermutations;
}

console.log('example 2: ',
	fillString(25, [23, 4, 8, 1, 24, 9, 16, 17, 6, 2, 25, 15, 14, 7, 13],
	"ABBBBABABBAAABA"));

console.log('example 0: ',
	fillString(3, [1, 3],
		"AB"));

console.log('example 3: ', fillString(305,
	[183, 115, 250, 1, 188, 193, 163, 221, 144, 191, 92, 192, 58, 215, 157, 187, 227, 177, 206, 15, 272, 232, 49, 11, 178, 59, 189, 246],
	"ABAABBABBAABABBBBAAAABBABBBA"));


