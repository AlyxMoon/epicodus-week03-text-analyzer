# Epicodus | Week 03 | Text Analyzer

This site will present a form to the user, asking them for a sentence and a word. There are series of functions that act on the sentence, and some on the word. These functions do things such as: count the total words, find the count of a single word, and so on. 

## Live Site
[https://alyxmoon.github.io/epicodus-week03-text-analyzer/](https://alyxmoon.github.io/epicodus-week03-text-analyzer/)

## Requirements / Steps
Prior to the official practice page, here are the steps that were performed:
1. Create a series of tests for `wordCounter()` and write the function to meet them
2. Create a series of tests for `numberOfOccurencesInText()` and meet them
3. Create a series of tests for `boldPassage()` and meet them.
4. Fill out frontend code to handle user input/output

After that, here are the goals to achieve:
1. Write a function that returns the three most used words in a passage of text.
2. Write a function that omits offensive words. For the purpose of this application, there are only four offensive words to worry about: _zoinks_, _muppeteer_, _biffaroni_, and _loopdaloop_.
3. Write a UI function that only bolds the part of the word that matches.

## Contributors

- [Allister Kays](https://github.com/AlyxMoon)
- [Araceli Valdovinos](https://github.com/aracelivaldovinos)


#### Tests
##### Describe: wordCounter()


```
Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1
```

```
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2
```

```
Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0
```

```
Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0
```

```
Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2
```

```
Test: "It should allow a number input without throwing an error."
Code: wordCounter(42)
Expected Output: 0
```

##### Describe: numberOfOccurrencesInText()

```
Test: "It should return 0 occurrences of a word for an empty string."
const text = "";
const word = "red";
Code: numberOfOccurrencesInText(word, text);
Expected Output: 0
```

```
Test: "It should return 0 occurrences of a word for an empty string and empty word."
const text = "";
const word = "";
Code: numberOfOccurrencesInText(word, text);
Expected Output: 0
```

```
Test: "It should return 1 occurrence of a word when the word and the text are the same."
const text = "red";
const word = "red";
Code: numberOfOccurrencesInText(word, text);
Expected Output: 1
```

```
Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0
```

```
Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4
```

```
Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3
```

```
Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3
```

##### Describe: boldPassage()

```
Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"
```

```
Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"
```

```
Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"
```
