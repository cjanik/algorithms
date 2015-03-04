/*
Buy 1 beer for each person who attends your party. Beer is sold in units of 1, 6, 12, and 24.

Given the number of people attending the party, determine all possible combinations of beer units that will result in the correct number of beers total.

example:
people coming -
25
expected output -
1: 25;
6: 4, 1: 1;
6: 3, 1: 7;
6: 2, 1: 13:
6: 2, 12: 1, 1: 1;
6: 1, 12: 1, 1: 7;
12: 1, 1: 13;
12: 2, 1: 1;
24: 1, 1: 1;

floor( 25 / 24 ) == 1
floor( 25 / 12 ) == 2
floor( 25 / 6 )  == 4
floor( 25 / 1 )  == 25

floor( 25 / 24 ) + 25 % 24 == 25
floor( 25 / 12 ) + 25 % 12 == 25

recursive - 
input units and numPeople

need a base case -
add one

work from largest unit. so 25 / 24 is > 1, pass the rest to recursion with fewer units [12, 6, 1] with remaining numPeople == 1

can't use 12, call buyBeer [6,1] with 1 numPeople

can't use 6, call buyBeer with [1] with 1 numPeople

6 - can use 1, 2, 3, or 4, so return {{6: 1, buyBeer...}, {6: 2, buyBeer}, {6: 3, buyBeer}...}
126 

base case: fill remaining required numPeople with largest unit [1]


*/

function buyBeer( units, numPeople ) {
	numUnits = units.length;
	unitZero = units[0];

	console.log( units );

	if( numUnits === 1 && numPeople === 1){
		return {1: 1};
	} else if ( numUnits === 1){
		return {1: 1, link: buyBeer(units, numPeople - 1)};
	} else if ( 2 > numPeople / units[0] > 1 ) {
		return { unitValue: 1, link: buyBeer( units.slice(1), numPeople - units[0])};
	} else if ( numPeople / units[0] > 2 ) {
		return { unitValue: Math.floor( numPeople / units[0] ), buyBeer( units, numPeople - units[0] )};
	}


}

conosole.log( buyBeer( [24, 12, 6, 1], 25) );



