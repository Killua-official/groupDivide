const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Divides an array of people into groups of two.
 * @param {Array} people An array of people to be divided into groups.
 * @returns {Array} An array of arrays representing groups of two people each.
 * @throws {Error} If the number of people is odd.
 */
function divideIntoGroups(people) {
    //Add a console.log statement  to indicate  the function  has been called 
    console.log("Dividing people into  groups...");

    if (people.length % 2 !== 0) {
        throw new Error("Number of people must be even.");
    }

    // Shuffle the array to randomize the grouping
    const shuffledPeople = shuffleArray(people);

    const groups = [];
    for (let i = 0; i < shuffledPeople.length; i += 2) {
        // Create a group with two people
        const group = shuffledPeople.slice(i, i + 2);
        groups.push(group);
    }

    return groups;
}

/**
 * Shuffles the elements of an array using the Fisher-Yates algorithm.
 * @param {Array} array The array to be shuffled.
 * @returns {Array} The shuffled array.
 */
function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Prompt user for input
rl.question('Enter names of people (separated by commas): ', (input) => {

    // Add a console.log statement to indicate user input is being processed
    console.log("Processing user input...");

    const people = input.split(',').map(name => name.trim());
    try {
        const groups = divideIntoGroups(people);
        console.log("Groups:", groups);
    } catch (error) {
        console.error("Error:", error.message);
    }
    rl.close();
});

