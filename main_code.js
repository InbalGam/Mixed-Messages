// functions to select randomly the middle and end of the phrase-
function beginSentence() {
    const begin = {'day': 'Let this day',
                   'mind': 'Let your mind',
                   'hope': 'Set your hopes'};
    beginKeys = Object.keys(begin);
    let pos = Math.floor(Math.random() * beginKeys.length);
    return [beginKeys[pos], begin[beginKeys[pos]]];
}


function endSentence(key) {
    const end = {'day': ['be magical', 'be beautiful', 'be lovely'],
                 'mind': ['wonder', 'be at ease', 'run with imagination'],
                 'hope': ['high, they will not fail you', 'high, trust yourself']};
    let pos = Math.floor(Math.random() * end[key].length);
    let words = end[key].filter(value => end[key][pos] === value);
    //console.log(end[key]);
    return words;
}


function createPhrase() {
    let startArray = beginSentence();
    let ending = endSentence(startArray[0]);
    return startArray[1] + ' ' + ending;
}


console.log(createPhrase());