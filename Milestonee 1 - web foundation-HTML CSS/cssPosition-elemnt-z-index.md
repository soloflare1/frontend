

# ✅ CSS POSITION + PSEUDO CLASS + PSEUDO ELEMENT

## EASY ENGLISH NOTES

---

## 🔹 CSS POSITION PROPERTY

### 1) Relative Position

👉 Moves element from its **own normal position**
👉 Original space is **still reserved**

**Example Meaning:**
"Move yourself a little left or right."

```css
position: relative;
```

---

### 2) Absolute Position

👉 Positioned relative to **nearest positioned parent**
👉 Removed from normal document flow
👉 Does NOT keep space

**Example Meaning:**
"Place exactly inside the parent box."

```css
position: absolute;
```

---

### 3) Fixed Position

👉 Positioned relative to **browser window**
👉 Does NOT move when scrolling

**Example Meaning:**
"Always stay on screen."

```css
position: fixed;
```

---

### 4) Sticky Position

👉 Acts like relative at first
👉 Becomes fixed when scrolling reaches top

**Example Meaning:**
"Stick while scrolling."

```css
position: sticky;
```

---

## 🔹 EASY MEMORY TRICK

```
Relative → Myself  
Absolute → Parent  
Fixed → Screen  
Sticky → Scroll  
```

---

## 🔹 PSEUDO CLASS ( : )

Used to style **special state** of elements.

### Examples:

### Hover

👉 When mouse is over element

```css
h1:hover
```

---

### Focus

👉 When input is selected / typing

```css
input:focus
```

---

### Visited

👉 Link already clicked

```css
a:visited
```

---

## 🔹 PSEUDO ELEMENT ( :: )

Used to style **part of element**.

---

### First Letter

```css
p::first-letter
```

👉 Styles first letter only.

---

### First Line

```css
p::first-line
```

👉 Styles first line only.

---

### Before

```css
h3::before
```

👉 Adds content before element.

---

### After

```css
h3::after
```

👉 Adds content after element.

---

### Placeholder

```css
input::placeholder
```

👉 Styles input hint text.

---

## 🔹 Z-INDEX

👉 Controls **layer order**
👉 Bigger value = upper layer
👉 Works only with positioned elements

```css
z-index: 10;
```

---

# ✅ LOREM SHORTCUT (IMPORTANT)

### For 120 words:

```
p>lorem120
```

### For 3 paragraphs:

```
p*3>lorem120
```




👉 **Static is the default position of all HTML elements**
👉 Element stays in **normal flow**
👉 `top`, `left`, `right`, `bottom` **do NOT work**

---

### 🔹 Example:

```css
position: static;
```

---

### 🔹 What happens?

✔ Element stays in its normal place
✔ Cannot move using top/left
✔ No special behavior

---


```
Static → Normal (Default)
```



| Position | Meaning                |
| -------- | ---------------------- |
| Static   | Normal place (default) |
| Relative | Move from own place    |
| Absolute | Move inside parent     |
| Fixed    | Fixed on screen        |
| Sticky   | Stick on scroll        |

---
