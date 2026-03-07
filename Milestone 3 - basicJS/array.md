
## **Arrays in JavaScript**

### **Creating Arrays**

```javascript id="2c8p3q"
const a = [1, 2, 3, 4, 5, 6, 8];
const students = ["naba", "nj"];
const mix = [1, "aas", true, students];
```

* Arrays can contain **numbers, strings, booleans, other arrays**.
* You can **modify elements** by index:

```javascript id="7f4f0r"
mix[2] = false;
```

---

### **Array Length**

```javascript id="c7q2hk"
console.log(a.length);  // number of elements
```

---

### **Add Elements**

```javascript id="bzxk6c"
a.push(10);           // add at end
a.push(11, 12, 13);   // multiple elements at end
a.unshift(30);        // add at start
```

---

### **Remove Elements**

```javascript id="zjsa1o"
a.pop();   // remove from end
a.shift(); // remove from start
```

---

### **Searching**

```javascript id="i1y2k9"
a.indexOf(10);       // returns index of 10
a.indexOf(200);      // -1 if not found

a.includes(10);      // true / false
a.includes("naba");  // false (string not in a)
```

✅ **Conditional example**

```javascript id="ox2kfr"
a.includes(20) ? a.pop() : a.push(20);
```

---

### **Check if Array**

```javascript id="2k8mfd"
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

### **Convert Array to String**

```javascript id="j4b2qv"
a.join();       // "1,2,3,4,5,6,8"
a.join('+');    // "1+2+3+4+5+6+8"
a.join('|');    // "1|2|3|4|5|6|8"
```

---

### **Concatenate / Slice**

```javascript id="l9x7jq"
a1.concat(a2);            // merge arrays

a.slice(startIdx, endIdx); // extract portion (end not included)
```

---



