---
sidebar_position: 1
title: JavaScript
---

# Overview
Running notes for GitHub.

## Running

```
async function main() {
    ...
}
main()
```
Or

```
( async () => {
    await SOMETHING();
}) ();
```

## Export
Using an export routine within the same source file:

```
sleep: async function(secs, text) {
    console.log("sleep ... [delay]",secs+"s", text)
    await new Promise(resolve => setTimeout(resolve, secs*1000));
},
...

await module.exports.sleep(2, "to allow default branch to settle");
```

## Package JSON
Setup initial package.

```
npm init -y
```

### .gitignore

```
node_modules
```

## Lint

Install
```
npm init @eslint/config
```

Configuration (*.eslintrc.js*):
```
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
```

Package.json:
```
"scripts": {
    "lint": "eslint src/*.js"
  },
```