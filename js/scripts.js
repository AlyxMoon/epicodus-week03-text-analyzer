// Business Logic

function wordCounter(text) {
  let wordCount = 0;

  const wordArray = ((text.toString()).split(" "));

  wordArray.forEach(function(word) {
    if (
      word.length >= 1 &&
      isNaN(parseInt(word))
    ) {
      wordCount++;
    }
    
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  word = word.toLowerCase()
  text = text.toLowerCase()

  const wordArray = text.split(' ')
  let wordCount = 0

  wordArray.forEach(function (element) {
    if (
      word.length >= 1 &&
      element.includes(word)
    ) {
      wordCount++
    }
  })

  return wordCount
}
