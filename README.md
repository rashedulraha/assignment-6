## <!--! 🌴 API Endpoints -->

1. Get 🌴All Plants

```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>

```bash
https://openapi.programming-hero.com/api/categories
```

3. Get 🌴plants by categories <br/>

```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```

<!--  ! ans question -->

#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()?

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

<!--  ? and question number one -->

# JavaScript ES6 Questions & Answers

## 1) What is the difference between var, let, and const?

- **var**

  - Function scoped
  - Can be re-declared and re-assigned
  - Old way, should be avoided

- **let**

  - Block scoped
  - Cannot be re-declared, but can be re-assigned
  - Used for variables that may change

- **const**
  - Block scoped
  - Cannot be re-declared or re-assigned
  - Used for constants (fixed values)

---

## 2) What is the difference between map(), forEach(), and filter()?

- **map()**

  - Returns a **new array** with modified values.
  - Example: `numbers.map(n => n * 2)`

- **forEach()**

  - Loops through elements but **does not return a new array**.
  - Example: `numbers.forEach(n => console.log(n))`

- **filter()**
  - Returns a **new array with elements that match a condition**.
  - Example: `numbers.filter(n => n > 5)`

---

## 3) What are arrow functions in ES6?

- A shorter syntax for writing functions.
- Do not bind their own `this`, which makes them useful in callbacks.

Example:

```js
// normal function
function add(a, b) {
  return a + b;
}

// arrow function
const add = (a, b) => a + b;
```

---

## 4) How does destructuring assignment work in ES6?

- It allows unpacking values from arrays or objects into separate variables.

Example (Array):

```js
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
// a=10, b=20, c=30
```

Example (Object):

```js
const person = { name: "Rashed", age: 22 };
const { name, age } = person;
// name="Rashed", age=22
```

---

## 5) Explain template literals in ES6. How are they different from string concatenation?

- Template literals use backticks (`` ` ``) instead of quotes.
- Allow **string interpolation** and **multi-line strings**.

Example (Concatenation):

```js
const name = "Rashed";
const msg = "Hello " + name + ", welcome!";
```

Example (Template Literal):

```js
const name = "Rashed";
const msg = `Hello ${name}, welcome!`;
```

**Difference:**

- Easier to read and write
- Supports multi-line without `\n`
- Variables can be embedded directly using `${}`
