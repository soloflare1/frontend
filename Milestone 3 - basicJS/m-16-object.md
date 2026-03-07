

# **JavaScript Object**

### **Definition**

* **Object → unordered, non-primitive data type**
* Stores **key–value pairs**

---

# **Creating an Object**

```javascript
const student = {
   name: 'Nosratee',
   ID: 5,
   CGPA: 3.93,
   LT: "3-1",
   isCurrent: true,

   project: {
      projectName: "Taskly",
      tech: "django"
   },

   studying: function () {
      console.log("study in CSE");
   },

   "Sem GPAs": [3.90, 3.94, 4.00],

   unique: {
      color: "blue"
   },

   GPAs: [3.90, 3.94, 4.00]
};
```

---

# **Access Object Properties**

### **Dot Notation**

```javascript
student.studying();            // study in CSE
console.log(student.CGPA);     // 3.93
console.log(student.project.projectName);
```

---

### **Bracket Notation**

```javascript
console.log(student['CGPA']);  // 3.93
console.log(student['Sem GPAs']);
```

Use **bracket notation** when:

* key contains **space**
* key is **dynamic**

---

# **Updating Values**

```javascript
student.LT = '3-2';

student.GPAs[2] = 4.00;
```

Bracket update:

```javascript
student['LT'] = '3-2';
```

---

# **Store Value in Variable**

```javascript
const result = student['CGPA'];
console.log(result); // 3.93
```

---

# **Object Keys & Values**

```javascript
const keys = Object.keys(student);
console.log(keys);

const values = Object.values(student);
console.log(values);
```

---

# **Delete Property**

```javascript
delete student['Sem GPAs'];
delete student.unique;
```

---

# **Loop Through Object**

### **for...in**

Used for **objects**

```javascript
for (const i in student) {
   console.log(i);          // key
   console.log(student[i]); // value
}
```

---

### **Using keys + for...of**

```javascript
const keys = Object.keys(student);

for (const i of keys) {
   console.log(i, student[i]);
}
```

---

# **Creating Objects in Different Ways**

### **1. Object Literal (Most common)**

```javascript
const pen = {
   brand: 'econo',
   price: 10,
   color: 'black'
};
```

---

### **2. Using Constructor**

```javascript
const pencil = new Object();
console.log(pencil);
```

---

### **3. Using Object.create()**

```javascript
const rubber = Object.create({});
console.log(rubber);
```

---

# **Quick Summary**

| Concept           | Use             |
| ----------------- | --------------- |
| Object            | key-value data  |
| Dot notation      | `obj.key`       |
| Bracket notation  | `obj['key']`    |
| `Object.keys()`   | get all keys    |
| `Object.values()` | get all values  |
| `delete`          | remove property |
| `for...in`        | loop object     |

---

✅ **Important rule**

```
for...of → arrays
for...in → objects
```
