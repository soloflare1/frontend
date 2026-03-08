
# 1️⃣ Remove Duplicate from Array

```javascript
function noDuplicate(arr) {
  const u = [];

  for (const i of arr) {
    if (!u.includes(i)) {
      u.push(i);
    }
  }

  return u;
}

const a = [1,2,3,4,5,6,2,3,4];

const unique = noDuplicate(a);
console.log(unique);
```

Output

```
[1,2,3,4,5,6]
```

---

# 2️⃣ Math Methods

```javascript
const mn = Math.min(1,2,4,633,2,5,6);
const mx = Math.max(1,2,4,633,2,5);

const pi = Math.PI;

const ab = Math.abs(-10); // 10

const rd = Math.round(3.99);  // 4
const fl = Math.floor(3.99);  // 3
const cl = Math.ceil(3.99);   // 4
```

---

# 3️⃣ Random Number

```javascript
const rnd = Math.random(); // 0 to 1

const rnd1 = Math.random() * 10;

const rnd2 = Math.round(Math.random() * 10);
```

---

# 4️⃣ Date in JavaScript

```javascript
const today = new Date();

const date = new Date('2026-03-10');

const m = date.getMonth();
const d = date.getDay();

const specificDate = new Date(2026,0,26);

specificDate.setMonth(10);

console.log(specificDate.toLocaleString('en-GB'));
```

📌 Rule

```
new Date(YYYY, month_index, DD)

month_index → 0 = January
```

---

# 5️⃣ Swap Variables

### Way 1

```javascript
let a = 5;
let b = 1;

let tmp = a;
a = b;
b = tmp;
```

---

### Way 2 (Destructuring)

```javascript
let a = 5;
let b = 1;

[a,b] = [b,a];
```

---

# 6️⃣ Find Cheapest Phone

```javascript
function getCheapestPhone(phones) {

let min = phones[0];

for(const phone of phones){

if(phone.price < min.price){
min = phone;
}

}

return min;
}
```

### Data

```javascript
const phones = [

{ name:'Samsung', price:20000, camera:'12mp', color:'black' },

{ name:'Xiaomi', price:18000, camera:'12mp', color:'black' },

{ name:'Oppo', price:30000, camera:'12mp', color:'black' },

{ name:'Iphone', price:100000, camera:'12mp', color:'black' },

{ name:'Walton', price:31000, camera:'12mp', color:'black' },

{ name:'HTC', price:27000, camera:'12mp', color:'black' }

];

const cheapest = getCheapestPhone(phones);
console.log(cheapest);
```

---

# 7️⃣ Shopping Total

```javascript
function getShoppingTotal(products){

let total = 0;

for(const product of products){
total = total + product.price;
}

return total;

}
```

---

# 8️⃣ Handle Unexpected Error (Type Checking)

### Full Name Function

```javascript
function fullName(first, second){

if(typeof first !== 'string'){
return 'First name should be a string';
}

else if(typeof second !== 'string'){
return 'Second name should be a string';
}

const full = first + ' ' + second;

return full;

}
```

---

# 9️⃣ Object Validation

```javascript
function getPrice(product){

if(typeof product !== 'object'){
return 'Please provide an object';
}

const price = product.price;

return price;

}

const price = getPrice({name:'chulkani dandi', price:35, color:'blue'});

console.log(price);
```

---

# 🔟 Array Validation

```javascript
function getSecond(numbers){

if(Array.isArray(numbers) === false){
return 'Please provide an array';
}

const second = numbers[1];

return second;

}

const second = getSecond([1,25,69]);

console.log(second);
```

---

# ⭐ Important JS Validation Tricks

| Check        | Code                    |
| ------------ | ----------------------- |
| string check | `typeof x === "string"` |
| object check | `typeof x === "object"` |
| array check  | `Array.isArray(x)`      |

