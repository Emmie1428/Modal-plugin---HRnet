# Modal React Plugin

## Description

`modal-react-plugin` is a reusable and customizable React modal component.  
It is designed to be simple to integrate into any React project that needs a lightweight modal solution.

The plugin allows you to:

- open and close a modal easily
- display a custom message
- customize styling through class names
- use a default base CSS file
- integrate it into any React application

---

## Used technologies

<div align="center">
  <img src="https://img.shields.io/badge/React-%3E17.0.0-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/React_DOM-%3E17.0.0-20232A?logo=react&logoColor=61DAFB" alt="React DOM" />
  <img src="https://img.shields.io/badge/Vite-5.4.21-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/ESLint-9.39.4-4B32C3?logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/npm-package-red?logo=npm&logoColor=white" alt="npm package" />
</div>

## Overview

This project provides a generic modal component for React applications.  
It can be used wherever a modal dialog is needed, such as:

- confirmation messages
- success notifications
- warning dialogs
- custom information popups

The component is intentionally minimal and flexible, so it can be styled according to the needs of each project.

---

## Tech Stack

### Requirements

- **Node.js**: >= 20.0.0
- **npm**: Comes with Node.js.
- **React**: > 17.0.0
- **Code Editor**: [Visual Studio Code](https://code.visualstudio.com/) is highly recommended.

### Peer dependencies

- **React** `>17.0.0`
- **React DOM** `>17.0.0`

### Development tools

- **Vite** `5.4.21`
- **@vitejs/plugin-react** `4.7.0`
- **ESLint** `9.39.4`
- **eslint-plugin-react-hooks** `7.0.1`
- **eslint-plugin-react-refresh** `0.5.2`

---

## Features

- Reusable React modal component
- Generic and lightweight implementation
- Custom message support
- Conditional rendering with `isOpen`
- Close button support with `onClose`
- Customizable CSS classes
- Base stylesheet included
- Easy integration into any React project

---

## Installation

Install the package:

```bash
npm install modal-react-plugin
```

or with yarn:

```bash
yarn add modal-react-plugin
```

---

## Usage

### Import the component

```jsx
import Modal from "modal-react-plugin"
import "modal-react-plugin/dist/style.css"
```

### Example

```jsx
import { useState } from "react"
import Modal from "modal-react-plugin"
import "modal-react-plugin/dist/style.css"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Employee created successfully!"
      />
    </>
  )
}

export default App
```

---

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | boolean | Yes | Controls whether the modal is displayed |
| `onClose` | function | Yes | Function triggered when the close button is clicked |
| `message` | string | Yes | Message displayed inside the modal |
| `overlayClassName` | string | No | Custom class for the overlay |
| `contentClassName` | string | No | Custom class for the modal content |
| `closeButtonClassName` | string | No | Custom class for the close button |
| `messageClassName` | string | No | Custom class for the message text |

---

## Styling

The plugin includes a default CSS file:

```bash
Modal.css
```

You can use the default styles or override them by passing custom class names:

- `overlayClassName`
- `contentClassName`
- `closeButtonClassName`
- `messageClassName`

This makes the component adaptable to different design systems and UI styles.

---

## Project structure

```bash
modal-react-plugin/
├── src/
│   ├── Modal.jsx      # Main reusable modal component
│   └── Modal.css      # Base modal styles
├── dist/              # Compiled distribution files
├── package.json       # Package configuration
└── README.md          # Documentation
```

---

## Available scripts

- `npm run dev`  
  Starts the development server with Vite.

- `npm run build`  
  Builds the plugin for distribution.

- `npm run preview`  
  Previews the build locally.

- `npm run lint`  
  Runs ESLint to analyze code quality.

---

## Exported files

The package exports:

- `./dist/modal.js`
- `./dist/style.css`

Defined in `package.json`:

```json
"exports": {
  ".": "./dist/modal.js",
  "./dist/style.css": "./dist/style.css"
}
```

---

## Version

Current version: **1.0.1**

---

## Author

Emmie Gemme

---

## License

This package is public (`private: false`) and intended to be reused in React projects.