

    {/* This react element is an object describing what you want to render
 * to the DOM or the display on the Screen
 * When the h1 gets render to the DOM we get something like this  
 * <h1 id="main-title" title="This is a title">My First React Element!</h1>
 */ }
 

const desc = 'I just learned how to create a react node and render it into the dom'

const headerID= 'main-title';

const name = 'Scoffie';

const header = (
    <header>
         <h1 id ={ headerID }>{ name }'s First React Element</h1>
         <p className="main-desc"> { desc  }</p> 
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
)
