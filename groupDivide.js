/**
 * Divides an array of people into groups of two.
 * @param {Array} people An array of people to be divided into groups.
 * @returns {Array} An array of arrays representing groups of two people each.
 */
function divideIntoGroups(people) {
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

// Example usage:
const people = ["Tomiris", "Aruzhan", "Daniyar", "Aida", "Dilnaz", "Margulan"];
const groups = divideIntoGroups(people);
console.log("Groups:", groups);
