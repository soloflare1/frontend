# 1. DOM (Document Object Model)

## What

**DOM = Document Object Model**

When a browser loads an HTML page, it converts the HTML into a **tree of JavaScript objects**.

Example HTML:

```html
<h1 id="title">Hello DOM</h1>
```

Browser converts it into objects:

```
Document
   |
  html
   |
  body
   |
  h1
```

Each HTML tag becomes a **DOM node (object)**.

---

## Why DOM is Needed

HTML alone is **static**.

DOM allows **JavaScript to control the webpage dynamically**.

Example:

```javascript
document.getElementById("title").innerText = "Hello World";
```

The text changes instantly on the page.

---

## When DOM is Used

DOM is used when we want to:

* change text
* change styles
* respond to user actions
* add elements
* remove elements
* validate forms

Example:

```javascript
button.addEventListener("click", function(){
  alert("Button clicked");
});
```

---

# 2. DOM Tree Structure

The browser creates a **tree structure** from HTML.

Example HTML:

```html
<section>
<h1>Players</h1>
<ul>
<li>Messi</li>
<li>Ronaldo</li>
</ul>
</section>
```

DOM Tree:

```
section
 ├ h1
 └ ul
     ├ li
     └ li
```

Concepts:

* Parent
* Child
* Sibling

---

# 3. Selecting Elements

The first step in DOM manipulation is **selecting elements**.

---

# 3.1 getElementById()

## What

Selects an element using **id**.

```javascript
document.getElementById("title")
```

## Why

ID is **unique**.

## Example

```html
<h1 id="title">Hello</h1>
```

```javascript
const title = document.getElementById("title");
```

---

# 3.2 getElementsByClassName()

## What

Selects elements by **class name**.

```javascript
document.getElementsByClassName("food")
```

Example:

```html
<li class="food">Rice</li>
<li class="food">Pizza</li>
```

Returns **HTMLCollection**.

---

# 3.3 getElementsByTagName()

## What

Selects elements by **HTML tag name**.

Example:

```javascript
document.getElementsByTagName("li")
```

Returns:

```
HTMLCollection
```

---

# 3.4 querySelector()

## What

Selects the **first matching element**.

Example:

```javascript
document.querySelector("#title")
```

Supports **CSS selectors**.

Examples:

```
#id
.class
tag
parent child
```

---

# 3.5 querySelectorAll()

## What

Selects **all matching elements**.

Example:

```javascript
document.querySelectorAll(".food")
```

Returns:

```
NodeList
```

---

# 4. HTMLCollection vs NodeList

| Feature      | HTMLCollection | NodeList         |
| ------------ | -------------- | ---------------- |
| Returned by  | getElementsBy  | querySelectorAll |
| Live update  | Yes            | No               |
| Modern usage | Less           | More             |

Example:

```javascript
document.getElementsByTagName("li")
```

↓

```
HTMLCollection
```

```javascript
document.querySelectorAll("li")
```

↓

```
NodeList
```

---

# 5. DOM Traversing

DOM Traversing means **moving through the DOM tree**.

Example HTML:

```html
<section id="players-container">
<h1>Players</h1>
<ul>
<li>Messi</li>
<li>Ronaldo</li>
</ul>
</section>
```

---

## childNodes

Returns all child nodes.

```javascript
document.getElementById("players-container").childNodes
```

Output:

```
NodeList [text, h1, text, ul, text]
```

Important:

`childNodes` includes **text nodes (spaces/new lines)**.

---

## parentNode

Returns the parent element.

Example:

```javascript
element.parentNode
```

Structure:

```
li → ul → section
```

---

# 6. DOM Styling

JavaScript can change CSS styles.

Example:

```javascript
const foodElement = document.getElementById("food-title");
```

---

## Change Color

```javascript
foodElement.style.color = "red";
```

---

## Background

```javascript
foodElement.style.backgroundColor = "lightgreen";
```

---

## Border Radius

```javascript
foodElement.style.borderRadius = "15px";
```

Important rule:

CSS uses:

```
background-color
margin-left
```

JavaScript uses **camelCase**

```
backgroundColor
marginLeft
```

---

# 7. classList

Used to **add or remove CSS classes**.

---

## Add Class

```javascript
element.classList.add("bg-red");
```

---

## Remove Class

```javascript
element.classList.remove("bg-red");
```

---

## Toggle Class

```javascript
element.classList.toggle("active");
```

Why developers prefer classList:

* cleaner
* reusable
* better styling control

---

# 8. getAttribute()

Reads HTML attribute value.

Example:

```javascript
element.getAttribute("id")
```

Output:

```
food-title
```

Example HTML:

```html
<img src="image.jpg">
```

```javascript
img.getAttribute("src")
```

---

# 9. setAttribute()

Adds or changes attributes.

Example:

```javascript
element.setAttribute("title","Tooltip text");
```

Result:

```html
<h1 title="Tooltip text">
```

---

# 10. innerText vs innerHTML

Very important concept.

---

## innerText

Returns **visible text only**.

Example:

```html
<h1>Hello <span>World</span></h1>
```

```javascript
element.innerText
```

Output:

```
Hello World
```

---

## innerHTML

Returns **HTML + text**.

Example:

```javascript
element.innerHTML
```

Output:

```
Hello <span>World</span>
```

---

# Difference

| Feature    | innerText   | innerHTML      |
| ---------- | ----------- | -------------- |
| Returns    | text        | HTML + text    |
| Reads tags | No          | Yes            |
| Use case   | text update | HTML structure |

---

# 11. createElement()

Creates new HTML element.

Example:

```javascript
document.createElement("li")
```

Result:

```
<li></li>
```

---

# 12. appendChild()

Adds a child element inside parent.

Example:

```javascript
const li = document.createElement("li");
li.innerText = "Messi";

document.getElementById("player-list").appendChild(li);
```

Result:

```
Messi
Ronaldo
New item added
```

---

# 13. Full DOM Creation Example

```javascript
const section = document.createElement("section");

const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";

section.appendChild(h1);

document.body.appendChild(section);
```

---

# 14. innerHTML Method

Shortcut method.

```javascript
section.innerHTML = `
<h1>Books</h1>
<ul>
<li>Physics</li>
<li>Chemistry</li>
<li>Math</li>
</ul>
`;
```

---

# 15. Script Loading

HTML example:

```html
<body>

<script src="app.js"></script>

</body>
```

Why script at bottom?

Because:

```
HTML loads first
then JavaScript runs
```

Otherwise JS may run before DOM loads.

---

# 16. Emmet Shortcut (VS Code)

Example:

```
main>section.section*3>h1{Title $}+ul>li*4{Item $}
```

VS Code automatically generates HTML.

---

# Final DOM Workflow (Important)

Real developers follow this order:

```
1 Select element
2 Create element
3 Modify content
4 Append to parent
5 Add style or class
```

Example:

```javascript
const li = document.createElement("li");
li.innerText = "New Player";

document.getElementById("player-list").appendChild(li);
```

