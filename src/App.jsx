import Greet from "./components/01.components/Greet";
import Header from "./components/01.components/Header";
import MainContent from "./components/01.components/MainContent";
import Footer from "./components/01.components/Footer";
import WelcomeMessage from "./components/02.jsx/WelcomeMessage";
import JSXRules from "./components/02.jsx/JSXRules";
import JSXexpression from "./components/02.jsx/JSXexpression";
import Greeting from "./components/02.jsx/Greeting";
import ProductInfo from "./components/02.jsx/ProductInfo";
import UserList from "./components/03.lists/UserList";
import ProductList from "./components/03.lists/ProductList";
import Person from "./components/04.props/Person";
import Product from "./components/04.props/Product";
import Weather from "./components/05.conditionalRendering/Weather";
import UserStatus from "./components/05.conditionalRendering/UserStatus";
import ConditionalGreeting from "./components/05.conditionalRendering/ConditionalGreeting";
import StyledCard from "./components/06.stylingInReact/StyledCard";
import ProfileCard from "./components/06.stylingInReact/ProfileCard";
import IconComponent from "./components/06.stylingInReact/IconComponent";
import StateAndHooks from "./components/07.StateAndHooks/StateAndHooks";
import UpdateArrayWithUseState from "./components/07.StateAndHooks/UpdateArrayWithUseState";
import UpdateObjectWithUseState from "./components/07.StateAndHooks/UpdateObjectWithUseState";
import UpdateArrayOfObjectsWithUseState from "./components/07.StateAndHooks/UpdateArrayOfObjectsWithUseState";
import Counter from "./components/07.StateAndHooks/Counter";
import TodoList from "./components/07.StateAndHooks/TodoList";
import Profile from "./components/07.StateAndHooks/Profile";
import ShoppingList from "./components/07.StateAndHooks/ShoppingList";
import CopyInput from "./components/08.portals/CopyInput";
import DataFetching from "./components/09.useEffect/DataFetching";
import BasicEffect from "./components/09.useEffect/BasicEffect";
import CounterEffect from "./components/09.useEffect/CounterEffect";
import FetchDataEffect from "./components/09.useEffect/FetchDataEffect";
import ComponentA from "./components/10.propDrilling/ComponentA";
import ParentComponent from "./components/11.ContextAPI/ParentComponent";
import UserProfile from "./components/11.ContextAPI/UserProfile";
import { UserProvider } from "./components/11.ContextAPI/UserContext";
import UpdateUserComponent from "./components/11.ContextAPI/UpdateUser";
import ReducerHookExample from "./components/12.useReducer/ReducerHookExample";
import CounterUI from "./components/12.useReducer/CounterUI";
import FocusInput from "./components/13.useRef/FocusInput";
import Timer from "./components/13.useRef/Timer";
import CustomHookUsage from "./components/14.CustomHook/customHookUsage";
import UseIdHookImplemenation from "./components/15.useId/useIdHookImplemenation";
import DocumentationLink from "./components/DocumentationLink";
import { docsMap } from "./docsMap";
import BeginnerProjectsWrapper from "./01-BeginnerProjects/Index";
import CounterProject from "./01-BeginnerProjects/001-CounterProject/Counter";
import TodoProject from "./01-BeginnerProjects/002-TodoProject/Todo";
import MealsProject from "./01-BeginnerProjects/003-Mealsproject/Meals";
import CalculatorProject from "./01-BeginnerProjects/004-CalculatorProject/Calculator";
import ToggleBackgroundColorProject from "./01-BeginnerProjects/005-ToggleBackgroundColorProject/ToggleBackgroundColor";
import HiddenSearchBarProject from "./01-BeginnerProjects/006-HiddenSearchBarProject/HiddenSearchBar";
import TestimonialsProject from "./01-BeginnerProjects/007-TestimonialsProject/Testimonials";
import AccordionProject from "./01-BeginnerProjects/008-AccordionProject/Accordion";
import FormValidationProject from "./01-BeginnerProjects/009-FormValidationProject/FormValidation";
import ImageGalleryProject from "./01-BeginnerProjects/010-ImageGalleryProject/ImageGallery";

