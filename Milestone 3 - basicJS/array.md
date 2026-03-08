
# **Arrays in JavaScript**

## **Creating Arrays**

```javascript
const a = [1, 2, 3, 4, 5, 6, 8];
const students = ["naba", "nj"];
const mix = [1, "aas", true, students];
```

Arrays can contain:

* numbers
* strings
* booleans
* other arrays

Modify element:

```javascript
mix[2] = false;
```

---

# **Array Length**

```javascript
console.log(a.length);
```

---

# **Add Elements**

```javascript
a.push(10);        // add at end
a.push(11,12,13);  // add multiple

a.unshift(30);     // add at beginning
```

---

# **Remove Elements**

```javascript
a.pop();    // remove from end
a.shift();  // remove from start
```

---

# **Searching**

```javascript
a.indexOf(10);   // index of element
a.indexOf(200);  // -1 if not found

a.includes(10);  // true
a.includes("naba"); // false
```

Conditional example:

```javascript
a.includes(20) ? a.pop() : a.push(20);
```

---

# **Check if Array**

```javascript
const name = "Naba";
const n = 10;
const d = [];
const h = "[]";

console.log(Array.isArray(name)); // false
console.log(Array.isArray(n));    // false
console.log(Array.isArray(a));    // true
console.log(Array.isArray(d));    // true
console.log(Array.isArray(h));    // false
```

---

# **Convert Array → String**

```javascript
a.join();     // "1,2,3,4,5,6,8"
a.join('+');  // "1+2+3+4+5+6+8"
a.join('|');  // "1|2|3|4|5|6|8"
```

---

# **Concat & Slice**

```javascript
a1.concat(a2);           // merge arrays

a.slice(start, end);     // end not included
```

---

# **Reverse Array**

### **Method 1 (Built-in)**

```javascript
a.reverse();
```

⚠ Changes **original array**

---

### **Method 2 (unshift)**

```javascript
const b = [];

for (const i of a) {
   b.unshift(i);
}
```

---

### **Method 3 (reverse loop)**

```javascript
const c = [];

for (let i = a.length - 1; i >= 0; i--) {
   c.push(a[i]);
}
```

---

# **Sort Array**

Default sort (problematic in JS):

```javascript
a.sort();
```

⚠ JS sorts **as strings**, not numbers.

Example problem:

```
[1, 2, 10, 5]
↓
[1,10,2,5]
```

---

# **Correct Numeric Sort**

### **Ascending**

```javascript
a.sort(function(a, b){
   return a - b;
});
```

---

### **Descending**

```javascript
a.sort(function(a, b){
   return b - a;
});
```

---

# **Sort Without Changing Original Array**

Use **spread operator**

### Ascending

```javascript
[...a].sort(function(a,b){
   return a - b;
});
```

### Descending

```javascript
[...a].sort(function(a,b){
   return b - a;
});
```

---

# **Quick Summary**

| Method       | Purpose        |
| ------------ | -------------- |
| `push()`     | add end        |
| `unshift()`  | add start      |
| `pop()`      | remove end     |
| `shift()`    | remove start   |
| `indexOf()`  | find index     |
| `includes()` | check element  |
| `join()`     | array → string |
| `slice()`    | extract part   |
| `reverse()`  | reverse array  |
| `sort()`     | sort array     |

---

✅ **Important exam concept**

```
sort() treats numbers as strings
→ use (a,b) => a-b
```

