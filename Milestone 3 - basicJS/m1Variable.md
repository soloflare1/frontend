
## **Milestone-3 : M-1 (JavaScript Basics)**

### **JavaScript Uses**

* Add interactivity to websites
* Dynamically update content
* Control multimedia
* Animate images
* HL & interpreted
* Works with the internet

---

### **Naming Conventions**

| Case Type   | Example | Notes         |
| ----------- | ------- | ------------- |
| Snake Case  | `I_am`  | Rarely used   |
| Camel Case  | `iAm`   | ✅ Recommended |
| Pascal Case | `IAm`   | For classes   |

---

### **Variables**

* **Represents**: named storage for data
* **Types**:

  * `var` → variable (can change)
  * `const` → constant (fixed)

```javascript
var age = 20;
age = 21;

const birthday = 12;

var birth = "12 April";
var isOpen = true;

console.log(age);        // 21
console.log(typeof age); // number
```

---

### **Operators**

#### **Addition vs String Concatenation**

```javascript
var age = 20;
var d = 20;
var j = '20';

console.log(age + d);  // 40
console.log(age + j);  // "2020"
console.log('Naba' + 'Nj'); // "NabaNj"
```

#### **Subtraction, Multiplication, Division**

```javascript
console.log(40 - '20'); // 20
console.log('40' - 20); // 20
```

---

### **Type Conversion**

```javascript
var j = parseInt('20');      // 20
var jd = parseInt('20.33');  // 20
var jd2 = parseFloat('20.33'); // 20.33
var j2 = parseInt('abc');    // NaN
var j3 = 50/0;               // Infinity

Number("123");    // 123
Number("12.34");  // 12.34
Number("abc");    // NaN
Number(true);     // 1
Number(false);    // 0
```

---

### **Check for NaN**

```javascript
isNaN(NaN);      // true
isNaN("123");    // false
isNaN("12a");    // true
isNaN(123);      // false
```

---

### **Floating Point Issue**

```javascript
var a = 0.1;
var b = 0.2;
var c = a + b;         // 0.30000000000000004
console.log(c.toFixed(2)); // "0.30" (string)
```

---

### **Shorthand Math Operators**

```javascript
var a = 10;

a += 10; // a = a + 10
a -= 10; // a = a - 10
a *= 10; // a = a * 10
a /= 10; // a = a / 10
a %= 10; // a = a % 10
```

---

✅ **Quick tips**:

* Use **camelCase** for variables
* Use `parseInt` or `parseFloat` to convert strings to numbers
* Use `Number()` for general conversion
* `isNaN()` helps detect invalid numbers
* Use `.toFixed(n)` to fix floating point precision


