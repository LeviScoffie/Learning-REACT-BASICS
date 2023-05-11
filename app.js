

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


class Counter extends React.Component {

    constructor() {
        super() 
        this.state = {
            score: 0
        };
    }
    
    incrementScore =() => {
        
        this.setState( prevState =>({
            score: prevState.score +1
        }));
    }

    decrementScore =() => {
        
        this.setState( prevState =>{
            return{
                score: prevState.score -1
            };

        });
    }
    
    render() {
       
        return (
            <div className="counter">
            <button className= "counter-action decrement"  onClick ={this.decrementScore}> - </button>
            <span className="counter-score">{this.state.score}</span>
            <button className= "counter-action increment" onClick ={this.incrementScore}> + </button>
        </div>
        );
    } 
}


class App extends React.Component {

    state = {
        players: [
            {
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
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState =>{
            return {
                players:  prevState.players.filter(p => p.id !== id)
            }
        });

    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="ScoreBoard" totalPlayers ={this.state.players.length} />
                {/*Player's List*/}
                {this.state.players.map( player =>
                    <Player 
                    name={player.name}
                    id = {player.id}
                    key ={player.id.toString()}
                    removePlayer = {this.handleRemovePlayer}
                     />
    
                )}
                
            </div>
        );
    }
}
    
   
 
ReactDOM.render(
    <App  />,
    document.getElementById('root')
)
