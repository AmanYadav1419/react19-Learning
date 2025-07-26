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

const App = () => {
  // this variable is for to pass the data as prop to ComponentA, to understand how the prop drilling works.
  const name = "AmanYadav";

  return (
    <div>
      {/* importing Greet component for the Component Excercise task
      <Greet />

      {/* importing all the components for the Excercise task, in an correct order */}
      <Header />
      <MainContent />
      <Footer />

      {/* importing WelcomeMessage component for the JSX Excercise task */}
      <WelcomeMessage />

      {/* importing JSXRules component for the JSX Rules Excercise task */}
      <JSXRules />

      {/* importing JSXexpression component for the JSX Expression theory */}
      <JSXexpression />

      {/* importing JSXRules component for the JSX Rules Excercise task */}
      <Greeting />

      {/* importing JSXRules component for the JSX Rules Excercise task */}
      <ProductInfo />

      {/* importing UserList component for the Rendering a List Data with .map() Excercise task */}
      <UserList />

      {/* importing ProductList component for the Rendering a List Data with .map() Excercise task */}
      <ProductList />

      {/* importing Person component for the Using Props in React Components Excercise task */}
      <Person name="Aman" age={21} />

      {/* importing Product component for the Using Props in React Components Excercise task */}
      <Product name="Iphone" price={1500} />

      {/* importing Weather component for the Conditional Rendering in React Excercise task Step 1 */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* importing UserStatus component for the Conditional Rendering in React Excercise task Step 2 */}
      <UserStatus loggedIn={true} isAdmin={false} />

      {/* importing Greeting component for the Conditional Rendering in React Excercise task Step 3 */}
      <ConditionalGreeting timeOfDay="morning" />
      <ConditionalGreeting timeOfDay="afternoon" />

      {/* importing IconComponent component for the Styling Components in React Excercise task Step 3 */}
      <IconComponent />

      {/* importing StyledCard component for the Styling Components in React Excercise task Step 1 */}
      <StyledCard />
      {/* importing ProfileCard component for the Styling Components in React Excercise task Step 2 */}
      <ProfileCard />

      {/* importing StateAndHooks component for understanding how usestate hook is working */}
      <StateAndHooks />

      {/* importing  UpdateArrayWithUseState component for understanding how useState hook is working for array */}
      <UpdateArrayWithUseState />

      {/* importing  UpdateArrayWithUseState component for understanding how useState hook is working for objects */}
      <UpdateObjectWithUseState />

      {/* importing  UpdateArrayOfObjectsWithUseState component for understanding how useState hook is working for array of objects */}
      <UpdateArrayOfObjectsWithUseState />

      {/* importing Counter component for the Mastering `useState` in React Excercise task Step 1 */}
      <Counter />

      {/* importing UserStatus component for the Mastering `useState` in React Excercise task Step 2 */}
      <TodoList />

      {/* importing UserStatus component for the Mastering `useState` in React Excercise task Step 3 */}
      <Profile />

      {/* importing UserStatus component for the Mastering `useState` in React Excercise task Step 4 */}
      <ShoppingList />

      {/* importing CopyInput component for understanding Portal concept how it is working */}
      <CopyInput />

      {/* importing DataFetching component for understanding how useEffect hook is working for fetching data i.e side effects */}
      <DataFetching />

      {/* importing BasicEffect component for Excercise :- Understanding useEffect in React task Step 1 */}
      <BasicEffect />

      {/* importing CounterEffect component for Excercise :- Understanding useEffect in React task Step 2 */}
      <CounterEffect />

      {/* importing FetchDataEffect component for Excercise :- Understanding useEffect in React task Step 3 */}
      <FetchDataEffect />

      {/* importing ComponentA component for understanding how the prop drilling works and passing name as prop to the component */}
      <ComponentA name={name} />
    </div>
  );
};

export default App;
