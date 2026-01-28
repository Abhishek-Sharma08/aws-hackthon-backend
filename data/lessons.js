const lessons = [
  {
    lessonNumber: 1,
    title: "Introduction to Variables",
    goal: "Understand what variables are and how to declare them",
    concept:
      "Variables are containers used to store data values. In JavaScript, variables can be declared using let, const, or var.",
    starterCode: "let x = ;",
    expectedOutput: "x should store a numeric value",
    commonMistakes: [
      "Using var instead of let or const",
      "Not assigning a value to the variable",
      "Using invalid variable names"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 2,
    title: "Constants with const",
    goal: "Learn how to declare constants",
    concept:
      "Constants are variables whose values cannot be reassigned. In JavaScript, const is used to declare constants.",
    starterCode: "const pi = ;",
    expectedOutput: "pi should store a constant numeric value",
    commonMistakes: [
      "Trying to reassign a const variable",
      "Not initializing const at declaration"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 3,
    title: "Basic Arithmetic Operations",
    goal: "Perform arithmetic operations in JavaScript",
    concept:
      "JavaScript supports arithmetic operators such as +, -, *, and /. These operators work with numbers.",
    starterCode: "let result = 10 * ;",
    expectedOutput: "result should be equal to 20",
    commonMistakes: [
      "Forgetting the second operand",
      "Using strings instead of numbers"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 4,
    title: "Comparison Operators",
    goal: "Compare values using comparison operators",
    concept:
      "Comparison operators like ==, ===, >, < are used to compare two values and return a boolean result.",
    starterCode: "let isEqual = 5 === ;",
    expectedOutput: "isEqual should be either true or false",
    commonMistakes: [
      "Using == instead of ===",
      "Comparing different data types unintentionally"
    ],
    difficulty: "medium"
  },
  {
    lessonNumber: 5,
    title: "Introduction to Conditional Statements",
    goal: "Make decisions using if statements",
    concept:
      "Conditional statements allow your program to execute different code blocks based on conditions.",
    starterCode: "if (age > ) {\n  console.log('Adult');\n}",
    expectedOutput: "Console should log 'Adult' when condition is true",
    commonMistakes: [
      "Missing condition value",
      "Incorrect comparison operator"
    ],
    difficulty: "medium"
  }
];

export default lessons;
