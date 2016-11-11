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
    const subStrings = new Set();
    for (i = 0; i < short.length; i++) {
        for (j = 1; i + j <= short.length; j++) {
            subStrings.add(short.substring(i, i + j));
        }
    }
    for (let sub of subStrings) {
        if (second.indexOf(sub) > -1) numMatches++;
    }
    console.log('matches: ', numMatches, ' subs: ', subStrings);
}
