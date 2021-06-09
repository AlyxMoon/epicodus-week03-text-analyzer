function getTopThreeWords (text) {
  const textSplitByWord = text.split(' ').sort()

  const arrayOfWords = []
  const arrayOfCounts = []
  let prev

  for (let i = 0; i < textSplitByWord.length; i++) {
    if (textSplitByWord[i] !== prev) {
      arrayOfWords.push(textSplitByWord[i])
      arrayOfCounts.push(1)
    } else {
      arrayOfCounts[arrayOfCounts.length - 1]++
    }
    prev = textSplitByWord[i]
  }

  const combinedArray = []

  arrayOfWords.forEach(function (item, index) {
    const combined = [arrayOfWords[index], arrayOfCounts[index]]
    combinedArray.push(combined)
  })

  combinedArray.sort(function (a, b) {
    return b[1] - a[1]
  })

  return [
    combinedArray[0][0],
    combinedArray[1][0],
    combinedArray[2][0],
  ].join(' ')
}

function getSentenceWithoutBadWords (text) {
  return ''
}

function getSentenceWithBoldedText (text) {
  return ''
}

function wordCounter(text) {
  let wordCount = 0

  const wordArray = ((text.toString()).split(' '))

  wordArray.forEach(function(word) {
    if (
      word.length >= 1 &&
      isNaN(parseInt(word))
    ) {
      wordCount++
    }
    
  })
  return wordCount
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0
  }

  word = word.toLowerCase()
  text = text.toLowerCase()

  const wordArray = text.split(' ')
  let wordCount = 0

  wordArray.forEach(function (element) {
    if (element.includes(word)) {
      wordCount++
    }
  })

  return wordCount
}

function boldPassage (word, text) {
  if (noInputtedWord(word, text)) {
    return 0
  }

  let htmlString = '<p>'
  let textArray = text.split(' ')

  textArray.forEach(function (element, index) {
    if (element.includes(word)) {
      // step one, get variable that equals the matching part
      // step two, put that variable in the bold text
      htmlString = htmlString.concat('<b>' + word + '</b>')
    } else {
      htmlString = htmlString.concat(element)
    }

    if (index !== textArray.length - 1) {
      htmlString = htmlString.concat(' ')
    }
  })

  return htmlString + '</p>'
}
