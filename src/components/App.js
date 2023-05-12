import {React, useState} from "react";
import Header from './Header';

import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";



const App = () => {
  const [players, setPlayers] =useState([
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
  // Based on the original list of players the state of the nextPlayerId should be initialized.
  //Hence using a state of 5.
  const [nextPlayerId, setNextPlayerId] = useState(5);
  // passed down as prop with the name `removePlayer` to the Player Component where it gets called in the  event listener.
  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id)); //takes in array and filters for entries where the id inputted does not match
  }

  // passed down as prop to the Player Component and later to Counter contained there in.
  const handleScoreChange = (id, delta) => {
    //--> Logic: takes in 2 params , the id and the change that should be effected
    //--> iterates over the the  current players array incase one has been removed (callback func.)
    //--> id import to select the specific person to add the score to.
    //--> return a whole new object that contains all the properties of a player
    setPlayers(prevPlayers => prevPlayers.map(player =>{

      if(player.id === id) {
        return {
          name: player.name,
          score: player.score + delta,
          id : player.id
        }
      }
      return player;
    }));

  }
// Passed down to form.js as a prop where the function logic is executed

  const handleAddPlayer = (name) =>{
    //--> Logic: takes in the name input in the text field, and takes in the previous 
    //array of players before adding the new player and adds on top of it 
    // an object with all the Obj.properties required for a new entry, 
    //initializing the score to 0 and ensuring the player Id is unique
    setPlayers(prevPlayers=> [
      ...prevPlayers,
    {
      name: name,
      score: 0, 
      id: nextPlayerId  // by default 5 is input because it the nextState passes in the useState() method.
    }
    ]);

    // --> Logic: Takes in the nextPlayerId depicted as prevID and adds  1 onto it. Function
    //is run from within the handleAddPlayer function to generate the new ID and use it as state for the next
    // input name.
  setNextPlayerId(prevId=> prevId +1);
  }


  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        // {/* array defined in the stateful func. above to depict current state.
        // Passed down to Header comp as a prop which later passed down to Stats component.*/}
        players={players} 
      />

      {/* Players list */}
      {players.map(player =>
      //ignores the <Player so that it can iterate over the array and append the values
      //to their respective props
        <Player 
          name={player.name}
          score ={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer} //explained
          changeScore = {handleScoreChange} // explained
        />
      )};
        <AddPlayerForm 
        addPlayer= {handleAddPlayer} 
        />

    </div>
  );

}

export default App;
