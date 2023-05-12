

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


const Player = (props) => {

    return (
        <div className = "player">
            <span className="player-name">
                <button className="remove-player" onClick ={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>

            <Counter  />
        </div>
    )
}


const Counter = () => {
    const [score, setScore] = React.useState(0);
    // state = {
    //         score: 0
    //     };
    
    
    const incrementScore =() => {
        setScore(prevScore => prevScore + 1);
        // this.setState( prevState =>({
        //     score: prevState.score +1
        // }));
    }

    const decrementScore =() => {
        setScore(prevScore => prevScore -1);
        // this.setState( prevState =>({
        //         score: prevState.score -1
        // }));
    }
    
  
       
    return (
        <div className="counter">
        <button className= "counter-action decrement"  onClick ={()=>decrementScore()}> - </button>
        <span className="counter-score">{ score }</span>
        <button className= "counter-action increment" onClick ={()=>incrementScore()}> + </button>
    </div>
    );
    } 



const App = () => {
    const [players, setPlayers] = React.useState([{
        name: "Scoffie",
        id:1
      },
      {
        name: "Treasure",
        id:2
      },
      {
        name: "Nancy",
        id:3
      },
      {
        name: "James",
        id:4
      }
    ]);
    
    const handleRemovePlayer = (id) => {
        setPlayers( prevPlayers = prevPlayers.filter(p => p.id !== id))
    }
   
    


    return (
        <div className="scoreboard">
            <Header title="ScoreBoard"
             totalPlayers ={players.length}
              />
            {/*Player's List*/}
            {players.map( player =>
                <Player 
                name={player.name}
                id = {player.id}
                key ={player.id.toString()}
                removePlayer = {handleRemovePlayer}
                    />

            )}
            
        </div>
    );
    }

    


const root = ReactDOM.createRoot(document.getElementById('root')) 

root.render(<App />);
 
// ReactDOM.render(
//     <App  />,
//     document.getElementById('root')
// )