const App = () => {
  // this variable is for to pass the data as prop to ComponentA, to understand how the prop drilling works.
  const name = "AmanYadav";

  return (
    <div className="container">
      <header className="app-header">
        <h1>React 19 Learning Hub</h1>
        <p>Master React fundamentals with hands‑through examples</p>
      </header>

      <section className="section-wrapper">
        <h2 className="section-title">01. Components</h2>
        <div className="component-wrapper">
          <p className="component-label">Basic Components</p>
          {/* importing Greet component for the Component Excercise task  */}
          <Greet />
          {/* importing all the components for the Excercise task, in an correct order */}
          <Header />
          <MainContent />
          <Footer />
        </div>
        <DocumentationLink docPath={docsMap["01.components"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">02. JSX</h2>
        <div className="component-wrapper">
          <p className="component-label">JSX Basics</p>
          {/* importing WelcomeMessage component for the JSX Excercise task */}
          <WelcomeMessage />
        </div>
        <div className="component-wrapper">
          <p className="component-label">JSX Rules</p>
          {/* importing JSXRules component for the JSX Rules Excercise task */}
          <JSXRules />
        </div>
        <div className="component-wrapper">
          <p className="component-label">JSX Expressions</p>
          {/* importing JSXexpression component for the JSX Expression theory */}
          <JSXexpression />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Greeting Component</p>
          {/* importing JSXRules component for the JSX Rules Excercise task */}
          <Greeting />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Product Info</p>
          {/* importing JSXRules component for the JSX Rules Excercise task */}
          <ProductInfo />
        </div>
        <DocumentationLink docPath={docsMap["02.jsx"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">03. Lists</h2>
        <div className="component-wrapper">
          <p className="component-label">User List</p>
          {/* importing UserList component for the Rendering a List Data with .map() Excercise task */}
          <UserList />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Product List</p>
          {/* importing ProductList component for the Rendering a List Data with .map() Excercise task */}
          <ProductList />
        </div>
        <DocumentationLink docPath={docsMap["03.lists"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">04. Props</h2>
        <div className="component-wrapper">
          <p className="component-label">Person Component</p>
          {/* importing Person component for the Using Props in React Components Excercise task */}
          <Person name="Aman" age={21} />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Product Component</p>
          {/* importing Product component for the Using Props in React Components Excercise task */}
          <Product name="Iphone" price={1500} />
        </div>
        <DocumentationLink docPath={docsMap["04.props"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">05. Conditional Rendering</h2>
        <div className="component-wrapper">
          <p className="component-label">Weather Component</p>
          {/* importing Weather component for the Conditional Rendering in React Excercise task Step 1 */}
          <Weather temperature={10} />
          <Weather temperature={20} />
          <Weather temperature={30} />
        </div>
        <div className="component-wrapper">
          <p className="component-label">User Status</p>
          {/* importing UserStatus component for the Conditional Rendering in React Excercise task Step 2 */}
          <UserStatus loggedIn={true} isAdmin={false} />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Conditional Greeting</p>
          {/* importing Greeting component for the Conditional Rendering in React Excercise task Step 3 */}
          <ConditionalGreeting timeOfDay="morning" />
          <ConditionalGreeting timeOfDay="afternoon" />
        </div>
        <DocumentationLink docPath={docsMap["05.conditionalRendering"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">06. Styling in React</h2>
        <div className="component-wrapper">
          <p className="component-label">Icon Component</p>
          {/* importing IconComponent component for the Styling Components in React Excercise task Step 3 */}
          <IconComponent />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Styled Card</p>
          {/* importing StyledCard component for the Styling Components in React Excercise task Step 1 */}
          <StyledCard />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Profile Card</p>
          {/* importing ProfileCard component for the Styling Components in React Excercise task Step 2 */}
          <ProfileCard />
        </div>
        <DocumentationLink docPath={docsMap["06.stylingInReact"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">07. State and Hooks</h2>
        <div className="component-wrapper">
          <p className="component-label">State and Hooks Introduction</p>
          {/* importing StateAndHooks component for understanding how usestate hook is working */}
          <StateAndHooks />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Update Array with useState</p>
          {/* importing  UpdateArrayWithUseState component for understanding how useState hook is working for array */}
          <UpdateArrayWithUseState />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Update Object with useState</p>
          {/* importing  UpdateArrayWithUseState component for understanding how useState hook is working for objects */}
          <UpdateObjectWithUseState />
        </div>
        <div className="component-wrapper">
          <p className="component-label">
            Update Array of Objects with useState
          </p>
          {/* importing  UpdateArrayOfObjectsWithUseState component for understanding how useState hook is working for array of objects */}
          <UpdateArrayOfObjectsWithUseState />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Counter</p>
          {/* importing Counter component for the Mastering `useState` in React Excercise task Step 1 */}
          <Counter />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Todo List</p>
          {/* importing UserStatus component for the Mastering `useState` in React Excercise task Step 2 */}
          <TodoList />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Profile</p>
          {/* importing UserStatus component for the Mastering `useState` in React Excercise task Step 3 */}
          <Profile />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Shopping List</p>
          {/* importing UserStatus component for the Mastering `useState` in React Excercise task Step 4 */}
          <ShoppingList />
        </div>
        <DocumentationLink docPath={docsMap["07.StateAndHooks"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">08. Portals</h2>
        <div className="component-wrapper">
          <p className="component-label">Copy Input</p>
          {/* importing CopyInput component for understanding Portal concept how it is working */}
          <CopyInput />
        </div>
        <DocumentationLink docPath={docsMap["08.Portal"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">09. useEffect</h2>
        <div className="component-wrapper">
          <p className="component-label">Data Fetching</p>
          {/* importing DataFetching component for understanding how useEffect hook is working for fetching data i.e side effects */}
          <DataFetching />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Basic Effect</p>
          {/* importing BasicEffect component for Excercise :- Understanding useEffect in React task Step 1 */}
          <BasicEffect />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Counter Effect</p>
          {/* importing CounterEffect component for Excercise :- Understanding useEffect in React task Step 2 */}
          <CounterEffect />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Fetch Data Effect</p>
          {/* importing FetchDataEffect component for Excercise :- Understanding useEffect in React task Step 3 */}
          <FetchDataEffect />
        </div>
        <DocumentationLink docPath={docsMap["09.useEffect"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">10. Prop Drilling</h2>
        <div className="component-wrapper">
          <p className="component-label">Prop Drilling Example</p>
          {/* importing ComponentA component for understanding how the prop drilling works and passing name as prop to the component */}
          <ComponentA name={name} />
        </div>
        <DocumentationLink docPath={docsMap["10.propDrilling"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">11. Context API</h2>
        <div className="component-wrapper">
          <p className="component-label">Parent Component</p>
          {/* importing ParentComponent component for understanding how the ContextAPi works in React. */}
          <ParentComponent />
        </div>
        <UserProvider>
          <div className="component-wrapper">
            <p className="component-label">User Profile & Update</p>
            {/* importing UserProfile and UpdateUserComponent, component for the Mastering `useContext` in React Excercise */}
            <UserProfile />
            <UpdateUserComponent />
          </div>
        </UserProvider>
        <DocumentationLink docPath={docsMap["11.ContextAPI"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">12. useReducer Hook</h2>
        <div className="component-wrapper">
          <p className="component-label">Reducer Hook Example</p>
          {/* imporitng ReducerHookExample, component to understand useReducer hook with example */}
          <ReducerHookExample />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Counter UI (useReducer)</p>
          {/* importing Counter, component to complete the excercise for the useReducer Hook */}
          <div>
            <h1>React useReducer Excercise :-</h1>
            <CounterUI />
          </div>
        </div>
        <DocumentationLink docPath={docsMap["12.useReducer"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">13. useRef Hook</h2>
        <div className="component-wrapper">
          <p className="component-label">Focus Input</p>
          {/* importing FocusInput component to complete the excercise for the useRef Hook Step 1 */}
          <FocusInput />
        </div>
        <div className="component-wrapper">
          <p className="component-label">Timer</p>
          {/* importing Timer component to complete the excercise for the useRef Hook Step 2*/}
          <Timer />
        </div>
        <DocumentationLink docPath={docsMap["13.useRef"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">14. Custom Hooks</h2>
        <div className="component-wrapper">
          <p className="component-label">useFetch Custom Hook</p>
          {/* importing CustomHookUsage component to understand the custom hook implemenation */}
          <CustomHookUsage />
        </div>
        <DocumentationLink docPath={docsMap["14.customHooks"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">15. useId Hook</h2>
        <div className="component-wrapper">
          <p className="component-label">useId Hook Implementation</p>
          {/* importing useIdHookImplementation component to understand the useId hook implementation */}
          <UseIdHookImplemenation />
        </div>
        <DocumentationLink docPath={docsMap["15.useId"]} />
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">Beginner Projects</h2>

        {/* Counter Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Counter Project"
            description="A basic counter application to practice React state management using useState."
          >
            <CounterProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* Todo Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Todo Project"
            description="A simple todo list application to practice state management, adding, and removing items."
          >
            <TodoProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* Meals API Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Meals API Project"
            description="A simple Fetch api call with useEffect and rendering all the fetched data to the ui"
          >
            <MealsProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* Calculator Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Calculator Project"
            description="A Simple Calculator Application performing add , multiply , subtract operations "
          >
            <CalculatorProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* ToggleBackgroundColor Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Toggle Background Color Project"
            description="A Simple Application that will toggle the background styles, button styles and text styles."
          >
            <ToggleBackgroundColorProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* Hidden Search Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Hidden SearchBar Project"
            description="A Application that will toggle the background styles, button styles and text styles."
          >
            <HiddenSearchBarProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* Testimonials Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Testimonials Project"
            description="A Simple Testimonials Application that will display the testimonials."
          >
            <TestimonialsProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* Accordion Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Accordion Project"
            description="A Simple Accordion Application that will display the accordion."
          >
            <AccordionProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* Beginner Friendly Form validation Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Beginner Friendly Form validation Project"
            description="A Simple Form Validation Project that will validate the form inputs."
          >
            <FormValidationProject />
          </BeginnerProjectsWrapper>
        </div>

        {/* Beginner Friendly Form validation Project Section */}
        <div className="component-wrapper">
          <BeginnerProjectsWrapper
            title="Beginner Friendly Image Gallery Project"
            description="A Simple Image Gallery Project that will have the pervious and next image functionality."
          >
            <ImageGalleryProject />
          </BeginnerProjectsWrapper>
        </div>
      </section>
    </div>
  );
};

export default App;
