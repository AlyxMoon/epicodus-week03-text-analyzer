function getTopThreeWords (passage) {
  const passageSplitByWord = passage.split(' ').sort()

  const arrayOfWords = []
  const arrayOfCounts = []
  let prev

  for (let i = 0; i < passageSplitByWord.length; i++) {
    if (passageSplitByWord[i] !== prev) {
      arrayOfWords.push(passageSplitByWord[i])
      arrayOfCounts.push(1)
    } else {
      arrayOfCounts[arrayOfCounts.length - 1]++
    }
    prev = passageSplitByWord[i]
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

function getSentenceWithoutBadWords (passage) {
  return ''
}

function getSentenceWithBoldedText (passage) {
  return ''
}

function getCountTotalWords(passage) {
  let wordCount = 0

  const wordArray = ((passage.toString()).split(' '))

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

function getCountSpecificWord(passage, word) {
  if (noInputtedWord(word, passage)) {
    return 0
  }

  word = word.toLowerCase()
  passage = passage.toLowerCase()

  const wordArray = passage.split(' ')
  let wordCount = 0

  wordArray.forEach(function (element) {
    if (element.includes(word)) {
      wordCount++
    }
  })

  return wordCount
}

function getTextWithWordBolded (passage, word) {
  if (noInputtedWord(word, passage)) {
    return 0
  }

  let htmlString = '<p>'
  let passageArray = passage.split(' ')

  passageArray.forEach(function (element, index) {
    if (element === word) {
      // step one, get variable that equals the matching part
      // step two, put that variable in the bold passage
      htmlString = htmlString.concat('<b>' + element + '</b>')
    } else {
      htmlString = htmlString.concat(element)
    }

    if (index !== passageArray.length - 1) {
      htmlString = htmlString.concat(' ')
    }
  })

  return htmlString + '</p>'
}
