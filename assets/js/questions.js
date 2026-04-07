// Full question bank — 100 questions
// The quiz randomly picks 10 each round (see script.js pickQuestions)
var questionBank = [
  // ── Types & typeof ──────────────────────────────────────────────────────
  {
    title: "What does `typeof null` return?",
    choices: ['"null"', '"object"', '"undefined"', '"boolean"'],
    answer: '"object"'
  },
  {
    title: "What does `typeof undefined` return?",
    choices: ['"null"', '"void"', '"undefined"', '"empty"'],
    answer: '"undefined"'
  },
  {
    title: "What does `typeof []` return?",
    choices: ['"array"', '"object"', '"list"', '"undefined"'],
    answer: '"object"'
  },
  {
    title: "What does `typeof NaN` return?",
    choices: ['"NaN"', '"undefined"', '"number"', '"null"'],
    answer: '"number"'
  },
  {
    title: "What does `typeof class {}` return?",
    choices: ['"class"', '"object"', '"function"', '"undefined"'],
    answer: '"function"'
  },
  {
    title: "What does `typeof Symbol()` return?",
    choices: ['"object"', '"symbol"', '"string"', '"primitive"'],
    answer: '"symbol"'
  },
  {
    title: "What does `typeof typeof 1` return?",
    choices: ['"number"', '"string"', '"typeof"', '"undefined"'],
    answer: '"string"'
  },
  {
    title: "Which of these is NOT a primitive JavaScript type?",
    choices: ["Symbol", "BigInt", "Array", "Undefined"],
    answer: "Array"
  },
  // ── Equality & Operators ─────────────────────────────────────────────────
  {
    title: "What does the `===` operator check?",
    choices: ["Value only", "Value and type", "Reference only", "Type only"],
    answer: "Value and type"
  },
  {
    title: "What is `NaN === NaN` in JavaScript?",
    choices: ["true", "false", "undefined", "TypeError"],
    answer: "false"
  },
  {
    title: "What is `null == undefined` in JavaScript?",
    choices: ["false", "true", "TypeError", "ReferenceError"],
    answer: "true"
  },
  {
    title: "What is the result of `0.1 + 0.2 === 0.3`?",
    choices: ["true", "false", "NaN", "TypeError"],
    answer: "false"
  },
  {
    title: "What is the output of `!![]\"`?",
    choices: ["false", "true", "null", "undefined"],
    answer: "true"
  },
  {
    title: "What is the output of `![]`?",
    choices: ["true", "false", "null", "undefined"],
    answer: "false"
  },
  {
    title: "What is the output of `+[]`?",
    choices: ["NaN", "0", "undefined", "[]"],
    answer: "0"
  },
  {
    title: "What does `[] == false` evaluate to?",
    choices: ["false", "true", "TypeError", "undefined"],
    answer: "true"
  },
  {
    title: "What is the output of `2 ** 10`?",
    choices: ["20", "1024", "210", "100"],
    answer: "1024"
  },
  // ── Variables & Scope ────────────────────────────────────────────────────
  {
    title: "What is the scope of a variable declared with `let`?",
    choices: ["Global", "Function", "Block", "Module"],
    answer: "Block"
  },
  {
    title: "Which statement is true about `var`?",
    choices: [
      "It is block-scoped",
      "It cannot be redeclared",
      "It is hoisted and initialized to undefined",
      "It was added in ES6"
    ],
    answer: "It is hoisted and initialized to undefined"
  },
  {
    title: "What is hoisting in JavaScript?",
    choices: [
      "Moving code to the end of the file",
      "Declarations are moved to the top of their scope",
      "Removing unused variables",
      "Compiling JS to bytecode"
    ],
    answer: "Declarations are moved to the top of their scope"
  },
  {
    title: "What is the default value of a function parameter if not provided?",
    choices: ["null", "0", "undefined", '""'],
    answer: "undefined"
  },
  {
    title: "What keyword creates a block-scoped, reassignable variable?",
    choices: ["var", "let", "const", "static"],
    answer: "let"
  },
  {
    title: "What keyword creates a block-scoped, non-reassignable binding?",
    choices: ["var", "let", "const", "final"],
    answer: "const"
  },
  // ── Functions & Closures ─────────────────────────────────────────────────
  {
    title: "What is a closure?",
    choices: [
      "A way to close the browser window",
      "A function that retains access to its outer scope",
      "A method to end a loop early",
      "A type of error handler"
    ],
    answer: "A function that retains access to its outer scope"
  },
  {
    title: "What is an IIFE?",
    choices: [
      "A type of for loop",
      "An Immediately Invoked Function Expression",
      "An internal error type",
      "A module import shorthand"
    ],
    answer: "An Immediately Invoked Function Expression"
  },
  {
    title: "What is `this` inside an arrow function?",
    choices: [
      "The arrow function itself",
      "Always the global object",
      "Inherited from the enclosing lexical scope",
      "Always undefined"
    ],
    answer: "Inherited from the enclosing lexical scope"
  },
  {
    title: "What does the `async` keyword do to a function?",
    choices: [
      "Makes it run faster",
      "Makes it return a Promise",
      "Makes it synchronous",
      "Adds automatic error handling"
    ],
    answer: "Makes it return a Promise"
  },
  {
    title: "What does `await` do inside an async function?",
    choices: [
      "Cancels the promise",
      "Pauses execution until the Promise resolves",
      "Converts a callback to a promise",
      "Runs the function in a worker thread"
    ],
    answer: "Pauses execution until the Promise resolves"
  },
  {
    title: "What is a generator function?",
    choices: [
      "A function that creates arrays automatically",
      "A function that can pause and resume execution",
      "A class constructor shorthand",
      "An async function alternative"
    ],
    answer: "A function that can pause and resume execution"
  },
  // ── Arrays ───────────────────────────────────────────────────────────────
  {
    title: "Which method removes and returns the LAST element of an array?",
    choices: ["shift()", "unshift()", "pop()", "push()"],
    answer: "pop()"
  },
  {
    title: "Which method adds one or more elements to the END of an array?",
    choices: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    title: "Which method removes and returns the FIRST element of an array?",
    choices: ["pop()", "push()", "shift()", "unshift()"],
    answer: "shift()"
  },
  {
    title: "Which method adds elements to the BEGINNING of an array?",
    choices: ["push()", "pop()", "shift()", "unshift()"],
    answer: "unshift()"
  },
  {
    title: "Which array method returns a NEW array with each element transformed?",
    choices: ["forEach()", "map()", "filter()", "reduce()"],
    answer: "map()"
  },
  {
    title: "Which array method returns elements that pass a test function?",
    choices: ["map()", "find()", "filter()", "some()"],
    answer: "filter()"
  },
  {
    title: "What does `Array.prototype.reduce()` do?",
    choices: [
      "Filters elements",
      "Transforms each element into a new array",
      "Accumulates elements into a single value",
      "Removes duplicate values"
    ],
    answer: "Accumulates elements into a single value"
  },
  {
    title: "What does `Array.prototype.find()` return?",
    choices: [
      "The index of the first match",
      "All matching elements",
      "The first element that passes the test",
      "A count of matches"
    ],
    answer: "The first element that passes the test"
  },
  {
    title: "What does `Array.prototype.indexOf()` return if the element is not found?",
    choices: ["null", "0", "-1", "undefined"],
    answer: "-1"
  },
  {
    title: "What does `Array.prototype.splice()` do?",
    choices: [
      "Creates a shallow copy",
      "Adds or removes elements in place",
      "Splits the array into chunks",
      "Joins two arrays"
    ],
    answer: "Adds or removes elements in place"
  },
  {
    title: "What does `Array.prototype.slice()` return?",
    choices: [
      "The original array modified",
      "A shallow copy of a portion of the array",
      "The removed elements",
      "A sorted version"
    ],
    answer: "A shallow copy of a portion of the array"
  },
  {
    title: "What does `Array.prototype.every()` return?",
    choices: [
      "The first matching element",
      "true if ALL elements pass the test",
      "true if ANY element passes",
      "An array of passing elements"
    ],
    answer: "true if ALL elements pass the test"
  },
  {
    title: "What does `Array.prototype.some()` return?",
    choices: [
      "true if ALL elements pass",
      "true if ANY element passes the test",
      "The first matching element",
      "A filtered array"
    ],
    answer: "true if ANY element passes the test"
  },
  {
    title: "What does `Array.isArray([])` return?",
    choices: ["false", "null", "undefined", "true"],
    answer: "true"
  },
  {
    title: "What does `Array.from('abc')` return?",
    choices: [
      '["abc"]',
      '["a","b","c"]',
      "TypeError",
      '"abc"'
    ],
    answer: '["a","b","c"]'
  },
  {
    title: "What does `Array.prototype.flat()` do?",
    choices: [
      "Sorts nested arrays",
      "Creates a new array with sub-arrays flattened",
      "Removes duplicates",
      "Converts the array to a string"
    ],
    answer: "Creates a new array with sub-arrays flattened"
  },
  {
    title: "What does `Array.prototype.includes()` do?",
    choices: [
      "Returns the index of an element",
      "Returns true if the array contains the value",
      "Filters matching elements",
      "Returns a count of matches"
    ],
    answer: "Returns true if the array contains the value"
  },
  {
    title: "What does `Array.prototype.sort()` do by default?",
    choices: [
      "Sorts elements numerically",
      "Sorts by insertion order",
      "Sorts elements as strings in ascending order",
      "Returns a new sorted array"
    ],
    answer: "Sorts elements as strings in ascending order"
  },
  {
    title: "What does `Array.prototype.at(-1)` return?",
    choices: ["undefined", "The first element", "The last element", "TypeError"],
    answer: "The last element"
  },
  {
    title: "What does `Array.prototype.flatMap()` do?",
    choices: [
      "Same as flat()",
      "Maps each element then flattens one level",
      "Flattens then maps",
      "Filters and flattens"
    ],
    answer: "Maps each element then flattens one level"
  },
  {
    title: "What does `Array.prototype.fill()` do?",
    choices: [
      "Checks if all elements match",
      "Fills all (or a range of) elements with a static value",
      "Creates a new array",
      "Returns the element count"
    ],
    answer: "Fills all (or a range of) elements with a static value"
  },
  // ── Objects ───────────────────────────────────────────────────────────────
  {
    title: "What does `Object.keys()` return?",
    choices: [
      "The values of an object",
      "The entries of an object",
      "An array of own enumerable property names",
      "The prototype chain"
    ],
    answer: "An array of own enumerable property names"
  },
  {
    title: "What does `Object.entries()` return?",
    choices: [
      "Array of keys",
      "Array of values",
      "Array of [key, value] pairs",
      "An iterator object"
    ],
    answer: "Array of [key, value] pairs"
  },
  {
    title: "What does `Object.freeze()` do?",
    choices: [
      "Clones an object",
      "Prevents properties from being added or modified",
      "Sorts the object's keys",
      "Converts the object to JSON"
    ],
    answer: "Prevents properties from being added or modified"
  },
  {
    title: "What does `Object.assign()` do?",
    choices: [
      "Deep clones an object",
      "Copies own enumerable properties from sources to a target",
      "Freezes an object",
      "Merges two prototypes"
    ],
    answer: "Copies own enumerable properties from sources to a target"
  },
  {
    title: "What does `Object.create(null)` create?",
    choices: ["null", "An object with no prototype", "An empty class", "A frozen object"],
    answer: "An object with no prototype"
  },
  {
    title: "What does `Object.getPrototypeOf(obj)` return?",
    choices: ["The obj itself", "The prototype of obj", "null always", "obj's constructor function"],
    answer: "The prototype of obj"
  },
  {
    title: "What does the `in` operator check?",
    choices: [
      "If a value exists in an array",
      "If a property exists in an object or its prototype chain",
      "If a variable is defined",
      "If a module is imported"
    ],
    answer: "If a property exists in an object or its prototype chain"
  },
  // ── Strings ───────────────────────────────────────────────────────────────
  {
    title: "What is the output of `\"5\" + 3` in JavaScript?",
    choices: ["8", '"53"', "TypeError", '"8"'],
    answer: '"53"'
  },
  {
    title: "What does `\"5\" - 3` return?",
    choices: ['"53"', "2", "NaN", "TypeError"],
    answer: "2"
  },
  {
    title: "What does `String.prototype.trim()` do?",
    choices: [
      "Removes all spaces in a string",
      "Removes leading and trailing whitespace",
      "Converts to lowercase",
      "Splits into an array"
    ],
    answer: "Removes leading and trailing whitespace"
  },
  {
    title: "What does `String.prototype.includes()` return?",
    choices: ["The index of the substring", "true or false", "The matched substring", "An array"],
    answer: "true or false"
  },
  {
    title: "What does `String.prototype.split()` do?",
    choices: [
      "Joins array elements into a string",
      "Divides a string into an array of substrings",
      "Removes characters from a string",
      "Converts a string to a number"
    ],
    answer: "Divides a string into an array of substrings"
  },
  {
    title: "Which method converts an array to a string with a separator?",
    choices: ["toString()", "concat()", "join()", "flatten()"],
    answer: "join()"
  },
  {
    title: "What does `String.prototype.repeat(3)` do on `\"ab\"`?",
    choices: ['"ab3"', '"ababab"', '"ab ab ab"', "TypeError"],
    answer: '"ababab"'
  },
  {
    title: "What does `String.prototype.padStart(5, '0')` do on `\"42\"`?",
    choices: ['"42000"', '"00042"', '"4200000"', '"042"'],
    answer: '"00042"'
  },
  // ── Numbers & Math ────────────────────────────────────────────────────────
  {
    title: "What does `parseInt(\"10px\")` return?",
    choices: ["NaN", '"10"', "10", "TypeError"],
    answer: "10"
  },
  {
    title: "What does `isNaN(\"hello\")` return?",
    choices: ["false", "true", '"NaN"', "TypeError"],
    answer: "true"
  },
  {
    title: "What does `Number.isFinite(Infinity)` return?",
    choices: ["true", "false", "undefined", "TypeError"],
    answer: "false"
  },
  {
    title: "What does `Number.isInteger(4.0)` return?",
    choices: ["false", "true", "undefined", "NaN"],
    answer: "true"
  },
  {
    title: "What is the output of `Math.floor(4.9)`?",
    choices: ["5", "4", "4.9", "NaN"],
    answer: "4"
  },
  {
    title: "What does `Boolean(0)` return?",
    choices: ["true", "false", "0", "undefined"],
    answer: "false"
  },
  // ── Promises & Async ──────────────────────────────────────────────────────
  {
    title: "What does `Promise.all()` do?",
    choices: [
      "Runs promises sequentially",
      "Resolves when ANY promise resolves",
      "Resolves when ALL promises resolve or rejects on first rejection",
      "Cancels all promises"
    ],
    answer: "Resolves when ALL promises resolve or rejects on first rejection"
  },
  {
    title: "What does `Promise.race()` do?",
    choices: [
      "Waits for all promises to settle",
      "Resolves or rejects with the first settled promise",
      "Runs promises in sequence",
      "Cancels all losing promises"
    ],
    answer: "Resolves or rejects with the first settled promise"
  },
  {
    title: "What does `Promise.allSettled()` do?",
    choices: [
      "Rejects on first failure",
      "Resolves when all promises settle, regardless of outcome",
      "Resolves on first success",
      "Same as Promise.all()"
    ],
    answer: "Resolves when all promises settle, regardless of outcome"
  },
  // ── ES6+ Features ─────────────────────────────────────────────────────────
  {
    title: "Which ES6 feature lets you extract values from arrays or objects?",
    choices: ["Spread operator", "Template literals", "Destructuring", "Rest parameters"],
    answer: "Destructuring"
  },
  {
    title: "What does the spread operator (`...`) do?",
    choices: [
      "Multiplies array values",
      "Creates a new generator function",
      "Expands an iterable into individual elements",
      "Declares a rest parameter only"
    ],
    answer: "Expands an iterable into individual elements"
  },
  {
    title: "What is optional chaining (`?.`) used for?",
    choices: [
      "A ternary shorthand",
      "Accessing nested properties without throwing if undefined/null",
      "A string concatenation operator",
      "A destructuring pattern"
    ],
    answer: "Accessing nested properties without throwing if undefined/null"
  },
  {
    title: "What does the nullish coalescing operator (`??`) return?",
    choices: [
      "The right side if the left side is falsy",
      "The right side only if the left side is null or undefined",
      "The left side if truthy, otherwise throws",
      "Checks for NaN on both sides"
    ],
    answer: "The right side only if the left side is null or undefined"
  },
  {
    title: "What is a tagged template literal?",
    choices: [
      "A string prefixed with a label",
      "A function called with template literal parts as arguments",
      "A CSS-in-JS naming pattern",
      "An HTML comment style"
    ],
    answer: "A function called with template literal parts as arguments"
  },
  {
    title: "What does `for...of` iterate over?",
    choices: [
      "An object's own enumerable property names",
      "Iterable values such as arrays, strings, maps, and sets",
      "An object's prototype chain",
      "Only arrays"
    ],
    answer: "Iterable values such as arrays, strings, maps, and sets"
  },
  {
    title: "What does `for...in` iterate over?",
    choices: [
      "Values of an iterable",
      "An object's own enumerable property names",
      "Array indices only",
      "An object's prototype chain only"
    ],
    answer: "An object's own enumerable property names"
  },
  // ── Prototype & Classes ───────────────────────────────────────────────────
  {
    title: "What keyword is used to create a class in JavaScript?",
    choices: ["prototype", "type", "class", "constructor"],
    answer: "class"
  },
  {
    title: "What does `new` do when used with a constructor function?",
    choices: [
      "Declares a new variable",
      "Creates an instance of a constructor function",
      "Imports a new module",
      "Creates a shallow copy of an object"
    ],
    answer: "Creates an instance of a constructor function"
  },
  {
    title: "What is prototype-based inheritance?",
    choices: [
      "Objects inherit only from classes",
      "Objects can inherit properties and methods from other objects via the prototype chain",
      "Inheritance always requires the `extends` keyword",
      "JavaScript has no inheritance"
    ],
    answer: "Objects can inherit properties and methods from other objects via the prototype chain"
  },
  {
    title: "What is a Symbol in JavaScript?",
    choices: [
      "A mathematical constant",
      "A unique and immutable primitive value",
      "A deprecated string type",
      "A type of object key only"
    ],
    answer: "A unique and immutable primitive value"
  },
  // ── JSON & Storage ────────────────────────────────────────────────────────
  {
    title: "What does `JSON.stringify()` do?",
    choices: [
      "Parses a JSON string into a JS value",
      "Converts a JS value into a JSON string",
      "Validates whether a string is valid JSON",
      "Minifies a JSON file"
    ],
    answer: "Converts a JS value into a JSON string"
  },
  {
    title: "What does `JSON.parse()` do?",
    choices: [
      "Converts a JS object to JSON",
      "Parses a JSON string into a JavaScript value",
      "Validates a JSON schema",
      "Stringifies nested objects"
    ],
    answer: "Parses a JSON string into a JavaScript value"
  },
  {
    title: "What does `localStorage.setItem(key, value)` do?",
    choices: [
      "Reads a value from storage",
      "Stores a string key-value pair in local storage",
      "Deletes a key from storage",
      "Clears all storage"
    ],
    answer: "Stores a string key-value pair in local storage"
  },
  // ── DOM & Events ──────────────────────────────────────────────────────────
  {
    title: "What does `querySelectorAll()` return?",
    choices: [
      "The first matching element",
      "A live HTMLCollection",
      "A static NodeList",
      "null if no match"
    ],
    answer: "A static NodeList"
  },
  {
    title: "What does `event.preventDefault()` do?",
    choices: [
      "Stops event bubbling up the DOM",
      "Prevents the default browser action for an event",
      "Removes the event listener",
      "Cancels a pending promise"
    ],
    answer: "Prevents the default browser action for an event"
  },
  {
    title: "What is event bubbling?",
    choices: [
      "An event fires only on the target element",
      "An event propagates upward through ancestor elements",
      "An event fires before reaching the target",
      "A technique to prevent duplicate events"
    ],
    answer: "An event propagates upward through ancestor elements"
  },
  // ── Async & Event Loop ────────────────────────────────────────────────────
  {
    title: "What is the JavaScript event loop?",
    choices: [
      "A special type of for loop",
      "The mechanism that processes the callback queue alongside the call stack",
      "A CSS animation loop",
      "A built-in debugging tool"
    ],
    answer: "The mechanism that processes the callback queue alongside the call stack"
  },
  {
    title: "What does `setTimeout(fn, 0)` do?",
    choices: [
      "Calls fn immediately, synchronously",
      "Queues fn to run after the current call stack is clear",
      "Never calls fn",
      "Calls fn before the next repaint"
    ],
    answer: "Queues fn to run after the current call stack is clear"
  },
  // ── Error Handling ────────────────────────────────────────────────────────
  {
    title: "What is the purpose of `try...catch`?",
    choices: [
      "To loop through arrays",
      "To handle runtime errors gracefully",
      "To define async code blocks",
      "To create closures"
    ],
    answer: "To handle runtime errors gracefully"
  },
  // ── Miscellaneous / Advanced ──────────────────────────────────────────────
  {
    title: "What does `globalThis` refer to?",
    choices: [
      "The current function's scope",
      "The global object regardless of environment",
      "The outermost object in the prototype chain",
      "The window object only"
    ],
    answer: "The global object regardless of environment"
  },
  {
    title: "What is a WeakMap?",
    choices: [
      "A map with weakly-typed values",
      "A Map where keys must be objects and are weakly referenced",
      "A deprecated version of Map",
      "A read-only Map"
    ],
    answer: "A Map where keys must be objects and are weakly referenced"
  },
  {
    title: "What does `structuredClone()` do?",
    choices: [
      "Shallow copies an object",
      "Creates a deep clone of a value",
      "Freezes an object recursively",
      "Compares two objects by value"
    ],
    answer: "Creates a deep clone of a value"
  },
  {
    title: "What does `Proxy` allow you to do?",
    choices: [
      "Compress objects for network transfer",
      "Define custom behavior for fundamental object operations",
      "Create objects that are read-only",
      "Cache the result of expensive computations"
    ],
    answer: "Define custom behavior for fundamental object operations"
  },
  {
    title: "What does `null` represent in JavaScript?",
    choices: [
      "An undeclared variable",
      "An intentional absence of any object value",
      "A variable that was never assigned",
      "An empty string"
    ],
    answer: "An intentional absence of any object value"
  },
  {
    title: "What does `Array.prototype.keys()` return?",
    choices: [
      "The array's values",
      "The array's keys as a plain array",
      "An iterator of the array's indices",
      "The object keys of the array"
    ],
    answer: "An iterator of the array's indices"
  },
  {
    title: "Which method converts a number to a string in a given base?",
    choices: ["toString(base)", "toBase()", "parseInt(num, base)", "Number.from(base)"],
    answer: "toString(base)"
  },
  {
    title: "What does `delete obj.prop` do?",
    choices: [
      "Sets obj.prop to null",
      "Removes the property from the object",
      "Freezes the property",
      "Makes the property undefined but keeps it"
    ],
    answer: "Removes the property from the object"
  },
  {
    title: "What does `Array.prototype.reduceRight()` do?",
    choices: [
      "Sorts from right to left",
      "Reduces the array from right to left",
      "Removes elements from the right",
      "Returns the rightmost element"
    ],
    answer: "Reduces the array from right to left"
  },
  {
    title: "What is a microtask in JavaScript?",
    choices: [
      "A very small setTimeout",
      "A task queued by Promises that runs before the next macrotask",
      "A Web Worker task",
      "A synchronous function call"
    ],
    answer: "A task queued by Promises that runs before the next macrotask"
  }
];
