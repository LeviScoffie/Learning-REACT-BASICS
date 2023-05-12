## REACT BASICS 

- React creates plain JS objects that describe DOM nodes and not updating the real DOM

- `ReactDOM.render()` -- renders react elements to the DOM.
    - Accepts:
        - React element/object to render 
        - Actual HTML element you want to update or render to.


- Any exisitng DOM elements inside the root dic will be replaced when render is called.

- REACT just manages what gets updated in the page via REACTDOM.render().


### JSX 

- Redudant createElement() is replaced by JSX.

- JSX is an extension to the JavaScript language that uses a markup-like syntax to create React elements. Most React developers write their UI using JSX because it resembles writing HTML.

- To create REACT elements with JSX it needs to be transpile into react.createElement calls. We use the Babel compile to do this. `create-reacr-app` has the system built into it.

- We use a standlone and include it in the HTML via a script tag.

- Add `type="text/babel"` so that; it can sigal to the babel script that the JS in `app.js` should be compiled before being executed.

- In prod however, the above type attribute is not used. The tools provide the babel compiler, 

-Also, the jsx still comes as objects describing dom nodes and still need to be rendered by REACT. 

-JSX tags can contain children or nested elements. and thus to convert the parent elements. 

-Since jsx is an exstention to the Jscript langugae, it accepts any valid JS expresssions written inside curly braces.

- A JSX expression is always surrounded by curly braces. Can be placed as the value of an attribute in the jsx tag.

- **NB**, whenever you are including curly braces, you are exiting jsx ans entering javascript territory.

- For attribute **class** always use **className**.camel-case. 

-Place comments inside curly braces. **{/*This is good*/}**


### COMPONENTS 

-A component is a piece of UI that you can reuse. Let's you reuse code that renders, a part of your UI.

- Building a score board application that allows you to do many functionalites.


- Create A REACT COMPONENT 
    * Define the component as a fuction or class 
    * Diplay to the UI with a JSX tag 

-React components are required to begin with an uppercase.

#### Use a Component with JSX 
- SX lets you define your own tags. A JSX tag can not only represent an HTML element (like `<h1>`, `<span>`, and `<header>`), but it can also represent a user-defined component. They must be capitlaied. 

-Remeber a component's JSX tag is also a fuctiion call to `createElement` under the hood.


#### Components as Arrow Functions 
- You'll often see components defined as arrow functions. Even though there's no real benefit to writing a component as an arrow function, it provides a more concise syntax. Prefered `() => {}`


#### Composing Components 

- React components can make use of other components, you can render the Counter component within the Player. but using the counter tag inside the players, return statement. When a componnet containes another component its called _composition_. 

-Typically, React Apps have a single top level component that wraps the entire application and composes all the main componets together. 


### React Developer Tools
- React dev tools is an extension that lets you inspect the 
    React component hierarchy in the Chrome developer tools


#### Setting and Using Props 
- Every React component and element can receive a list of attributes called properties (or props). Props are a core concept in React because it's how you get data into a component. Most of the components in your UI will be configured with props. For example, you'll add functionality to a component, have it behave a certain way, and display its contents with props. 

- In react we use props(properties) to customize components.
- HTML in general accepts attributes that give them further meaning and additonal behaviour. Provide extras bits of information to the browser.Id, className, src, alt;

- Every react component and element can receive a list of attributes just like HTML.
- Props help in ;
    - Adding functionality
    - Display content

**Steps of using Props**
---
    * Write props in a component's JSX tag using an attribute syntax.
    * Enable the use of props in a component.

* Props object with the respective elemensts as its object properties.
* Every react component contains a list of props given to it.

- You pass component props via the component's JSX tag at the place where it is used. You can give a prop any name you want.

-When u define a component using a function, the function gets 1 default argument from REACT. A props object containing a list of props given to the component.


-An important detail to remember about props is that they are "read-only" (or immutable), which means that a component can only read the props given to it, and never change them. The (parent) component higher in the tree owns and controls the property values.



