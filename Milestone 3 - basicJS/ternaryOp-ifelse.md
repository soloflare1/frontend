## **Ternary Operator (`? :`)**

**Syntax:**

```javascript
condition ? expression_if_true : expression_if_false
```

### **Examples**

```javascript
var age = 15;

// Simple ternary
age > 10 ? console.log('Yes') : console.log('No'); // Yes

// Assigning value
var pass = age > 10 ? true : false;

// Using with other variables
var price = isLeader === true ? 0 : price + 10;

// Shortcut (no need to compare with true)
var price = isLeader ? 0 : price + 10;

// Nested ternary
var price = isLeader === true 
              ? (price > 100 ? price/2 : 0) 
              : price + 10;
```

**Tip:** Nested ternary can also be written neatly:

```javascript
var price = isLeader === true 
             ? price > 100 
                 ? price/2 
                 : 0 
             : price + 10;
```

---

## **Comparison Operators Recap**

| Operator | Checks             | Example           |
| -------- | ------------------ | ----------------- |
| `==`     | Value only         | 5 == '5' → true   |
| `===`    | Value **and** type | 5 === '5' → false |

---

## **Logical NOT (`!`)**

| Expression | Result                      | Notes                      |
| ---------- | --------------------------- | -------------------------- |
| `!true`    | false                       | flips boolean              |
| `!false`   | true                        | flips boolean              |
| `!""`      | true                        | empty string is falsy      |
| `!"cat"`   | false                       | non-empty string is truthy |
| `!!value`  | boolean equivalent of value | double negation            |

---

💡 **Quick tip:**

* Use `===` for strict equality
* Use ternary `? :` for concise `if-else`
* Use `!!value` to convert any value to boolean
