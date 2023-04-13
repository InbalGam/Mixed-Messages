// constant phrase begining
const phraseBegin = 'Let this day';
// this parts of the phrase will be chosen randomly-
const phraseMiddle = ['be', 'have', 'create', 'give'];
const phraseEnd = ['a good day', 'positivity', 'magic', 'love'];

// functions to select randomly the middle and end of the phrase-
let middle = (middleArray) => {
    let pos = Math.floor(Math.random() * middleArray.length);
    return middleArray[pos];
}


let end = (endArray) => {
    let pos = Math.floor(Math.random() * endArray.length);
    return endArray[pos];
}


function createPhrase(begin, middleP, endP) {
    middleWords = ' ' + middle(middleP);
    endWords = ' ' + end(endP);
    return begin + middleWords + endWords;
}


console.log(createPhrase(phraseBegin, phraseMiddle, phraseEnd));

