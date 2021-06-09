$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault()

    const passage = $('#input-passage').val()
    const matchText = $('#input-word').val()

    $('#output-count-total').html(getCountTotalWords(passage, matchText))
    $('#output-count-selected').html(getCountSpecificWord(passage, matchText))
    $('#output-bolded-words').html(getTextWithWordBolded(passage, matchText))

    $('#output-top-three').html(getTopThreeWords(passage))
    $('#output-no-offensive').html(getSentenceWithoutBadWords(passage))
    $('#output-bolded-matches').html(getSentenceWithBoldedText(passage, matchText))
  })
})

