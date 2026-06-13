# React 19 Learning Repository

<div align="center">
  <h3>🚀 Learn React 19 from Scratch</h3>
  <p>A comprehensive, hands-on learning repository with practical examples and detailed documentation</p>
</div>

## ⚠️ Project Status

**This repository is currently in active development!** 🚧

New concepts and examples are being added regularly. Make sure to **star ⭐** this repository to keep track of updates and follow along with the learning journey!

## Table of Contents

- [About This Project](#about-this-project)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Main Application](#running-the-main-application)
  - [Running the Documentation](#running-the-documentation)
- [Learning Path](#learning-path)
- [Concepts Covered](#concepts-covered)
- [Contributing](#contributing)
- [Connect with Me](#connect-with-me)

## About This Project

This repository is designed to help you learn React 19 effectively by combining:

- **Hands-on code examples**: Real, working React components in the main application
- **Detailed documentation**: A Docusaurus-powered documentation site with explanations for each concept
- **Progressive learning**: Concepts are organized in a logical, beginner-friendly order

## Tech Stack

- **Main Application**:
  - React 19.1.0
  - Vite 6.3.5 (build tool & dev server)
  - React Icons 5.5.0

- **Documentation**:
  - Docusaurus 3.7.0
  - React 19.0.0
  - MDX for interactive content

## Folder Structure

```
react19-Learning/
├── src/                          # Main React application source code
│   ├── components/               # Example components organized by concept
│   │   ├── 01.components/        # Basic React components
│   │   ├── 02.jsx/               # JSX syntax and expressions
│   │   ├── 03.lists/             # Rendering lists in React
│   │   ├── 04.props/             # Props and component communication
│   │   ├── 05.conditionalRendering/ # Conditional rendering techniques
│   │   ├── 06.stylingInReact/    # Various styling approaches
│   │   ├── 07.StateAndHooks/     # State management with useState
│   │   ├── 08.portals/           # React Portals
│   │   ├── 09.useEffect/         # Side effects with useEffect
│   │   ├── 10.propDrilling/      # Prop drilling concept
│   │   ├── 11.ContextAPI/        # Context API for state management
│   │   ├── 12.useReducer/        # useReducer hook
│   │   └── 13.useRef/            # useRef hook
│   ├── App.jsx                   # Root application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── docs/                         # Documentation site (Docusaurus)
│   ├── docs/                     # Documentation content
│   │   ├── 01.components/        # Components documentation
│   │   ├── 02.jsx/               # JSX documentation
│   │   ├── ...                   # (All concept folders mirror the main app)
│   │   └── intro.md              # Introduction page
│   ├── src/                      # Docusaurus source code
│   ├── static/                   # Static assets for docs
│   ├── docusaurus.config.js      # Docusaurus configuration
│   └── package.json              # Docs dependencies
├── public/                       # Static assets for main app
├── index.html                    # Main app HTML entry
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── package.json                  # Main project dependencies
```

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **npm** or **yarn**: Package managers

### Installation

1. **Clone the repository**

```bash
git clone <your-repository-url>
cd react19-Learning
```

2. **Install dependencies for the main application**

```bash
npm install
```

3. **Install dependencies for the documentation** (optional, if you want to run the docs locally)

```bash
cd docs
npm install
cd ..
```

### Running the Main Application

To run the React application with all the example components:

```bash
npm run dev
```

The application will open automatically in your browser at `http://localhost:5173`.

### Running the Documentation

To run the documentation site locally:

```bash
cd docs
npm start
```

The documentation site will open at `http://localhost:3000`.

## Learning Path

Follow this step-by-step path to learn React effectively:

1. **Components** - Start with the basics of React components
2. **JSX** - Learn how JSX works and how to use expressions
3. **Lists** - Master rendering lists of data
4. **Props** - Understand how to pass data between components
5. **Conditional Rendering** - Learn different ways to conditionally render content
6. **Styling in React** - Explore various styling approaches
7. **State and Hooks** - Dive into state management with useState
8. **Portals** - Learn about React Portals for DOM manipulation
9. **useEffect** - Handle side effects in your components
10. **Prop Drilling** - Understand prop drilling and its limitations
11. **Context API** - Manage global state with Context API
12. **useReducer** - Use useReducer for complex state logic
13. **useRef** - Work with useRef for DOM references and mutable values
14. **Custom Hooks** - Create your own custom hooks

## Concepts Covered

Each concept includes:
- Working code examples in `src/components/`
- Detailed explanations in `docs/docs/`
- Practical use cases and best practices

## Contributing

Feel free to contribute to this learning repository! Whether it's fixing bugs, adding new examples, or improving documentation, all contributions are welcome.

## Connect with Me

If you find this repository helpful, consider connecting with me on social media! I share updates about web development, React, and more.

<div align="center">
  <h3>Let's Connect! 🌐</h3>

  [![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=react&logoColor=white)](https://aman-yadav1419-portfolio.vercel.app/)  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aman-yadav2003/)  
  [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Aman_Yadav1419?t=DezgZO1fFZWSy1d-uMspHQ&s=09)
</div>

---

<div align="center">
  <p>Don't forget to ⭐ this repository if you found it helpful!</p>
  <p>Happy learning React 19! 🚀</p>
</div>
