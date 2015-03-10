/*
Buy 1 beer for each person who attends your party. Beer is sold in units of 1, 6, 12, and 24. Or make up your own units as long as you have singles.

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

*/


var beerForParty = function( units, numPeople) {

	if ( units == null || numPeople == null || units.length == 0 || numPeople < 1){
		return 'Expected array of units [24, 12, 6, 1], and positive numPeople';
	}

	units.sort( function(a,b){ return b - a; });

	var results = [],
		counter = {};

	var buyBeer = function( units, numPeople, counter){

		if( units.length == 1 && units[0] <= numPeople){
			counter[ units[0] ] = ( counter[ units[0] ] || 0 ) + numPeople / units[0];
			results.push( counter );

		} else if ( units.length > 1 && units[0] <= numPeople){

			for( var i = 1; i <= Math.floor( numPeople / units[0] ); i++){
				var newCounter = {};
				for( prop in counter){
					if ( counter.hasOwnProperty( prop) ){
						newCounter[prop] = counter[prop];
					}
				}
				newCounter[ units[0] ] =  i;
				buyBeer( units.slice(1), numPeople - i * units[0], newCounter);
			}
			buyBeer( units.slice(1), numPeople, counter);

		} else {
			buyBeer( units.slice(1), numPeople, counter);

		}
	}

	buyBeer( units, numPeople, counter);
	return results;

}

console.log( beerForParty( [24, 6, 12, 1], 25) );



