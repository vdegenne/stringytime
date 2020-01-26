# stringytime

Utility package to convert human readable timestrings to various time values.

```javascript
const stringytime = require('stringytime');

stringytime.toMilliseconds('1m'); // returns 60000
stringytime.toMs('1m'); // alias
```

You can use the `s` for second(s), `m` for minute(s), `h` for hour(s), `d` for day(s), `M` for month(s) and `y` for year(s).

## Installation

```
npm i stringytime
```

*note: it supports CJS, TypeScript and ES6 modules syntaxes.*

## Project State

I made this very quickly as a personal module to load in my external apps. So for now there is only this function implemented. But if you are interested about the idea, I accept PRs.

