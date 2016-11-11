// The problem:
// given two strings, find all unique matches of substrings of any length that they share

const matchSubstrings = (first, second) => {
    let short, long;
    if (first.length < second.length) {
        short = first;
        long = second;
    } else {
        short = second;
        long = first;
    }

    let numMatches = 0;
    // Set data structure ensures unique entries
    const subStrings = new Set();
    for (let i = 0; i < short.length; i++) {
        // make sure to start second pointer at index 1 to avoid an invalid match
        // ('string').substring(0,0) returns '', and ('string').indexOf('') returns 0
        for (let j = 1; i + j <= short.length; j++) {
            subStrings.add(short.substring(i, i + j));
        }
    }
    for (let sub of subStrings) {
        if (long.indexOf(sub) > -1) numMatches++;
    }
    console.log('matches: ', numMatches, ' subs: ', subStrings);
}