### Use Props to Create Reusable Components
- What react components use to talk to each other and share infomarion. Props pass data from a parent component down to a child
component. 

- Since Player is the parent of counter, its going to define the props for both a player's name and score.
- Independent, reusable components concept. 
- Components help us deal with the issue of sepration of concerns, i.e each component in the UI should be responsible for only one thing, and shouldn.t contain extra code that handles other things.

- For example, the *Counter* component is only responsible for displaying a score which you can increase and decrease. 


### Iterating and Rendering with map()
- Iterating over data to produce a list of elements. 

- Pass players array as props to the main component.


### USING KEYS TO KEEP TRACK OF ELEMENTS

- A key is a unique identifier that give React a way to quickly and reliably identify and element in the list.
- Use a unique Id that you can use for key values. lets say if you are getting data from an API.
- Pass a key prop any time you are passing elements by iterating over an Array that will be rearranged.


### What is State?

- State is used to store informaion about a component that can change 
over time.
- Data gets handled in REACT with 2 ways, props and state. A component can only read 
data give to it and never change, thus  immutable. 
- Now state comes in when we want to make out data to dynamically change.
- State is a regular JS object with properties that define  the pieces of data that change. 
- Keeps UI in sync  with data. State is only avalaible to components that are class components. Thus we convert our functions to classes.


#### Create a Component as a Class 
`extends` keyword is used to create a sub class. Or a child of another class .
 - When to use a class vs A function? 
    - If a component is only receiving input through props and rendering UI,it's best to use a function or a stateless fuctional component.
    

#### Create A stateful component 
- Define an initial state first
- In a class super() {/*Calls the constructor of the React.componet*/}

**Modifying State From Inside a Component**

1. Handling Events 
To make the Counter component interactive, we need to be able to trigger changes to the data in state. We'll first create an event handler that updates state, using React's built-in `setState()` method. Then we'll give the buttons an onClick event that calls the event handler when clicked. 

- create event handlers as a method of the class. Create a method and pass it as a JSX parammter to the `onClick` React event. We omit the parenthesis because, if they were there the method would be run immedialty the App mounts and we dont want that.


#### Updating State 
In React, state is never modified directly. The only way React allows you to update a component's state is by using its built-in `setState()` method.
- The parameter passed is an object contains the part of the state you want to modify and the vlue you want to update it to.


#### Binding Event Handlers to Components
- To solve the bug **Uncaught TypeError: Cannot read properties of undefined (reading 'setState')**.
-The bug presents as a result of referencing `this.setState()` inside the increment score method and its undefined inside the method. In objects/ classes the keyword `this` refers to the Parent Class. 
- When you create a Class Compinent that extends from another Component, any methods you create inside the class are not bound to the created component by default, therefore we lose our binding to the component. 
- Each counter component that gets mounted into the DOM is an instance of the counter class, so inside the `render()` method `this` refers to Counter Component instance.
- So we use the `bind()` method on the incrementscore method and pass it the context via `this`. 
- We can also use an arrow function, Arrow functions are automatically bound to the scope in which they are defined.


#### Update State Based on Previous State  

- Whenever you need to update state based on the previous state, you shouldn't rely on this.state to calculate the next state. State updates may be asynchronous, so it may not always lead to the component re-rendering with new data, and could cause state inconsistency. setState() accepts a callback function that produces state based on the previous state in a more reliable way. 

- Callback func  `prevstate` is guarenteed to fire after the update is done and  is rendered to the DOM. This is done to make UI seamless , if you are not relying on previous state, then you can use the set state method as it was.


### Creating the Application State 
- How to remove players from state: 
    - Initialize a player state in the APP component.
    - Create and Wire Up an event handler that removes a player on click.

- Since the APP component is responsible for rendering the player component, its going to own and maintain a player state.
- That state will then be passed down and made availle to the player component as well as all children on App via props. 
- Remember state is an object that stores all the data that the component itself needs and data that might get passed down to its children.
*Steps:*
1. Make APP comp. a stateful component by converting it from func. to class 
2. 

