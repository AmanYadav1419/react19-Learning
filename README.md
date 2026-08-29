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
  - [React Fundamentals](#react-fundamentals)
  - [Beginner Projects](#beginner-projects)
  - [React with TypeScript](#react-with-typescript)
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
│   ├── 01-Fundamentals/          # React fundamentals examples (concepts 1-15)
│   │   ├── 01.components/        # Basic React components
│   │   ├── 02.jsx/               # JSX syntax and expressions
│   │   ├── 03.lists/             # Rendering lists in React
│   │   ├── 04.props/             # Props and component communication
│   │   ├── 05.conditionalRendering/ # Conditional rendering techniques
│   │   ├── 06.stylingInReact/    # Various styling approaches (inline, CSS, objects)
│   │   ├── 07.StateAndHooks/     # State management with useState (arrays, objects, etc.)
│   │   ├── 08.portals/           # React Portals (popups)
│   │   ├── 09.useEffect/         # Side effects with useEffect
│   │   ├── 10.propDrilling/      # Prop drilling concept (A → B → C)
│   │   ├── 11.ContextAPI/        # Context API for state management
│   │   ├── 12.useReducer/        # useReducer hook with separate reducer file
│   │   ├── 13.useRef/            # useRef hook (DOM refs, timers, examples)
│   │   ├── 14.CustomHook/        # Custom hooks (useFetch example)
│   │   ├── 15.useId/             # useId hook for unique IDs
│   │   └── DocumentationLink.jsx # Reusable documentation link component
│   ├── 02-BeginnerProjects/      # Beginner projects to practice concepts
│   │   ├── 001-CounterProject/   # Counter application
│   │   ├── 002-TodoProject/      # Todo application
│   │   ├── 003-Mealsproject/     # Meals app (with CSS)
│   │   ├── 004-CalculatorProject/# Calculator app (with CSS)
│   │   ├── 005-ToggleBackgroundColorProject/ # Background color toggle
│   │   ├── 006-HiddenSearchBarProject/ # Hidden search bar (with CSS)
│   │   ├── 007-TestimonialsProject/ # Testimonials carousel (with CSS)
│   │   ├── 008-AccordionProject/ # Accordion FAQ (with CSS + data file)
│   │   ├── 009-FormValidationProject/ # Form validation (with CSS)
│   │   ├── 010-ImageGalleryProject/ # Image gallery
│   │   ├── Index.jsx             # Reusable project section wrapper (title, desc, children)
│   │   └── 01-BeginnerProjects.mdx # Projects docs (how to add new projects)
│   ├── 03-ReactWithTypeScript/   # React + TypeScript learning content
│   │   ├── 001-Annotations/      # Type annotations (string/number/boolean)
│   │   ├── 002-TypeInference/    # Type inference + Any type
│   │   ├── 003-FunctionParametersAnnotations/ # Function params, return types, Void, Never
│   │   ├── 004-TypesInTypescript/# Array types + Multi-dim arrays + Object types
│   │   ├── 005-TypeAliases/      # Type aliases + Optional properties (?)
│   │   ├── 006-IntersectionTypes/# Intersection types (& operator)
│   │   ├── 007-UnionsTypes/      # Union types (| operator) + Literal types + Tuples
│   │   └── ReactWithTypeScript.mdx # React + TS intro & installation
│   ├── docsMap.js                # Section → doc URL mappings for DocumentationLink
│   ├── App.jsx                   # Root application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles (dark gradient, glassmorphism, responsive)
├── docs/                         # Documentation site (Docusaurus)
│   ├── docs/                     # Documentation content (MDX files)
│   │   ├── 01.components/        # Components documentation
│   │   ├── 02.jsx/               # JSX documentation
│   │   ├── 03.lists/             # Lists documentation
│   │   ├── 04.props/             # Props documentation
│   │   ├── 11.ContextAPI/        # Context API documentation
│   │   ├── 15.useId/             # useId documentation
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

### Phase 1: React Fundamentals

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
13. **useRef** — Work with useRef for DOM references and mutable values
14. **Custom Hooks** — Create your own custom hooks
15. **useId** — Generate unique IDs with the useId hook

### Phase 2: Beginner Projects (Practice Phase)

Practice what you learned by building these 10 beginner projects:
1. Counter Project
2. Todo Project
3. Meals Project
4. Calculator Project
5. Toggle Background Color Project
6. Hidden Search Bar Project
7. Testimonials Project
8. Accordion Project
9. Form Validation Project
10. Image Gallery Project

### Phase 3: React with TypeScript

Add TypeScript to your React skills:
1. Introduction to TypeScript & React with TypeScript (Setup & Install)
2. Type Annotations (String, Number, Boolean)
3. Type Inference & Any Type (with warnings)
4. Function Parameters Annotations, Default Params, Return Types (Regular & Arrow), Void, & Never
5. Types in TypeScript — Arrays, Multi-dimensional Arrays, & Object Types
6. Type Aliases — Custom types + Optional Properties (?)
7. Intersection Types — Combine types with `&` operator
8. Union Types — OR types with `|` + Literal Types + Tuples

## Concepts Covered

### React Fundamentals

Each concept includes working code examples in `src/01-Fundamentals/` and detailed explanations in `docs/docs/`:

| # | Topic | Code Examples | Documentation |
|---|-------|---------------|---------------|
| 01 | Components | [01.components](src/01-Fundamentals/01.components/) | [components.mdx](docs/docs/01.components/components.mdx) |
| 02 | JSX | [02.jsx](src/01-Fundamentals/02.jsx/) | [jsx.mdx](docs/docs/02.jsx/jsx.mdx) |
| 03 | Lists | [03.lists](src/01-Fundamentals/03.lists/) | [lists.mdx](docs/docs/03.lists/lists.mdx) |
| 04 | Props | [04.props](src/01-Fundamentals/04.props/) | [props.mdx](docs/docs/04.props/props.mdx) |
| 05 | Conditional Rendering | [05.conditionalRendering](src/01-Fundamentals/05.conditionalRendering/) | - |
| 06 | Styling in React | [06.stylingInReact](src/01-Fundamentals/06.stylingInReact/) | - |
| 07 | State and Hooks (useState) | [07.StateAndHooks](src/01-Fundamentals/07.StateAndHooks/) | - |
| 08 | Portals | [08.portals](src/01-Fundamentals/08.portals/) | - |
| 09 | useEffect | [09.useEffect](src/01-Fundamentals/09.useEffect/) | - |
| 10 | Prop Drilling | [10.propDrilling](src/01-Fundamentals/10.propDrilling/) | - |
| 11 | Context API | [11.ContextAPI](src/01-Fundamentals/11.ContextAPI/) | [contextAPI.mdx](docs/docs/11.ContextAPI/contextAPI.mdx) |
| 12 | useReducer | [12.useReducer](src/01-Fundamentals/12.useReducer/) | - |
| 13 | useRef | [13.useRef](src/01-Fundamentals/13.useRef/) | - |
| 14 | Custom Hooks | [14.CustomHook](src/01-Fundamentals/14.CustomHook/) | - |
| 15 | useId | [15.useId](src/01-Fundamentals/15.useId/) | [useId.mdx](docs/docs/15.useId/useId.mdx) |

### Beginner Projects

All projects live in `src/02-BeginnerProjects/` and use the reusable [BeginnerProjectsWrapper](src/02-BeginnerProjects/Index.jsx) component:

| # | Project | Files | Description |
|---|---------|-------|-------------|
| 001 | Counter Project | [Counter.jsx](src/02-BeginnerProjects/001-CounterProject/Counter.jsx) | Basic counter using useState |
| 002 | Todo Project | [Todo.jsx](src/02-BeginnerProjects/002-TodoProject/Todo.jsx) | Todo list with add/remove |
| 003 | Meals Project | [Meals.jsx](src/02-BeginnerProjects/003-Mealsproject/Meals.jsx) | Meals/recipe app |
| 004 | Calculator Project | [Calculator.jsx](src/02-BeginnerProjects/004-CalculatorProject/Calculator.jsx) | Basic calculator |
| 005 | Toggle Background Color | [ToggleBackgroundColor.jsx](src/02-BeginnerProjects/005-ToggleBackgroundColorProject/ToggleBackgroundColor.jsx) | Background switcher |
| 006 | Hidden Search Bar | [HiddenSearchBar.jsx](src/02-BeginnerProjects/006-HiddenSearchBarProject/HiddenSearchBar.jsx) | Expandable search |
| 007 | Testimonials | [Testimonials.jsx](src/02-BeginnerProjects/007-TestimonialsProject/Testimonials.jsx) | Testimonials carousel |
| 008 | Accordion | [Accordion.jsx](src/02-BeginnerProjects/008-AccordionProject/Accordion.jsx) | FAQ accordion |
| 009 | Form Validation | [FormValidation.jsx](src/02-BeginnerProjects/009-FormValidationProject/FormValidation.jsx) | Form with validation |
| 010 | Image Gallery | [ImageGallery.jsx](src/02-BeginnerProjects/010-ImageGalleryProject/ImageGallery.jsx) | Image gallery app |

Full guide: [01-BeginnerProjects.mdx](src/02-BeginnerProjects/01-BeginnerProjects.mdx)

### React with TypeScript

All TypeScript learning content is in `src/03-ReactWithTypeScript/`:

| # | Topic | File | What You'll Learn |
|---|-------|------|-------------------|
| 000 | Introduction & Setup | [ReactWithTypeScript.mdx](src/03-ReactWithTypeScript/ReactWithTypeScript.mdx) | What is TypeScript, installation guide (global + project-level), setup, & .ts/.tsx files basics |
| 001 | Type Annotations | [Annotations.mdx](src/03-ReactWithTypeScript/001-Annotations/Annotations.mdx) | Explicitly annotate types for variables: **String**, **Number**, **Boolean** annotations + syntax |
| 002 | Type Inference & Any Type | [TypeInference.mdx](src/03-ReactWithTypeScript/002-TypeInference/TypeInference.mdx) | Auto type inference, **Any** type, & its caveats/warnings (best practices: avoid overusing any) |
| 003 | Function Parameters & Return Types | [FunctionParametersAnnotations](src/03-ReactWithTypeScript/003-FunctionParametersAnnotations/FunctionParametersAnnotations) | Function param annotations, default params, return types (regular & arrow), **Void**, & **Never** types (with use cases) |
| 004 | Types in TypeScript — Arrays & Objects | [TypesInTypescript.mdx](src/03-ReactWithTypeScript/004-TypesInTypescript/TypesInTypescript.mdx) | **Array types** (`[]` + `Array<type>`), **Multi-dimensional arrays**, **Object types**, & objects as function return values (factory functions) |
| 005 | Type Aliases + Optional Properties | [TypeAliases.mdx](src/03-ReactWithTypeScript/005-TypeAliases/TypeAliases.mdx) | **Type keyword** for custom types (PascalCase convention), **Optional properties** with `?` (mark fields as non-required) |
| 006 | Intersection Types | [IntersectionType.mdx](src/03-ReactWithTypeScript/006-IntersectionTypes/IntersectionType.mdx) | Combine multiple types into one with **`&`** operator (e.g. Person & Employee → all properties required) |
| 007 | Union Types, Literal Types, & Tuples | [UnionsType.mdx](src/03-ReactWithTypeScript/007-UnionsTypes/UnionsType.mdx) | **Union types** with **`|`** (OR), **Literal types** (exact allowed values: "red" \| "blue" etc.), & **Tuples** |

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
