// 1. Create an Array of User Objects
const users = [
    { name: "Alice", age: 30, hobbies: ["Reading", "Cycling", "Painting"] },
    { name: "Bob", age: 25, hobbies: ["Gaming", "Cooking", "Hiking"] },
    { name: "Charlie", age: 35, hobbies: ["Photography", "Traveling", "Swimming"] }
];

// 2. Destructuring to Extract Properties and Display Them
users.forEach(({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
});

// 3. Spread Operator to Combine All Hobbies Arrays
const allHobbies = [...users[0].hobbies, ...users[1].hobbies, ...users[2].hobbies];

// 4. Display Combined Hobbies Array
console.log("All hobbies combined:", allHobbies);
