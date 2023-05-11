

    {/* This react element is an object describing what you want to render
 * to the DOM or the display on the Screen
 * When the h1 gets render to the DOM we get something like this  
 * <h1 id="main-title" title="This is a title">My First React Element!</h1>
 */ }
 
function Header(props) {

    return(
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players:{ props.totalPlayers }</span>
        </header>
    );
}


const Player = () => {

    return (
        <div className = "player">
            <span className="player-name">
                Scoffie
            </span>

            <Counter />
        </div>
    )
}


const Counter = () =>{

    return (
        <div className="counter">
        <button className= "counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className= "counter-action increment"> + </button>
    </div>
    );
}


const App = () =>{
    return (
        <div className="scoreboard">
            <Header title="ScoreBoard" totalPlayers ={1} />
            {/*Player's List*/}
            <Player />
        </div>
    );
} 
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
