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
