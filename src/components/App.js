import {React} from "react";
import Header from './Header';

import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";



const App = () => {
  
  const [players, setPlayers] = React.useState([
    {
      name: "Scoffie",
      score:0,
      id: 1
    },
    {
      name: "Treasure",
      score:0,
      id: 2
    },
    {
      name: "Nancy",
      score:0,
      id: 3
    },
    {
      name: "James",
      score:0,
      id: 4
    }
  ]);

      // for generating unique ID
  const [nextPlayerId, setNextPlayerId] = React.useState(5);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }


  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player =>{
      if(player.id ===id) {
        return {
          name: player.name,
          score: player.score + delta,
          id : player.id
        }
      }
      return player;
    }));

  }

  const handleAddPlayer = (name) =>{
    setPlayers(prevPlayers=> [
      ...prevPlayers,
    {
      name: name,
      score: 0, 
      id: nextPlayerId
    }
    ]);
  setNextPlayerId(prevId=> prevId +1);
  }


  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        players={players} // array defined in the stateful func. above to depict current state
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score ={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore = {handleScoreChange}
        />
      )};
        <AddPlayerForm 
        addPlayer= {handleAddPlayer} 
        />

    </div>
  );

}

export default App;
