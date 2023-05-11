
/** This react element is an object describing what you want to render
 * to the DOM or the display on the Screen
 * When the h1 gets render to the DOM we get something like this  
 * <h1 id="main-title" title="This is a title">My First React Element!</h1>
 *  */ 
 
const  title = React.createElement(
    "h1", //element
    {id: 'main-title', title: 'This is a title.'}, //attributes/PROPERTIES
    'My first React Element!' //children on the elements
)

const desc = React.createElement(
    'p',
    null,
    "I just learned how to create a react node and render it into the dom"

);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);
