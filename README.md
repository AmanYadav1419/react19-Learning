# React 19 Learning Repository

<div align="center">
  <h3>🚀 Learn React 19 from Scratch</h3>
  <p>A comprehensive, hands-on learning repository with practical examples, beginner projects, TypeScript mastery, and cutting-edge React 19 features</p>
</div>

## ⚠️ Project Status

**This repository is currently in active development!** 🚧

New concepts, examples, and deep dives are being added regularly. Make sure to **star ⭐** this repository to keep track of updates and follow along with the learning journey!

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
  - [Phase 1: React Fundamentals](#phase-1-react-fundamentals)
  - [Phase 2: Beginner Projects](#phase-2-beginner-projects-practice-phase)
  - [Phase 3: React with TypeScript](#phase-3-react-with-typescript)
  - [Phase 4: React 19 Features](#phase-4-react-19-features)
- [Concepts Covered](#concepts-covered)
  - [React Fundamentals](#react-fundamentals)
  - [Beginner Projects](#beginner-projects)
  - [React with TypeScript](#react-with-typescript)
  - [React 19 Features](#react-19-features)
- [Contributing](#contributing)
- [Connect with Me](#connect-with-me)

## About This Project

This repository is designed to help you learn React 19 effectively by combining:

- **Hands-on code examples**: Real, working React components in the main application
- **Practical projects**: 10 interactive beginner projects applying key concepts
- **TypeScript mastery**: Thorough TypeScript guides from basic annotations to Generics, Interfaces, and Type Narrowing
- **React 19 features**: Modern architecture including the React Compiler, `use()` hook, Actions, directives, and metadata
- **Detailed documentation**: A Docusaurus-powered documentation site with explanations for each concept
- **Progressive learning**: Concepts are organized in a logical, beginner-to-advanced order

## Tech Stack

- **Main Application**:
  - React 19.1.0
  - Vite 6.4.5 (build tool & dev server)
  - React Icons 5.5.0
  - TypeScript 5.9.2

- **Documentation**:
  - Docusaurus 3.10.1 (with secured dependency overrides)
  - React 19.0.0
  - MDX for interactive documentation

## Folder Structure

```
react19-Learning/
├── src/                          # Main React application source code
│   ├── 01-Fundamentals/          # React fundamentals examples (concepts 1-15)
│   │   ├── 01.components/        # Basic React components (Header, Footer, Greet, MainContent)
│   │   ├── 02.jsx/               # JSX syntax, expressions, and rules
│   │   ├── 03.lists/             # Rendering lists and keys in React
│   │   ├── 04.props/             # Props and component communication
│   │   ├── 05.conditionalRendering/ # Conditional rendering techniques
│   │   ├── 06.stylingInReact/    # Various styling approaches (inline, CSS, objects)
│   │   ├── 07.StateAndHooks/     # State management with useState (arrays, objects, etc.)
│   │   ├── 08.portals/           # React Portals (modals, popups)
│   │   ├── 09.useEffect/         # Side effects with useEffect & data fetching
│   │   ├── 10.propDrilling/      # Prop drilling concept (A → B → C)
│   │   ├── 11.ContextAPI/        # Context API for global state management
│   │   ├── 12.useReducer/        # useReducer hook with separate reducer files
│   │   ├── 13.useRef/            # useRef hook (DOM references, mutable timers)
│   │   ├── 14.CustomHook/        # Custom hooks (reusable useFetch hook)
│   │   ├── 15.useId/             # useId hook for generating unique accessible IDs
│   │   └── DocumentationLink.jsx # Reusable documentation link component
│   ├── 02-BeginnerProjects/      # Beginner projects to practice concepts
│   │   ├── 001-CounterProject/   # Interactive counter application
│   │   ├── 002-TodoProject/      # Full-featured Todo application
│   │   ├── 003-Mealsproject/     # Meals recipe app with API integration
│   │   ├── 004-CalculatorProject/# Secure calculator application
│   │   ├── 005-ToggleBackgroundColorProject/ # Theme & background color switcher
│   │   ├── 006-HiddenSearchBarProject/ # Expandable hidden search bar
│   │   ├── 007-TestimonialsProject/ # Testimonials slider carousel
│   │   ├── 008-AccordionProject/ # Accordion FAQ with dynamic data file
│   │   ├── 009-FormValidationProject/ # Form validation with real-time feedback
│   │   ├── 010-ImageGalleryProject/ # Image gallery with navigation controls
│   │   ├── Index.jsx             # Reusable project card wrapper
│   │   └── 01-BeginnerProjects.mdx # Beginner projects documentation & guide
│   ├── 03-ReactWithTypeScript/   # React + TypeScript comprehensive guides
│   │   ├── 001-Annotations/      # Type annotations (string, number, boolean)
│   │   ├── 002-TypeInference/    # Type inference & any type caveats
│   │   ├── 003-FunctionParametersAnnotations/ # Function params, default values, return types, void, never
│   │   ├── 004-TypesInTypescript/# Array types, multi-dimensional arrays, object types
│   │   ├── 005-TypeAliases/      # Type aliases (type keyword) & optional properties (?)
│   │   ├── 006-IntersectionTypes/# Intersection types (& operator)
│   │   ├── 007-UnionsTypes/      # Union types (|), literal types, and tuples
│   │   ├── 008-EnumsTypes/       # Enums — numeric & string named constants
│   │   ├── 009-ClassAndOOP-InTypescript/ # Classes, constructors, access modifiers (public/private/protected)
│   │   ├── 010-Interface/        # Interfaces for objects, functions, classes (implements), & declaration merging
│   │   ├── 011-Generics/         # Generics: <T>, multiple params <T, U>, generic functions, classes, and filters
│   │   ├── 012-TypeNarrowing/    # Type narrowing: typeof type guards, instanceof, and intersection patterns
│   │   └── ReactWithTypeScript.mdx # React + TypeScript setup, configuration, and overview
│   ├── 04-React19Features/       # Modern React 19 architecture & new APIs
│   │   ├── 001-useHook/          # The use() hook for Promises and Context in loops/conditionals
│   │   ├── 002-Actions/          # React 19 Actions for form submissions and async transitions
│   │   └── React19Features.mdx   # React 19 overview (Compiler, directives, metadata, obsolete hooks)
│   ├── docsMap.js                # Section → documentation URL mapping config
│   ├── App.jsx                   # Root application component with categorized sections
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styling, dark theme, and responsive design
├── docs/                         # Documentation site (Docusaurus)
│   ├── docs/                     # Documentation content (MDX files)
│   │   ├── 01.components/        # Components documentation
│   │   ├── 02.jsx/               # JSX documentation
│   │   ├── 03.lists/             # Lists documentation
│   │   ├── 04.props/             # Props documentation
│   │   ├── 05.conditionalRendering/ # Conditional rendering documentation
│   │   ├── 06.stylingInReact/    # Styling documentation
│   │   ├── 07.StateAndHooks/     # State & Hooks documentation
│   │   ├── 08.Portal/            # React Portals documentation
│   │   ├── 09.useEffect/         # useEffect documentation
│   │   ├── 10.propDrilling/      # Prop drilling documentation
│   │   ├── 11.ContextAPI/        # Context API documentation
│   │   ├── 12.useReducerhook/    # useReducer documentation
│   │   ├── 13.useRef/            # useRef documentation
│   │   ├── 14.customHooks/       # Custom hooks documentation
│   │   ├── 15.useId/             # useId documentation
│   │   ├── tutorial-basics/      # Docusaurus tutorial basics
│   │   ├── tutorial-extras/      # Docusaurus tutorial extras
│   │   └── intro.md              # Introduction page
│   ├── src/                      # Docusaurus source code
│   ├── static/                   # Static assets for docs
│   ├── blog/                     # Blog posts (Docusaurus blog feature)
│   ├── docusaurus.config.js      # Docusaurus configuration
│   ├── sidebars.js               # Sidebar navigation config
│   ├── README.md                 # Docs site README
│   └── package.json              # Docs dependencies & overrides
├── public/                       # Static public assets
├── index.html                    # Main HTML entry file
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
├── package.json                  # Main project dependencies
├── package-lock.json             # Main project lockfile
├── docs-link-guide.md            # Guide for linking sections to documentation
├── skill.md                      # UI/UX design specifications & conventions
└── README.md                     # Main project README
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

Follow this step-by-step path to learn React from fundamentals to advanced features:

### Phase 1: React Fundamentals

1. **Components** — Start with the basics of functional React components
2. **JSX** — Learn JSX syntax, expressions, and formatting rules
3. **Lists** — Master rendering lists and using keys properly
4. **Props** — Understand component communication and passing data
5. **Conditional Rendering** — Explore ternary operators, logical `&&`, and early returns
6. **Styling in React** — External CSS, inline styling, and style objects
7. **State and Hooks** — Manage reactive state with `useState` (primitives, arrays, and objects)
8. **Portals** — Render components into separate DOM nodes with React Portals
9. **useEffect** — Perform side effects, subscriptions, and data fetching
10. **Prop Drilling** — Understand why passing props deeply becomes problematic
11. **Context API** — Solve prop drilling with centralized global state
12. **useReducer** — Handle complex state transitions with reducers and actions
13. **useRef** — Work with mutable references and direct DOM access
14. **Custom Hooks** — Extract reusable logic into custom hooks (e.g. `useFetch`)
15. **useId** — Generate stable, unique IDs for accessible form inputs

### Phase 2: Beginner Projects (Practice Phase)

Practice core React concepts with 10 interactive hands-on projects:
1. **Counter Project** — State management with increment, decrement, and reset
2. **Todo Project** — List manipulation, state updates, and item deletion
3. **Meals Project** — Asynchronous data fetching with API integration
4. **Calculator Project** — Mathematical parsing with arithmetic input validation
5. **Toggle Background Color** — Dynamic UI styling and theme toggling
6. **Hidden Search Bar** — Animated state-driven input visibility
7. **Testimonials Project** — Carousel navigation with stateful indexes
8. **Accordion Project** — Collapsible FAQ list using external data files
9. **Form Validation Project** — Controlled inputs, validation logic, and error handling
10. **Image Gallery Project** — Media presentation with previous/next controls

### Phase 3: React with TypeScript

Equip your React applications with full type safety:
1. **Introduction & Setup** — TypeScript basics, installation, and `.ts`/`.tsx` file conventions
2. **Type Annotations** — Explicit types for primitives (`string`, `number`, `boolean`)
3. **Type Inference & Any Type** — Compiler inference rules and best practices for avoiding `any`
4. **Function Parameters & Return Types** — Optional parameters, default values, `void`, and `never`
5. **Types in TypeScript** — Typed arrays, multi-dimensional matrices, and object structures
6. **Type Aliases** — Creating reusable custom types and optional properties (`?`)
7. **Intersection Types** — Combining types using the `&` operator
8. **Union Types, Literals, & Tuples** — Multi-type alternatives (`|`), literal values, and fixed-length tuples
9. **Enums** — Numeric auto-indexing and string-based named constant collections
10. **Classes and OOP** — Object-oriented patterns, access modifiers (`public`, `private`, `protected`), and constructors
11. **Interfaces** — Object contracts, function signatures, class implementation (`implements`), and declaration merging
12. **Generics** — Reusable type-safe components (`<T>`), multi-parameter generics (`<T, U>`), and generic classes
13. **Type Narrowing** — Refining types with `typeof` guards, `instanceof` checks, and intersection patterns

### Phase 4: React 19 Features

Explore the latest architectural shifts and APIs in React 19:
1. **React Compiler** — Automatic memoization removing the need for manual `useMemo` and `useCallback`
2. **Metadata & SEO** — Built-in native document metadata tags (`<title>`, `<meta>`) without external packages
3. **Server & Client Directives** — Seamless separation of concerns with `"use client"` and `"use server"`
4. **The `use()` Hook** — Read Promises and Context conditionally inside loops and branches
5. **Actions & Async Transitions** — Simplified form handling with automated pending states
6. **`useFormStatus` & `useActionState`** — Native hooks to manage submission state, form actions, and error handling

## Concepts Covered

### React Fundamentals

Each concept includes working code examples in `src/01-Fundamentals/` and explanations in `docs/docs/`:

| # | Topic | Code Examples | Documentation |
|---|-------|---------------|---------------|
| 01 | Components | [01.components](src/01-Fundamentals/01.components/) | [components.mdx](docs/docs/01.components/components.mdx) |
| 02 | JSX | [02.jsx](src/01-Fundamentals/02.jsx/) | [jsx.mdx](docs/docs/02.jsx/jsx.mdx) |
| 03 | Lists | [03.lists](src/01-Fundamentals/03.lists/) | [lists.mdx](docs/docs/03.lists/lists.mdx) |
| 04 | Props | [04.props](src/01-Fundamentals/04.props/) | [props.mdx](docs/docs/04.props/props.mdx) |
| 05 | Conditional Rendering | [05.conditionalRendering](src/01-Fundamentals/05.conditionalRendering/) | [conditionalRendering.mdx](docs/docs/05.conditionalRendering/) |
| 06 | Styling in React | [06.stylingInReact](src/01-Fundamentals/06.stylingInReact/) | [stylingInReact.mdx](docs/docs/06.stylingInReact/) |
| 07 | State and Hooks (useState) | [07.StateAndHooks](src/01-Fundamentals/07.StateAndHooks/) | [stateAndHooks.mdx](docs/docs/07.StateAndHooks/) |
| 08 | Portals | [08.portals](src/01-Fundamentals/08.portals/) | [Portal.mdx](docs/docs/08.Portal/) |
| 09 | useEffect | [09.useEffect](src/01-Fundamentals/09.useEffect/) | [useEffect.mdx](docs/docs/09.useEffect/) |
| 10 | Prop Drilling | [10.propDrilling](src/01-Fundamentals/10.propDrilling/) | [propDrilling.mdx](docs/docs/10.propDrilling/) |
| 11 | Context API | [11.ContextAPI](src/01-Fundamentals/11.ContextAPI/) | [contextAPI.mdx](docs/docs/11.ContextAPI/contextAPI.mdx) |
| 12 | useReducer | [12.useReducer](src/01-Fundamentals/12.useReducer/) | [useReducer.mdx](docs/docs/12.useReducerhook/) |
| 13 | useRef | [13.useRef](src/01-Fundamentals/13.useRef/) | [useRef.mdx](docs/docs/13.useRef/) |
| 14 | Custom Hooks | [14.CustomHook](src/01-Fundamentals/14.CustomHook/) | [customHooks.mdx](docs/docs/14.customHooks/) |
| 15 | useId | [15.useId](src/01-Fundamentals/15.useId/) | [useId.mdx](docs/docs/15.useId/useId.mdx) |

### Beginner Projects

All projects live in `src/02-BeginnerProjects/` and utilize the reusable [BeginnerProjectsWrapper](src/02-BeginnerProjects/Index.jsx) component:

| # | Project | Component File | Description |
|---|---------|----------------|-------------|
| 001 | Counter Project | [Counter.jsx](src/02-BeginnerProjects/001-CounterProject/Counter.jsx) | Interactive counter using useState with increment/decrement/reset |
| 002 | Todo Project | [Todo.jsx](src/02-BeginnerProjects/002-TodoProject/Todo.jsx) | Task tracker supporting dynamic addition and item deletion |
| 003 | Meals Project | [Meals.jsx](src/02-BeginnerProjects/003-Mealsproject/Meals.jsx) | Recipe catalog fetching external meal data via Axios |
| 004 | Calculator Project | [Calculator.jsx](src/02-BeginnerProjects/004-CalculatorProject/Calculator.jsx) | Arithmetic calculator with safe input parsing and error handling |
| 005 | Toggle Background Color | [ToggleBackgroundColor.jsx](src/02-BeginnerProjects/005-ToggleBackgroundColorProject/ToggleBackgroundColor.jsx) | Live background and color scheme switcher |
| 006 | Hidden Search Bar | [HiddenSearchBar.jsx](src/02-BeginnerProjects/006-HiddenSearchBarProject/HiddenSearchBar.jsx) | Smooth animated expandable search input |
| 007 | Testimonials | [Testimonials.jsx](src/02-BeginnerProjects/007-TestimonialsProject/Testimonials.jsx) | Client feedback carousel with state-driven slide navigation |
| 008 | Accordion | [Accordion.jsx](src/02-BeginnerProjects/008-AccordionProject/Accordion.jsx) | Expandable FAQ accordion powered by dynamic data structures |
| 009 | Form Validation | [FormValidation.jsx](src/02-BeginnerProjects/009-FormValidationProject/FormValidation.jsx) | Comprehensive form field validation with visual error indicators |
| 010 | Image Gallery | [ImageGallery.jsx](src/02-BeginnerProjects/010-ImageGalleryProject/ImageGallery.jsx) | Responsive image viewer with sequential pagination controls |

Full guide: [01-BeginnerProjects.mdx](src/02-BeginnerProjects/01-BeginnerProjects.mdx)

### React with TypeScript

All TypeScript learning content is organized in `src/03-ReactWithTypeScript/`:

| # | Topic | File | What You'll Learn |
|---|-------|------|-------------------|
| 000 | Introduction & Setup | [ReactWithTypeScript.mdx](src/03-ReactWithTypeScript/ReactWithTypeScript.mdx) | Overview of TypeScript, setup, benefits in React development, and file conventions (`.ts`/`.tsx`) |
| 001 | Type Annotations | [Annotations.mdx](src/03-ReactWithTypeScript/001-Annotations/Annotations.mdx) | Primitive type annotations for variables: `string`, `number`, and `boolean` syntax |
| 002 | Type Inference & Any Type | [TypeInference.mdx](src/03-ReactWithTypeScript/002-TypeInference/TypeInference.mdx) | Automatic type inference, the `any` escape hatch, and why overusing `any` undermines type safety |
| 003 | Function Parameters & Return Types | [FunctionParametersAnnotations](src/03-ReactWithTypeScript/003-FunctionParametersAnnotations/FunctionParametersAnnotations) | Annotating function parameters, default values, return types, and using `void` and `never` |
| 004 | Types in TypeScript — Arrays & Objects | [TypesInTypescript.mdx](src/03-ReactWithTypeScript/004-TypesInTypescript/TypesInTypescript.mdx) | Single & multi-dimensional array types (`T[]` vs `Array<T>`), object type shapes, and return factories |
| 005 | Type Aliases & Optional Properties | [TypeAliases.mdx](src/03-ReactWithTypeScript/005-TypeAliases/TypeAliases.mdx) | Creating custom reusable types with the `type` keyword and marking non-required fields with `?` |
| 006 | Intersection Types | [IntersectionType.mdx](src/03-ReactWithTypeScript/006-IntersectionTypes/IntersectionType.mdx) | Merging multiple type definitions into unified contracts with the `&` operator |
| 007 | Union Types, Literals, & Tuples | [UnionsType.mdx](src/03-ReactWithTypeScript/007-UnionsTypes/UnionsType.mdx) | Flexible types with `|`, strict literal values, and fixed-length typed tuples with destructuring |
| 008 | Enums — Named Constants | [EnumsTypes.mdx](src/03-ReactWithTypeScript/008-EnumsTypes/EnumsTypes.mdx) | Named constant collections, numeric auto-incrementing enums, and string-valued enums |
| 009 | Classes & OOP in TypeScript | [ClassAndOOP-InTypescript.mdx](src/03-ReactWithTypeScript/009-ClassAndOOP-InTypescript/ClassAndOOP-InTypescript.mdx) | Class property annotations, access modifiers (`public`, `private`, `protected`), constructors, and OOP |
| 010 | Interfaces | [Interface.mdx](src/03-ReactWithTypeScript/010-Interface/Interface.mdx) | Defining object shapes, function interfaces, class contracts via `implements`, and declaration merging |
| 011 | Generics | [Generic.mdx](src/03-ReactWithTypeScript/011-Generics/Generic.mdx) | Writing reusable code with type parameters (`<T>`), multiple parameters (`<T, U>`), and generic classes |
| 012 | Type Narrowing | [TypeNarrowing.mdx](src/03-ReactWithTypeScript/012-TypeNarrowing/TypeNarrowing.mdx) | Refining types conditionally with `typeof` type guards, `instanceof` class checks, and intersections |

### React 19 Features

Modern React 19 documentation and deep dives are located in `src/04-React19Features/`:

| # | Topic | File | What You'll Learn |
|---|-------|------|-------------------|
| 000 | React 19 Architecture Overview | [React19Features.mdx](src/04-React19Features/React19Features.mdx) | The React Compiler, automatic memoization replacing `useMemo`/`useCallback`, native metadata, server/client directives, and obsolete patterns |
| 001 | The `use()` Hook | [useHookTopic.mdx](src/04-React19Features/001-useHook/useHookTopic.mdx) | Reading Promises and Context asynchronously, conditional usage in loops/branches, and replacing boilerplate `useEffect` data fetching |
| 002 | React 19 Actions | [ActionsTopic.mdx](src/04-React19Features/002-Actions/ActionsTopic.mdx) | Form handling with asynchronous actions, pending states, error handling, `useActionState`, and `useFormStatus` |

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
