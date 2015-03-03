function subStringIndex( needle, hayStack){
	var i = 0,
		len = hayStack.length,
		count = 0;

	for ( i = 0; i < len; i++){

			for( var j = 0; j < needle.length; j++){
				if( needle[j] === hayStack[i + j]){
          count++;
					if( count === needle.length){
            return i;
          }
        } else {
          count = 0;
          break;
        }

    }
  }
	return -1;
}