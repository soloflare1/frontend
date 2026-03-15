
## HTML + CSS

```html
<style>
.comment{
border:2px solid blue;
background-color:lightcyan;
margin:10px;
padding:10px;
border-radius:10px;
}
</style>

<body>

<h1>My Awesome Comment Box. Write what in your mind!!!</h1>

<section>

<h3>All comments here</h3>

<div id="comment-container">
<p class="comment">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
</div>

<textarea id="comment-text-box" cols="60" rows="5"></textarea>

<br>

<button id="btn-post-comment">Post Comment</button>

</section>
```

---

# 2. JavaScript

```javascript
// Step 1: add event listener to button
document.getElementById('btn-post-comment')
.addEventListener('click', function(){

// Step 2: get text from textarea
const commentTextBox = document.getElementById('comment-text-box');
const newComment = commentTextBox.value;


// Step 3: find parent container
const commentContainer = document.getElementById('comment-container');


// Step 4: create new comment element
const commentElement = document.createElement('p');
commentElement.classList.add('comment');
commentElement.innerText = newComment;


// Step 5: append comment
commentContainer.appendChild(commentElement);


// Step 6: clear textarea
commentTextBox.value = '';

});
```

---

# 3. How This Project Works

### Step 1

User clicks **Post Comment button**

```javascript
addEventListener("click")
```

Event triggers.

---

### Step 2

Get textarea text.

```javascript
commentTextBox.value
```

Example:

```
Hello this is my comment
```

---

### Step 3

Find container where comment will appear.

```javascript
document.getElementById("comment-container")
```

---

### Step 4

Create new HTML element.

```javascript
document.createElement("p")
```

Creates:

```
<p></p>
```

---

### Step 5

Add text inside element.

```javascript
commentElement.innerText = newComment
```

Now becomes:

```
<p>Hello this is my comment</p>
```

---

### Step 6

Add element to page.

```javascript
appendChild()
```

Now it appears in UI.

---

### Step 7

Clear textarea.

```javascript
commentTextBox.value = ""
```

So user can type again.

---

# 4. Visual Flow

```
User writes comment
        ↓
Click Post Comment
        ↓
Get textarea value
        ↓
Create new <p>
        ↓
Add text inside
        ↓
Append to container
        ↓
Clear textarea
```

---

# 5. Important DOM Concepts Used

| Concept          | Purpose             |
| ---------------- | ------------------- |
| addEventListener | detect button click |
| value            | get textarea text   |
| createElement    | create new HTML     |
| classList.add    | add CSS class       |
| innerText        | set text            |
| appendChild      | insert element      |
| getElementById   | find element        |

---

# 6. Most Important Line

```javascript
commentContainer.appendChild(commentElement);
```

This line **adds the new comment to the page**.

---

# 7. Real World Example

This pattern is used in:

* Facebook comments
* YouTube comments
* Blog comments
* Review sections

