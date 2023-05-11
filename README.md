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
- SX lets you define your own tags. A JSX tag can not only represent an HTML element (like <h1>, <span>, and <header>), but it can also represent a user-defined component. They must be capitlaied. 

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

