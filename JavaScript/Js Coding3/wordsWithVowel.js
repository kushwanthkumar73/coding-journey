function main() {
  const wordsList = JSON.parse(readLine().replace(/'/g, '"'));
  const vowelsList = ["a", "e", "i", "o", "u"];

/* Please do not modify anything above this line */

  const filteredWords = wordsList.filter(word => {
      const lower = word.toLowerCase();
      return vowelsList.some(vowel => lower.includes(vowel))
  })
  console.log(filteredWords)
  
}