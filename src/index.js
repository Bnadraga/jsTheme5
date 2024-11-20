// import { nanoid } from "nanoid";

// const id  = nanoid(4)
// console.log(id)

import { customAlphabet } from "nanoid";

const alphabet = 'abc123'
const customNanoid = customAlphabet(alphabet, 5)
const id = customNanoid()
console.log(id)