function main() {
  const candidatesList = JSON.parse(readLine().replace(/'/g, '"'));
  
  const selectedCandidates = candidatesList.filter(candidate => {
      return candidate.points.every(point => point > 75);
  }).map(candidate=>candidate.name);
  console.log(selectedCandidates);


}