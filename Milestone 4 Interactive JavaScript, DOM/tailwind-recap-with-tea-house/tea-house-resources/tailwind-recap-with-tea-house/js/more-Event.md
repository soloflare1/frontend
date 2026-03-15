
### HTML

```html
<button id="btn-mouse">Mickey Mouse Minnie</button>

<input id="user-name" type="text" placeholder="Enter name">
<input id="user-email" type="email" placeholder="Enter email">
```

---

# JavaScript

```javascript
// mouse enter event
document.getElementById('btn-mouse')
.addEventListener('mouseenter', function(){
    console.log('mouse entered button');
});


// mouse move event
document.getElementById('btn-mouse')
.addEventListener('mousemove', function(){
    console.log('mouse moving on button');
});


// focus event (when user clicks input)
document.getElementById('user-name')
.addEventListener('focus', function () {
    console.log('user about to write name');
});


// focus email
document.getElementById('user-email')
.addEventListener('focus', function () {
    console.log('user about to write email');
});


// blur event (when user leaves input)
document.getElementById('user-name')
.addEventListener('blur', function () {
    console.log('user done with name');
});


// blur email
document.getElementById('user-email')
.addEventListener('blur', function () {
    console.log('user done with email');
});


// keydown event
document.getElementById('user-name')
.addEventListener('keydown', function () {
    console.log('typing...');
});


// keydown with event object
document.getElementById('user-name')
.addEventListener('keydown', function (event) {
    console.log('typing', event.target.value);
});


// keyup event
document.getElementById('user-name')
.addEventListener('keyup', function (event) {
    console.log('typing', event.target.value);
});
```

---

# Event Explanation

## 1️⃣ `mouseenter`

### What

Mouse enters the element.

### When

When cursor comes **on the button**.

Example:

```javascript
mouseenter
```

Output:

```
mouse entered button
```

---

# 2️⃣ `mousemove`

### What

Triggered when mouse **moves on element**.

### Example

```javascript
mousemove
```

It will print many times while moving mouse.

---

# 3️⃣ `focus`

### What

Input field becomes **active**.

### When

User clicks input box.

Example:

```javascript
focus
```

Output:

```
user about to write name
```

---

# 4️⃣ `blur`

### What

Input field **loses focus**.

### When

User clicks somewhere else.

Example:

```
user done with name
```

---

# 5️⃣ `keydown`

### What

Triggered when a **key is pressed**.

Example:

```javascript
keydown
```

Output:

```
typing...
```

---

# 6️⃣ `keyup`

### What

Triggered when a **key is released**.

Example:

```javascript
keyup
```

---

# 7️⃣ Event Object (`event`)

Example:

```javascript
event.target.value
```

### Meaning

| Property           | Meaning                      |
| ------------------ | ---------------------------- |
| event.target       | element that triggered event |
| event.target.value | input value                  |

Example output:

```
typing Amr
typing Am
typing A
```

---

# Important Difference

| Event      | Meaning         |
| ---------- | --------------- |
| keydown    | key pressed     |
| keyup      | key released    |
| focus      | input activated |
| blur       | input left      |
| mouseenter | mouse enters    |
| mousemove  | mouse moving    |
