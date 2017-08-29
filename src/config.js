export const apiKey = 'abc123'
export const url = 'http://wesbos.com'
export function sayHi (name) {
    console.log(`hello there ${name}`)
}
// 局部作用域
const age = 100
const dog = 'snickers'
export { age as old, dog }