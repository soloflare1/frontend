
### HTML

```html id="cng8n2"
<body>

<h1>My secret info</h1>

<input id="input-delete" placeholder="write delete" type="text">

<button id="btn-delete" disabled>Delete</button>

<script src="script.js"></script>

</body>
```

---

# 2. JavaScript

```javascript id="zazcc9"
document.getElementById('input-delete')
.addEventListener('keyup', function (event) {

const text = event.target.value;

const btnDelete = document.getElementById('btn-delete');

if(text === 'delete'){

console.log('delete typed');

btnDelete.removeAttribute('disabled');

}
else{

console.log('something else');

btnDelete.setAttribute('disabled', true);

}

});
```

---

# 3. How This Works

## Step 1 — User types in input

Example:

```id="n6q23e"
del
```

Event triggers:

```javascript id="fd7n7g"
keyup
```

---

## Step 2 — Get input text

```javascript id="ak9s1r"
event.target.value
```

Example output:

```id="bujxas"
delete
```

---

## Step 3 — Check condition

```javascript id="8p7hjg"
if(text === "delete")
```

Meaning:

User must type **exactly "delete"**

---

## Step 4 — Enable button

```javascript id="7g3bav"
btnDelete.removeAttribute("disabled")
```

Now button becomes clickable.

---

## Step 5 — Otherwise disable button

```javascript id="g13kef"
btnDelete.setAttribute("disabled", true)
```

Button stays disabled.

---

# 4. Visual Flow

```id="x6rc9r"
User typing
      ↓
keyup event
      ↓
Check text
      ↓
"text === delete" ?
      ↓
YES → Enable button
NO  → Disable button
```

---

# 5. Important DOM Concepts Used

| Concept            | Purpose        |
| ------------------ | -------------- |
| keyup              | detect typing  |
| event.target.value | get input text |
| removeAttribute    | enable button  |
| setAttribute       | disable button |

---

# 6. Why `keyup` is used

```id="smv64h"
keydown → before key typed
keyup   → after key typed
```

So `keyup` gives **updated input value**.

---

# 7. Real Website Example

This pattern is used in:

* GitHub repository delete
* Facebook account delete
* Google account delete
* Database confirmation actions

User must type **DELETE** to confirm.

---

# 8. Important Rule

```id="aygzbq"
removeAttribute("disabled") → enable button

setAttribute("disabled", true) → disable button
```
