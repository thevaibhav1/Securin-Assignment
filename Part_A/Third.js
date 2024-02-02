// Initialize an object to store the count of occurrences for each sum
const sumOccurrences = {};

// Iterate through all possible combinations and count occurrences of each sum
for (let dieA = 1; dieA <= 6; dieA++) {
    for (let dieB = 1; dieB <= 6; dieB++) {
        const sum = dieA + dieB;
        if (!sumOccurrences[sum]) {
            sumOccurrences[sum] = 1;
        } else {
            sumOccurrences[sum]++;
        }
    }
}

// Calculate the probability of each sum occurring
const totalCombinations = 36; // Total number of combinations
const sumProbabilities = {};

for (let sum in sumOccurrences) {
    const probability = sumOccurrences[sum] / totalCombinations;
    sumProbabilities[sum] = probability;
}

// Display the probabilities
console.log("Probability of all possible sums:");
for (let sum in sumProbabilities) {
    console.log(`P(Sum = ${sum}) = ${sumProbabilities[sum]}`);
}
