
# 1. Why Loops Are Used in DOM

## What

Many DOM methods return **multiple elements**.

Example:

```javascript
document.querySelectorAll("li")
```

This returns a **NodeList** containing many elements.

To work with each element → **loop is required**.

---

## Example HTML

```html
<ul>
<li>Messi</li>
<li>Ronaldo</li>
<li>Pele</li>
</ul>
```

---

# 2. for...of Loop (Most Common in DOM)

## What

Used to loop through **NodeList or HTMLCollection**.

Example:

```javascript
const items = document.querySelectorAll("li");

for(const item of items){
    console.log(item.innerText);
}
```

Output:

```
Messi
Ronaldo
Pele
```

---

## Why developers use it

* simple
* clean syntax
* readable

---

# 3. Traditional for Loop

## What

Classic JavaScript loop.

Example:

```javascript
const items = document.getElementsByTagName("li");

for(let i = 0; i < items.length; i++){
    console.log(items[i].innerText);
}
```

---

## When used

Used when you need:

* index number
* manual control

Example:

```javascript
console.log(items[1])
```

---

# 4. forEach Loop

## What

Used with **NodeList and arrays**.

Example:

```javascript
const items = document.querySelectorAll("li");

items.forEach(function(item){
    console.log(item.innerText);
});
```

Short arrow function version:

```javascript
items.forEach(item => console.log(item.innerText));
```

---

## Important

Works with:

```
NodeList
Array
```

Does NOT work with:

```
HTMLCollection
```

---

# 5. Loop with getElementsByClassName()

Example HTML:

```html
<li class="player">Messi</li>
<li class="player">Ronaldo</li>
<li class="player">Pele</li>
```

JavaScript:

```javascript
const players = document.getElementsByClassName("player");

for(const player of players){
    console.log(player.innerText);
}
```

---

# 6. Loop with querySelectorAll()

Example:

```javascript
const players = document.querySelectorAll(".player");

for(const player of players){
    console.log(player.innerText);
}
```

or

```javascript
players.forEach(player => console.log(player.innerText));
```

---

# 7. Loop for Changing Styles

Example:

```javascript
const items = document.querySelectorAll("li");

for(const item of items){
    item.style.color = "red";
}
```

Result → All list items become red.

---

# 8. Loop for Adding Classes

Example:

```javascript
const items = document.querySelectorAll("li");

for(const item of items){
    item.classList.add("highlight");
}
```

---

# 9. Loop with childNodes

Example:

```javascript
const container = document.getElementById("players-container");

for(const node of container.childNodes){
    console.log(node);
}
```

Output may include:

```
text
<h1>
text
<ul>
text
```

Because **childNodes includes text nodes**.

---

# 10. Loop with children

Better alternative to `childNodes`.

Example:

```javascript
const container = document.getElementById("players-container");

for(const child of container.children){
    console.log(child);
}
```

This returns only **HTML elements**.

---

# 11. Loop with Array.from()

Sometimes HTMLCollection needs conversion.

Example:

```javascript
const items = document.getElementsByTagName("li");

Array.from(items).forEach(item => console.log(item.innerText));
```

---

# 12. Real Developer DOM Loop Pattern

Most commonly used pattern:

```javascript
const elements = document.querySelectorAll(".item");

for(const element of elements){
    element.style.color = "blue";
}
```

---

# 13. Example Project Use

Example:

```html
<ul id="player-list">
<li>Messi</li>
<li>Ronaldo</li>
<li>Pele</li>
</ul>
```

JavaScript:

```javascript
const players = document.querySelectorAll("#player-list li");

for(const player of players){
    player.style.fontWeight = "bold";
}
```

Result → All players become bold.

---

# 14. When Loop is NOT Needed

Example:

```javascript
document.getElementById("title")
```

Because it returns **one element only**.

---

# Final Rule (Very Important)

```
Multiple elements → Loop required
Single element → No loop needed
```

---

# DOM Loop Summary

| Method                 | Return Type    | Loop |
| ---------------------- | -------------- | ---- |
| getElementById         | Element        | No   |
| getElementsByClassName | HTMLCollection | Yes  |
| getElementsByTagName   | HTMLCollection | Yes  |
| querySelector          | Element        | No   |
| querySelectorAll       | NodeList       | Yes  |
