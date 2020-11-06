REACT

Additional readings:::
https://medium.com/@vigowebs/frequently-asked-react-js-interview-questions-and-answers-36f3dd99f486

https://medium.com/@vigowebs/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678

https://medium.com/@coderacademy/15-seo-tips-every-front-end-developer-should-know-in-2016-d579b7cefb01


Name Lifecycle Methods

PART 1
Lifecycle methods are changing
-constructor - set initial state. This.state is used
-Static getDerivedStateFromProps - static bc you can’t use this.state (rarely used)
-Render
-ComponentDidMount - runs after being mounted

PART 2
Re-render phase
-Static getDerivedStateFromProps
-shouldComponentDidUpdate - sees if a component is needed to re-render or not
-Render
-ComponentDidUpdate - confirms it has updated and is done
-componentWillUnMount - lifecycle dies

Arrow functions => do not have its own “this”

How to prevent components from re-rendering?
-shouldComponentUpdate can use to compare previous state to see if there were any changes. If so, re-render
-React.PureComponent - compares previous and current state. Substitute for shouldComponentUpdate. Only for class components
-React.memo

Explain Error Boundaries
<!-- <ErorrBoundaryComp>
	<MyComponent />
</ErorrBoundaryComp> -->

Comes with two lifecycle hooks:
-static getDerivedStateFromError
-componentDidCatch

Best Lifecycle method for making API calls?
-componentDidMount - makes sure your DOM is ready


React Patterns
-context-api pattern
-render props - pass function down to children
-presentation component pattern - pass down to stateless components

What is css-in-js pattern?
-So you can perform incline css
-You can conditionally render and pass down to different components
-Share common styles with dif component


Why can’t you update STATE directly without setState()?
-you need a setState which creates a copy of the state then can update
-Cannot update state by itself

How many ways you can conditionally render in react?
-If statement and return  -->
-{ true ? Return a : return b }

What is fragments and why do we use it?
-We cannot return multiple children:
    <!-- - render(){ return(  <child A />  <child B />  <child C /> )} -->
-Unless we do this:
    <!-- - render(){ <React.Fragment> return(  <child A />  <child B />  <child C /> </ React.Fragment> )} -->

How to do code-splitting?
-react created lazy loading
-to import a component so you can separate it and will render only when needed

What are some alternatives to Redux
-mobX
-Apollo client + graphQL
-RxJS

What is Redux Middleware
-Middleware ensures data is always isync between front and backend

Difference between Redux Thunk and Redux-Saga
-Both middleware
-Redux Thunk is async with promises. Determines if action should be detchpatch or not by creating an Action Creator

React Hooks & State

Hooks are functions that let you ‘Hook into” React state and Lifecycle features from function components

Before hooks, react was using class components. Now we are replacing class with functions, we’ll need another way to write state and Lifecycle features

If we’re going towards the function route, we’ll have closures then can use hooks that allows you to use the lifecycle

Why React Hooks?
-It’s really a preference
-No more complex lifecycle methods
-More simple. No more mapStateToProps and mapDispachToProps with redux
-Hooking into components is easier


Rules of React Hooks
-only call hooks at the top level
-Don’t call hooks inside loops, conditions, or nested functions
-Call hooks from React components or custom hooks


Map Lifecycle class methods to Lifecycle hooks
Hooks will not use classes.
-stages of lifecycle:
	-Initial Render
	-Updates
	-Unmount

How do you normally debug?
-console.log
-Debugger statements
-React Developer Tools within Chrome
-useDebugValue/Inspect in Chrome


Redux:::

Action — Actions are payloads of information that send data from our application to our store. They are the only source of information for the store. We send them to the store using store.dispatch(). Primarly, they are just an object describes what happened in our app.

Reducer — Reducers specify how the application’s state changes in response to actions sent to the store. Remember that actions only describe what happened, but don’t describe how the application’s state changes. So this place determines how state will change to an action.

Store — The Store is the object that brings Action and Reducer together. The store has the following responsibilities: Holds application state; Allows access to state via getState(); Allows state to be updated via dispatch(action); Registers listeners via subscribe(listener); Handles unregistering of listeners via the function returned by subscribe(listener).

REDUX THUNK is the middleware
