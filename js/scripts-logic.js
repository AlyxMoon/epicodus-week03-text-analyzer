// overall goal: 
// split passage by words
// then get a count of those words
// then sort that somehow to get the highest used words
// return the 3 highest used words 
function getTopThreeWords (passage) {
  if (passage.trim().length === 0) {
    // return early if no words
    // return an array so we're consistent with future returns
    return []
  }

  // Sometimes you can chain functions across multiple lines! (depends on what the function returns)
  // convert string to lowercase, since a word should be counted regardless of case
  // Turn the string into an array, words split by spaces
  // sort words so any equivalent words are next to each other
  const passageSplitByWord = passage
    .toLowerCase()
    .split(' ')
    .sort()

  // wordCounts is an array of [word, count]
  // accessing first word is done by wordCounts[0][0]
  // accessing first word count is done by wordCounts[0][1]
  // accessing second word is done by wordCounts[1][0]
  // accessing second word count is done by wordCounts[1][1]
  const wordCounts = []

  // we want to iterate through every word now
  // our goal is to add a count of each word in wordCounts
  passageSplitByWord.forEach(function (word) {
    // since we're sorted, all the same words will be next to each other
    // so we find our last wordCount item to work with
    const previous = wordCounts[wordCounts.length - 1]

    // if previous doesn't exist, we haven't made the first wordCounts item yet!
    if (!previous) {
      wordCounts.push([word, 1])
      // this makes wordCounts = [[word, 1]]
      // we return early because we got our first count, we can skip to the next word
      return
    }

    // this is like calling wordCounts[wordCounts.length - 1][0]
    const previousWord = previous[0]
    // this is like calling wordCounts[wordCounts.length - 1][1]
    const previousCount = previous[1]

    if (previousWord === word) {
      // same word, so we just need to update the count in our array!
      wordCounts[wordCounts.length - 1][1] = previousCount + 1
      // return early again because we don't need to check anything else
      return
    }

    // now the only option is that we have a new word, so we push similar to the first if case
    wordCounts.push([word, 1])
  })

  // now we should have an array of [word, count] but we don't know if we have it in the correct order
  // we want it to be highest -> lowest, so we can grab the first three items easily
  // this is where .sort() comes into play, we can pass a custom function!

  // this function compares two items in the array at a time, and we can tell it which should come first
  // check out for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  wordCounts.sort(function (item1, item2) {
    // this is like calling wordCounts[index][1]
    const count1 = item1[1]
    // this is like calling wordCounts[index + 1][1]
    const count2 = item2[1]

    // just some math based on the docs above. This will put a higher number before a smaller one.
    // Because the [word, count] are grouped together, they get sorted together
    // even though we only check the count!
    return count2 - count1
  })

  // return the first three items
  return wordCounts.slice(0, 3)
}

// call this one with the passage to call the first function and then put the output into HTML
function getTopThreeWordsDisplayed (passage) {
  const stuffToShow = getTopThreeWords(passage)
  /* so we should have something like: 
    [[word1, count1], [word2, count2], [word3, count3]]
  */

  stuffToShow.forEach(function (item) {
    const word = item[0]
    const count = item[1]

    // to group things nicely, put them in a list
    // My HTML looks like <div #output-top-three><ul></ul></div>
    // yours may look different, so feel free to change the selector
    $('#output-top-three ul').append('<li>' + word + ': ' + count + '</li>')
  })
}

function getSentenceWithoutBadWords (passage) {
  const badWords = [
    'zoinks',
    'muppeteer',
    'biffaroni',
    'loopdaloop',
  ]

  return passage
    .trim()
    .split(' ')
    .filter(function (word) {
      return !badWords.includes(word)
    })
    .join(' ')
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
