

# **JavaScript Functions**

### **Function Structure - A block of code that performs a specific task**

```javascript
function name(p1, p2, ...) {
   // code
   return result;
}
```

### **Function Call**

```javascript
name();
```

Parameters (`p1, p2`) can be:

* number
* string
* boolean
* array
* object

---

# **Example 1: Addition Function**

```javascript
function add(x, y, z, p, q) {
   const r = x + y + z + p + q;
   return r;
}

console.log(add(2, 3, 3, 5, 6));
```

Output

```
19
```

---

# **Example 2: Check Odd Number**

```javascript
function isOdd(n) {
   if (n % 2 === 1)
      return true;

   return false;
}

console.log(isOdd(10));
```

Output

```
false
```

---

# **Example 3: Check Odd Length String**

```javascript
function oddSizedString(str) {
   if (str.length % 2 === 1)
      return true;

   return false;
}
```

Example call

```javascript
console.log(oddSizedString("hello"));
```

---

# **Example 4: Conditional Operation**

```javascript
function doubleIfTrue(n, check) {
   if (check)
      return n * 2;

   return n;
}

console.log(doubleIfTrue(5, true));
```

Output

```
10
```

---

# **Example 5: Count Elements in Array**

```javascript
function numOfElement(a) {
   return a.length;
}

console.log(numOfElement([1,2,3,4,5,6]));
```

Output

```
6
```

---

# **Quick Summary**

| Concept       | Meaning                |
| ------------- | ---------------------- |
| function      | reusable block of code |
| parameter     | input variable         |
| return        | output value           |
| function call | execute function       |

Example:

```javascript
add(2,3)
```

---

✅ **Short Tip**

```
function → define
return → give result
call → run function
```

