// Initialize a 6x6 matrix with zeros
const distributionMatrix = [];
for (let i = 0; i < 6; i++) {
    distributionMatrix[i] = new Array(6).fill(0);
}

// Calculate the distribution
for (let dieA = 1; dieA <= 6; dieA++) {
    for (let dieB = 1; dieB <= 6; dieB++) {
        const sum = dieA + dieB;
        distributionMatrix[dieA - 1][dieB - 1]++; // Increment corresponding cell
    }
}

// Display the distribution matrix
console.log("Distribution of all possible combinations:");
for (let row of distributionMatrix) {
    console.log(row.join(" "));
}
