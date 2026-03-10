
# Tea House Landing Page

---

# 1. Project Overview

**Project Type:** Responsive Landing Page
**Theme:** Tea brand / product showcase
**Goal:** Present tea products, brand story, testimonials, and allow user engagement.

### Main Sections

```
Hero Banner
Featured Products
Great Tea (Brand Story)
Client Testimonials
Footer
```

### Design Strategy

Modern landing pages follow a **conversion funnel**:

| Section      | Purpose                 |
| ------------ | ----------------------- |
| Hero         | attract attention       |
| Products     | show offerings          |
| Story        | brand credibility       |
| Testimonials | trust building          |
| Footer       | navigation + engagement |

---

# 2. HTML Concepts Used

HTML provides **structure of the page**.

### Document Structure

```html
<!DOCTYPE html>
<html>
<head>
<body>
```

Meaning:

| Tag               | Purpose              |
| ----------------- | -------------------- |
| `<!DOCTYPE html>` | HTML5 document       |
| `<html>`          | root element         |
| `<head>`          | metadata & resources |
| `<body>`          | visible content      |

---

### Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Purpose:

| Tag      | Why                         |
| -------- | --------------------------- |
| charset  | supports all characters     |
| viewport | responsive layout on mobile |

---

### Sections

```html
<section>
<footer>
```

Purpose:

* semantic structure
* accessibility
* SEO improvement

---

# 3. External Resources (CDN)

Your project loads **three external resources**.

---

## Tailwind CSS

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

### What

Utility-first CSS framework.

### Why

Instead of writing CSS like:

```css
.button {
padding:10px;
background:red;
}
```

Tailwind allows:

```
py-3 px-5 bg-red-500
```

### Benefits

* faster development
* less custom CSS
* consistent spacing

---

## Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope">
```

### What

Custom web font.

### Why

Better typography than default fonts.

### CSS Usage

```css
*{
font-family: "Manrope", sans-serif;
}
```

---

## Font Awesome

```html
<link rel="stylesheet" href="font-awesome cdn">
```

### What

Icon library.

### Example

```html
<i class="fa-solid fa-arrow-right"></i>
```

Used for:

* arrows
* social icons

---

# 4. CSS Concept

Only one CSS rule used:

```css
*{
font-family: "Manrope", sans-serif;
}
```

### What

Universal selector `*`.

### Why

Apply same font to **entire website**.

---

# 5. Tailwind Layout Concepts

---

# Container

```
container mx-auto
```

### What

Responsive width container.

### How

```
container
```

sets max width

```
mx-auto
```

centers horizontally.

### Why

Keeps layout readable on large screens.

---

# Grid Layout

Example:

```
grid grid-cols-1 md:grid-cols-2
```

### What

CSS Grid layout.

### How

```
grid
```

activates grid system.

```
grid-cols-1
```

1 column layout.

```
md:grid-cols-2
```

2 columns on medium screens.

### Why

Responsive layouts.

---

Example used:

```
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
```

Product cards responsive layout.

---

# Flexbox

Example:

```
flex items-center justify-between
```

### What

Flexible box layout.

### Classes used

| Class           | Purpose            |
| --------------- | ------------------ |
| flex            | enable flex        |
| items-center    | vertical alignment |
| justify-between | space between      |

---

Example:

```
flex justify-end items-end
```

Used in banner image alignment.

---

# Spacing System

Tailwind spacing classes used.

Examples:

```
p-6
p-7
p-12
px-5
py-3
mb-[50px]
mb-[90px]
gap-4
gap-8
gap-[100px]
space-y-4
space-y-[30px]
```

### Concept

Spacing improves UI readability.

### Example

```
space-y-4
```

Applied to parent.

Result:

All children get vertical spacing.

---

# 6. Typography

Classes used:

```
text-[80px]
text-[45px]
text-xl
text-2xl
font-bold
font-semibold
font-[500]
```

### What

Control text size and weight.

### Why

Creates **visual hierarchy**.

Example hierarchy:

```
Hero title → text-[80px]
Section title → text-[45px]
Card title → text-xl
Body text → normal
```

---

# Text Color

Examples:

```
text-[#777777]
text-white
text-[#f4f4f4]
```

### Why

Gray text used for paragraphs to reduce visual fatigue.

---

# 7. Background Colors

Examples:

```
bg-white
bg-[#ffefe9]
bg-[#e6a6231a]
bg-[#5776391a]
```

### Strategy

Soft colors create elegant UI.

---

# 8. Gradient Backgrounds

Examples:

```
bg-gradient-to-r
from-[#ff8938]
to-[#ff0000]
```

Used in:

* buttons
* client section

### Why

Gradients create modern UI highlights.

---

# 9. Image Alignment

Example:

```
mx-auto
```

Centers image horizontally.

Example:

```
flex justify-center items-center
```

Centers image both directions.

---

# 10. Border Radius

Examples:

```
rounded-md
rounded-lg
rounded-xl
rounded-full
```

### What

Rounded corners.

### Why

Soft modern design.

---

# 11. Shadow

Examples:

```
shadow-2xl
shadow-lg
```

### Why

Shadows add **depth and elevation**.

Used in:

* rating card
* testimonial cards

---

# 12. Transform

Example:

```
-rotate-45
```

### What

Rotates element.

### Example

Arrow icon rotated.

### Important

Used with:

```
inline-block
```

because transform doesn't apply well on inline elements.

---

# 13. Positioning

Classes used:

```
relative
absolute
bottom-[15px]
left-[220px]
top-[100px]
```

### Concept

Parent → `relative`

Child → `absolute`

Allows overlapping elements.

Example:

Rating card on banner image.

---

# 14. Z-index

Example:

```
z-50
```

### What

**z-index (Short Note)**

**What:**
`z-index` controls **which element appears in front or behind**.

**Rule:**
`z-index` works only if the element has a position:

```html
relative
absolute
fixed
sticky
```

**Meaning:**

```
Higher z-index → front
Lower z-index → behind
```

**In this project:**
`z-50` is used so the **main testimonial card appears above the other cards**.

---

# 15. Opacity

Example:

```
opacity-20
```

### Why

Used for background testimonial cards.

Creates depth effect.

---

# 16. Responsive Design

Prefixes used:

```
sm:
md:
lg:
```

Example:

```
grid-cols-1 md:grid-cols-2
```

Meaning:

| Screen | Layout    |
| ------ | --------- |
| Mobile | stacked   |
| Tablet | 2 columns |

---

# 17. Card Design Pattern

Cards used in:

* featured products
* testimonials

Structure:

```
image
title
description
```

Tailwind classes used:

```
p-7
rounded-md
text-center
shadow
```

---

# 18. Image Collage Strategy

Great tea section uses grid:

```
grid grid-cols-2 grid-rows-3
```

### Why

Creates dynamic visual composition instead of boring images.

---

# 19. Testimonials Strategy

Three review cards used.

Main card:

```
z-50
opacity-100
```

Background cards:

```
opacity-20
```

### Why

Focus attention on main testimonial.

---

# 20. Button Design

Example:

```
py-3 px-5
rounded-md
text-white
bg-gradient-to-r
```

### Strategy

CTA button should:

* stand out
* be visually attractive
* encourage action

---

# 21. Input Design

Example:

```
border-b-2
outline-none
w-full
```

### Why

Modern minimalist input style.

---

# 22. Footer Design Strategy

Footer contains:

```
logo
links
services
help
newsletter
social icons
```

Grid layout:

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

### Why

Organizes large information.

---

# 23. Icon Usage

Font Awesome classes used:

```
fa-arrow-right-long
fa-facebook-f
fa-twitter
fa-instagram
```

Used for:

* button icons
* social media links

---

# 24. UI/UX Principles Used

### Visual Hierarchy

Large headings guide user attention.

### White Space

Spacing improves readability.

### Consistency

Same fonts, colors, spacing.

### Alignment

Grid-based layout.

---

# 25. Final Tailwind Classes Used

Main classes used in this project:

```
container
mx-auto
grid
flex
gap
space-y
p
px
py
text
font
bg
bg-gradient-to-r
from
to
rounded
shadow
relative
absolute
z
opacity
rotate
inline-block
border
outline-none
```

