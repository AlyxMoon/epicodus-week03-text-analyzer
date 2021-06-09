function noInputtedWord (word, text) {
  return (
    text.trim().length === 0 ||
    word.trim().length === 0
  )
}
