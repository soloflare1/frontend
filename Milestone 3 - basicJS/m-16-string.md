

# **JavaScript Strings**

### **Important Concept**

* **String → Immutable** (cannot change directly)
* **Array → Mutable** (can change)

Example:

```javascript
arr[2] = 300; // array value can change
```

---

# **Creating Strings**

```javascript
const a = "Naba";
const b = `Naba`;   // template string
const c = 'Naba';

const o = new String('Naba'); // string object
```

String length:

```javascript
let j = a.length;
```

---

# **String Comparison**

```javascript
const a = "Naba";
const b = "naBa";

a === b ? console.log("same") : console.log("different");
```

---

# **Case Conversion**

```javascript
console.log(a.toLowerCase()); // naba
console.log(a.toUpperCase()); // NABA
```

---

# **Searching in String**

```javascript
const d = "naBa";

console.log(d.includes('a')); // true
```

---

# **Trim (Remove Space)**

Removes **space from start and end**.

```javascript
const e = "  Naba";
const d = "Naba";

e.trim() === d.trim() ? console.log("equal") : console.log("not equal");
```

---

# **Slice**

Extract part of a string.

```javascript
e.slice(1,4); // index 1 → 3
```

---

# **Split**

Convert string → array.

```javascript
const s = "Challenge Module Progress";

console.log(s.split(' '));
// ["Challenge","Module","Progress"]

console.log(s.split('a'));
// ["Ch","llenge Module Progress"]
```

Another example:

```javascript
const s = "Challenge,Module,Progress";

console.log(s.split(','));
// ["Challenge","Module","Progress"]
```

---

# **Join**

Convert array → string.

```javascript
arr.join()
arr.join('|')
arr.join('-')
```

---

# **Concatenation (Combine Strings)**

```javascript
const first = "Nosratee";
const last = "Jahan";

const full = first + last;
const fullName = first + ' ' + last;

const fullName2 = first.concat(last);
const fullName3 = first.concat(' ').concat(last);
```

---

# **Reverse a String (3 Ways)**

### **Method 1 – for...of**

```javascript
const st = "I am a student";
let re = '';

for (const i of st) {
   re = i + re;
}

console.log(re);
```

---

### **Method 2 – for loop**

```javascript
let re = '';

for (let i = 0; i < st.length; i++) {
   re = st[i] + re;
}

console.log(re);
```

---

### **Method 3 – Built-in Methods**

```javascript
const re = st.split('').reverse().join('');
```

---

✅ **Quick Summary**

| Concept      | Meaning                 |
| ------------ | ----------------------- |
| String       | Immutable               |
| Array        | Mutable                 |
| `length`     | string size             |
| `includes()` | search text             |
| `trim()`     | remove start/end spaces |
| `slice()`    | extract part            |
| `split()`    | string → array          |
| `join()`     | array → string          |
| `concat()`   | combine strings         |

