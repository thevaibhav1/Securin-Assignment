function undoom_dice(Die_A, Die_B) {
    // Function to redistribute spots on Die A and ensure no face has more than 4 spots
    function redistributeSpots(dieA, dieB) {
        let newDieA = [];
        let newDieB = dieB;

        // Redistribute spots on Die A
        for (let faceA of dieA) {
            // Ensure no face has more than 4 spots
            if (faceA <= 4) {
                newDieA.push(faceA);
            } else {
                newDieA.push(4);
            }
        }

        return { newDieA, newDieB };
    }

    // Redistribute spots on Die A
    let { newDieA, newDieB } = redistributeSpots(Die_A, Die_B);

    // Return the new configurations
    return { New_Die_A: newDieA, New_Die_B: newDieB };
}

// Example usage:
let Die_A = [1, 2, 3, 4, 5, 6];
let Die_B = [1, 2, 3, 4, 5, 6];

let { New_Die_A, New_Die_B } = undoom_dice(Die_A, Die_B);

console.log("New Die A:", New_Die_A);
console.log("New Die B:", New_Die_B);