** Two Types of State when building a REACT app** 
- Application State -> data availabke to the entire application.

- Component State -> state that is specific to a component and not shared outside of the
    component.


### Removing Items from State 
- `filter()` return player list updated without affecting original player list. Filter method takes list and give back a list where the condition `p.id` is not strictly equal to `id`. 

- If a player component is a child of App, it will have access to the state fuction writtern through use of props. We hence give the player component a new prop that will inturn be used by the main App component. 

- The player componenet through the prop `removePlayer` its given by the parent App component has access  to both the function  and state defined in the parent App component.

- So, player is now able to send data back to its parent App component through the call back function that's being passed to it through props.
- Inside the Player component a delete button is going to trigger the change in the player state. 

- In the stateless function Player component we handle the event onClick for removing the players by passing an arrow function that returns a call to the function passed through props from the parent App component with `props.removePlayer()`, pass id to the function so that it know which player to remove on click. The id is also passed as a prop.


## REACT UPDATE 
- This course focuses on teaching you React components using React Hooks. In this course we'll go over the scoreboard app you built in the React Basics course and update it to use React Hooks! 

- Hooks is a way to make functional components stateful.So lets change a stateful class component into a stateful fuctional component. 

- Remember `render()` methods are only used in class components. 

- `React.useState()` is a new way to use the same capabilities of the class compo. that was `this.state` was providing. Use state accepts the initial value.

- It returns as pair: ie. , the current state and the function to update it. 

- the `[score]` var has the same capabilities as `this.state.score`.
- And `setScore` has the same capabilities as `this.setState` in earlier versions.
- The `useState` hook returns a func. that is the `setScore` which is called to updated the state as it is. 
- You can only call **Hooks** as the top-level and only call hooks from React funcs.

- `setScore()` can take in a value of a function.


#### Modular Interfaces with Components. 
- The focus of this stage is on different approaches and best practices to writing components that communicate with each other to create dynamic, interactive UIs.

- A component is a function or class that accepts inputs that renders part of your UI.
- Run `create-react app`.Developers often use Create React App for developing React applications because it lets you quickly create and run React apps with no configuration. Create React App is well-suited for projects of any size and is often used for developing production-ready apps.

- `Index.js` is used to render the `App` component into the root element.


##### Modulating Function Components 
- ES modules is a feature in JavaScript that lets you break up your code into individual JavaScript files. Modules provide a better way to organize and maintain your code, as well as provide scope for your variables, functions, and classes.

- Each module has its own scope so do the necessary imports.


#### Data Flow RoadMap 
- To store data, we created a state; if any other child component needs access to that state we pass it down using props. From `Parent` components to `Child` components via **props**.

- We can now lift state up. When two or more components need access to the same state, we'll lift the state up to a shared parent component so that they both have acces to that state.

- For example `Header` component displays the _title_ and _total number of players_. We could add a stat component that displays the number of players and the total score; therefore the stat component needs access to the score state. 

- Learn how to communicate bewteen components. So the score state lifted up to the App component, the counter needs a way to tell the parent component that the score needs to change. 

- To communicate data from a child to a parent we can pass functions as props.
- So in the `App` component we'll create a `handleScore()` func. that will change the state. we'll pass the func down to `Counter` as a prop. So when the `+` or `-` button is clicked a state change is invoked at the App component level.

- When two or more components need access to the same state, we move the state into their common parent. This is called "lifting state up".

- we'll refactor the Counter's event handlers, and implement new props in the Player and Counter components that will act as callback functions.
- Counter needs to update a state that lives way above it which is the `App` component. 
- The Parent passes down  a callback function  as a prop. 

These funcs help you communicate events and changes to your data, upwards while data contnues to flow downwards.


### Managing State Roadmap 

- With the state lifted up to the top of the application, we can pass it down to any component. In this stage, you will pass state to multiple components, add items to the state and update the state based on the previous state 

