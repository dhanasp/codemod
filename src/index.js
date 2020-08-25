const makeItQuestion = (sentence) => {
  splittedSentence = sentence.split(" ");
  questionMark = ["?"];
  firstWord = splittedSentence[1][0].toUpperCase() + splittedSentence[1].slice(1)
  const question = [firstWord, splittedSentence[0]]
    .concat(splittedSentence.slice(2))
    .concat(questionMark);

    return question.join(' ')
};

module.exports = {
    makeItQuestion : makeItQuestion
}
