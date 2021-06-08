// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});
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

  return wordCount;
}

function boldPassage (word, text) {
  let htmlString = '<p>'
  let textArray = text.split(' ')

  textArray.forEach(function (element, index) {
    if (word === element) {
      htmlString = htmlString.concat('<b>' + element + '</b>')
    } else {
      htmlString = htmlString.concat(element)
    }

    if (index !== textArray.length - 1) {
      htmlString = htmlString.concat(' ')
    }
  })

  return htmlString + '</p>'
}
