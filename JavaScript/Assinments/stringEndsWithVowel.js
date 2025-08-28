function main() {
  const inputString = readLine();
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let str = inputString.toUpperCase()

if (str.endsWith('E') || str.endsWith('U') || str.endsWith('I') || str.endsWith('O') || str.endsWith('A')) {
    console.log('true')
} else {
    console.log('false')
} 
}