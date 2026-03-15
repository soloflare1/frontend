
### HTML

```html
<body>

<h1 id="page-title">Event Handler</h1>
<button id="btn-update-title">Update title</button>

<p id="name">No Name</p>

<input id="input-name" placeholder="Your name" type="text">

<button id="btn-update-name">Update</button>

<script src="script.js"></script>

</body>
```

---

# 2. JavaScript

```javascript
// update title
document.getElementById('btn-update-title')
.addEventListener('click', function () {

console.log('button clicked');

const pageTitleElement = document.getElementById('page-title');

pageTitleElement.innerText = 'Updated page title text';

});


// update name from input
document.getElementById('btn-update-name')
.addEventListener('click', function(){

console.log('update button clicked');

// get input field
const nameInput = document.getElementById('input-name');

// get value
const name = nameInput.value;

console.log('name:', name);

// set the name
const nameP = document.getElementById('name');

nameP.innerText = name;

});
```

---

# 3. How It Works (Step by Step)

## Part 1 — Update Title

### Step 1

User clicks button.

```javascript
click
```

### Step 2

Find the title element.

```javascript
document.getElementById('page-title')
```

### Step 3

Change text.

```javascript
pageTitleElement.innerText = "Updated page title text"
```

Result:

```
Event Handler
↓
Updated page title text
```

---

# Part 2 — Update Name from Input

### Step 1

User writes name in input.

Example:

```
Amr
```

---

### Step 2

Click **Update button**

Event triggers.

---

### Step 3

Get input value.

```javascript
nameInput.value
```

Example:

```
Amr
```

---

### Step 4

Update paragraph text.

```javascript
nameP.innerText = name
```

Result:

```
No Name
↓
Amr
```

---

# 4. DOM Concepts Used

| Concept          | Purpose        |
| ---------------- | -------------- |
| addEventListener | detect click   |
| getElementById   | select element |
| value            | get input text |
| innerText        | change text    |

---

# 5. Visual Flow

```
User types name
        ↓
Click Update
        ↓
Get input value
        ↓
Change paragraph text
```

---

# 6. Important Rule

```
Input text → .value
Normal text → .innerText
```

Example:

```javascript
input.value
p.innerText
```
