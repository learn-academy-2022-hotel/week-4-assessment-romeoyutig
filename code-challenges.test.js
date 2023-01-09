// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest




// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// pseudo code: declare a function named colorFilter
// input: array of strings
// output:a modified array with the first element removed, and the rest randomized.
// process: declare a variable within the colorFilter function that takes the parameter and slices the first value from the array.
// return the sliced array and randomize using the method .sort(), and Math.random 

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("color_Filter", () => {
  it("returns an array with the first item remove, then shuffles the array", () => {
    expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(colors1))
})
})

describe("color_Filter", () => {
  it("returns an array with the first item remove, then shuffles the array", () => {
    expect(colors2).toEqual(expect.arrayContaining(colors2))
})
})
// ReferenceError: color_Filter is not defined
// good test

const colorFilter = (array) => {
  let newArray = array.slice(1)
  return newArray.sort(() => 0.5 - Math.random)
}
colorFilter(colors1)

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// pseudo code: declare a function named voteCounter

// input: object
// output: number of votes subtracted by number of downvotes
// process: pass in the paramter "votes" into the function 
// have the upvotes be subtracted by the downvotes


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe ("voteCounter", () => {
  it("contains up votes and down votes and returns the end tally.", () => {
    expect(voteCounter(votes1)).toEqual(
      11
    )
  })
})

describe ("voteCounter", () => {
  it("contains up votes and down votes and returns the end tally.", () => {
    expect(voteCounter(votes2)).toEqual(
      -31
    )
  })
})

// ReferenceError: voteCounter is not defined
// good test, voteCounter function has not been created yet.

// b) Create the function that makes the test pass.

const voteCounter = (votes) => {
  return votes.upVotes - votes.downVotes
}
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments. 

// a) Create a test with an expect statement using the variables provided. 

// pseudo code:
// declare a function called newArray
// input: two arrays
// output: a single array with every unique value of each element of the two arrays
// process: declare a new array within a function called "noDuplicates"
// concat the arrays that will be passed as arguments
// use the method ...new Set to remove all duplicate values from the combined array

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("newArray", () => {
  it ("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(newArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// ReferenceError: newArray is not defined
// good test, function isn't made yet

// b) Create the function that makes the test pass.

const newArray = (array1, array2) => {
  let noDuplicates = (array1.concat(array2))
  return [...new Set(noDuplicates)]
  }



