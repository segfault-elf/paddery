# 🛡️ paddery

> the left-pad killer that actually pads right (and both ways). 

## 📦 installation

```bash
npm install paddery
```

## 🚀 usage

import it, instantiate it, pad it. it's that simple.

```javascript
const Paddery = require('paddery');
const paddery = new Paddery();

// 🡸 pad left
paddery.pad("left", "+", 4, "cat"); 
// returns: "++++cat"

// 🡺 pad right
paddery.pad("right", "*", 3, "dog"); 
// returns: "dog***"

// 🡸🡺 pad both ways
paddery.pad("lr", "=", 2, "bird"); 
// returns: "==bird=="

// 🛡️ built-in error handling
padder.pad("up", "+", 2, "cat"); 
// returns: "The direction set is invalid! ('left', 'right' or 'lr')"

padder.pad("left", "+", -5, "cat"); 
// returns: "Invalid timesToPad!"

// custom padding in both directions! including rounding for timeToPad!
padder.pad_c({
    "left": {
        "char": "%",
        "timesToPad": 3
    },
    "right": {
        "char" "("
        "timeToPad": 4.5
    }}, "cat")
// returns: "%%%cat((((("
```

## 🧠 API Reference

| Parameter     | Type     | Description |
|---------------|----------|-------------|
| `direction`   | `string` | Must be `"left"`, `"right"`, or `"lr"`. |
| `charToPad`   | `string` | The character(s) to repeat (e.g. `" "`, `"0"`, `"+"`). |
| `timesToPad`  | `number` | Number of times to repeat the character. Must be `>= 0`. |
| `stringToAdd` | `string` | The original string to pad. |
| `config`      | `string` | JSON including the config for `pad_c` |


## 📜 license

mit. do whatever you want with it, just don't blame me if you pad too hard. 
