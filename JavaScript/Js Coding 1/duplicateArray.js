function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num); // already seen → duplicate
    } else {
      seen.add(num);       // first time → add to seen
    }
  }

  return [...duplicates]; // convert Set to array
}

// Example usage
const numbers = [4, 7, 2, 4, 9, 7, 2, 10, 4];
console.log("Duplicates:", findDuplicates(numbers));
