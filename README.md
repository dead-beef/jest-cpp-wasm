# jest-cpp-wasm

[![npm](https://img.shields.io/npm/v/jest-cpp-wasm.svg)](
    https://www.npmjs.com/package/jest-cpp-wasm
) [![node](https://img.shields.io/node/v/jest-cpp-wasm.svg)](
    https://nodejs.org/
) [![Libraries.io for GitHub](https://img.shields.io/librariesio/github/dead-beef/jest-cpp-wasm.svg)](
    https://libraries.io/npm/jest-cpp-wasm/
) [![license](https://img.shields.io/github/license/dead-beef/jest-cpp-wasm.svg)](
    https://github.com/dead-beef/jest-cpp-wasm/blob/master/LICENSE
)

## Overview

C/C++ to WASM Jest transformer.

## Requirements

- [`Node.js`](https://nodejs.org/)
- [`NPM`](https://nodejs.org/)
- [`Emscripten`](https://emscripten.org/)

## Installation

```bash
npm install jest-cpp-wasm
```

## Usage

```js
transform: {
  '^.+\\.(c|cpp)$': ['jest-cpp-wasm', {
    // options
  }],
},
```

[`Options`](https://github.com/ClickSimply/cpp-wasm-loader#webpack-options)

## Licenses

* [`jest-cpp-wasm`](https://github.com/dead-beef/jest-cpp-wasm/blob/master/LICENSE)
