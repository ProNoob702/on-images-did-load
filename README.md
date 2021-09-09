<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">useImagesDidLoad</h3>

  <p align="center">
    hook to make some logic when images inside your component are ready 🏹 
    <br />
    <br />
    <a href="https://codesandbox.io/s/autumn-sun-pqlx2?file=/src/App.tsx">View Demo</a>
    ·
    <a href="https://github.com/NoobDay/on-images-did-load/issues">Report Bug</a>
    ·
    <a href="https://github.com/NoobDay/on-images-did-load/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Why this Component](#why)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Props](#props)
- [Spinner while images gets loaded Demo](#demo)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## Why this Component

this hook could be useful if you wanna show a spinner until images are ready or do some logic when every thing is ready

<!-- BUILT WITH -->

### Built With

- React
- TypeScript (TypeScript JSX)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

React.js/TypeScript project <a href="https://create-react-app.dev/docs/adding-typescript/"> Help ?</a>

### Installation

1.Install it using NPM

```npm
npm i ts-on-images-did-load
```

2.Then import it in your component:

```js
import { useImagesDidLoad } from 'ts-on-images-did-load'
```

<!-- USAGE EXAMPLES -->

## Usage

```tsx
const imagesContainerRef = useRef()
useImagesDidLoad(
  imagesContainerRef,
  () => {
    // call some callback
  },
  [
    /*Dependencies*/
  ]
  return (
    <div ref={imagesContainerRef}>
      //  ... images
    </div>
  )
)
```

## Example : Spinner while images gets loaded Demo

<a href="https://codesandbox.io/s/autumn-sun-pqlx2?file=/src/App.tsx">
<strong>open codeSandbox »</strong> 
</a>

<!-- CONTACT -->

## Contact

Taha seddik - taha.seddik1992@gmail.com

Project Link: [https://github.com/NoobDay/onimagesdidload-ts](https://github.com/NoobDay/onimagesdidload-ts)