- A control component is a componet that renders a form element who's value is controlled by react with state.
- So an `AddPlayerForm ` component will render a form element with a text field to enter the new players's name and a submit button to submit the form. 

- We'll write event handlers to add the new player to the existing player state using the spread operator. 

- The spread operator allows us to update the state without modifying the existing state.

- We lifted the score state up to the top of the application. Now we can pass that state down to any component. We'll build a statistics component that displays the total number of players on the Scoreboard, as well as the total number of points.

- To let users add players to the Scoreboard! First, we'll create an event handler that allows users to submit the form. Then we'll write a function that adds the new player to state and displays it in the UI. 

- **Local State** means that it is just state that is needed for the component to do its job,and no other components have access to it. 

- In order to add players to the state, `AddPlayerForm` needs to access to the players state so that it can update it with the new player. U can use callback func. to send data to an ancestor from chilsd.
- the function will be called inside an event handler and it will pass a new player name up to the App Component when the form submits.

- To prevent an event default behaviour we use its method called `preventDefault`. If we don't do this, it will result in the browser posting a request back to the server that will cause application to reload in the browser, which means we will lose all of our application satte in the process. 


- Remember in the `handleSubmit` we are passing info to a function via a prop named addPlayer

- A controlled component renders a form element whose value is not controlled by React, with state


A controlled component is a component that renders a form element whose value is controlled by React. That is the `AddPlayerForm` component that renders a form element that allows users to add a new player to the scoreboard. 

- This is a controlled compnent because the value entered in the text field is controlled by React through a state that we named value.

- We used the state Hook to add value to the AddPlayerForm.

- The event handler is a func. that takes as a parameter the value state, it then uses the spread operator  to add a new playerto the player state  without modifying the original players.


#### Stateful Components and the Effect Hook Roadmap
---
-we'll build the stopwatch component! We'll cover working with React's useEffect hook and learn to use conditional rendering to update your UI based on the current state. 

- Allows users to start, stop, and reset the time. Create a button to start and stop the timer. If the time is stopped and started again it should continue from where it left off.

- Buildthe stopwatch components and its elements. Use a ternary operator. Create a state that is `true` when its running and `false` when its not.

-Fetching data from an API, setting up a timer, manipulating the DOM ~_useEffects_~ hooks is used.

- Lets u execute an arbitrary function which it calls side effect inside your func. components. The Stop Watch functionality is the **side effect**.

- When the user clicks the start button, the effect hook will run our side effect that will create a timer to continually add a value 1 to our stopwatch time every second. and vice versa.


### Designing the StopWatch
-A stateful component that counts seconds and allows users to start, stop and reset the time.

- This is a component state rather than an application satte.

- The stopwatch will have 2 main states visible to the user, it will either be in a running state or a stopped state. The buttons on the interface should change based on the running state. E.g **STOP**  changing to **START** and vice versa. Conditional rendering.

#### Updating the Stopwatch State Using the Effect Hook
- Use the useEffect() Hook to make the stopwatch tick. React's built-in useEffect Hook lets you perform side effects, like fetching data or, in our case, setting a timer. The useEffect Hook method also helps you handle unmounting of components which can help prevent memory leaks in your application. 

- By default the func. we provide to useEffect will run after every completed render. 

- As long as the `isRunning` state is true, the `setElapsedTime` will be running continuously. So to update state over and over again we use the _Effect Hook_. We want a side effect to run after React has updated the DOM.

- `useEffect()` 2 args;, a func also known as a side effect and a dependecy array. The function runs after every completed render by default. 

When state changesm React renders all the child components again. You can control when the side effect runs by passing an array of dependecies as the second argument. 

- When we provide a second argument to useEffect Hook, the side effect will only runif the prop or state in the dependecies array changes.

- For the Stopwatch component we only want the timer to run when isRunning is true and stop whn isRunning is false. side effect is dependent on `isRunning` state.


- setInterval() method is JS method that excutes code repeatedly after a delayed time interval.

-`clearInterval()` - cancels any timed repeating actions created by calling setInterval. Takes in the interval ID to clear