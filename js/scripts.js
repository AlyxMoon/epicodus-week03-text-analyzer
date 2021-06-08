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