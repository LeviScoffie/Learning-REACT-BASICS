

    {/* This react element is an object describing what you want to render
 * to the DOM or the display on the Screen
 * When the h1 gets render to the DOM we get something like this  
 * <h1 id="main-title" title="This is a title">My First React Element!</h1>
 */ }

 const players = [
    {
        name: "Scoffie",
        score: 50,
        id:1
      },
      {
        name: "Treasure",
        score: 85,
        id:2
      },
      {
        name: "Ashley",
        score: 95,
        id:3
      },
      {
        name: "James",
        score: 80,
        id:4
      }
 ]
 
function Header(props) {

    return(
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players:{ props.totalPlayers }</span>
        </header>
    );
}


const Player = (props) => {

    return (
        <div className = "player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter score= {props.score} />
        </div>
    )
}


const Counter = (props) =>{

    return (
        <div className="counter">
        <button className= "counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className= "counter-action increment"> + </button>
    </div>
    );
}


const App = (props) =>{
    return (
        <div className="scoreboard">
            <Header title="ScoreBoard" totalPlayers ={props.initialPlayers.length} />
            {/*Player's List*/}
            {props.initialPlayers.map( player =>
                <Player 
                name={player.name}
                 score={player.score}
                 key ={player.id.toString()}
                 />

            )}
            
        </div>
    );
} 
ReactDOM.render(
    <App  initialPlayers ={players} />,
    document.getElementById('root')
)
