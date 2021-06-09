$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault()

    const passage = $('#input-passage').val()
    const matchText = $('#input-word').val()

    const wordCount = wordCounter(passage)
    const occurrencesOfWord = numberOfOccurrencesInText(matchText, passage)

    $('#output-count-total').html(wordCount)
    $('#output-count-selected').html(occurrencesOfWord)
    $('#output-bolded-words').html(boldPassage(word, passage))

    $('#output-top-three').html(getTopThreeWords(passage))
    $('#output-no-offensive').html(getSentenceWithoutBadWords(passage))
    $('#output-bolded-matches').html(getSentenceWithBoldedText(passage))
  })
})

