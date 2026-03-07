
# **JavaScript Loops**

## **VS Code Console**

```javascript
console.log(i);
```

Used to **print output in the console**.

---

# **1. `for...of` Loop (Array Loop)**

Used to **loop through array values**.

```javascript
const a = [1, 2, 3, 4, 5];
console.log(a);

for (const i of a) {
    console.log(i);
}
```

Output:

```
1
2
3
4
5
```

---

# **2. `while` Loop**

Runs **until a condition becomes false**.

```javascript
let h = 2;

while (h < 5) {
    console.log("loop", h);
    h += 1;
}
```

Another example:

```javascript
let s = 2;

while (s < 5) {
    console.log("loop", s);
    s++;
}
```

---

# **3. `do...while` Loop**

Runs **at least one time**, even if the condition is false.

```javascript
let s = 2;

do {
    console.log("loop", s);
    s++;
} while (s < 5);
```

---

# **4. `for` Loop**

Used when **you know the start and end of the loop**.

Syntax:

```javascript
for (initialization; condition; update) {

}
```

Example:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

# **`break` and `continue`**

```javascript
for (let i = 0; i < 5; i++) {

   if (i % 2 == 0) continue;  // skip even numbers

   if (i == 3) break;  // stop loop completely

   console.log(i);
}
```

Explanation:

* `continue` → skip current iteration
* `break` → stop the loop

Output:

```
1
```

---

✅ **Quick Loop Guide**

| Loop         | When to Use          |
| ------------ | -------------------- |
| `for`        | iterations known     |
| `while`      | condition-based loop |
| `do...while` | run at least once    |
| `for...of`   | loop through arrays  |

