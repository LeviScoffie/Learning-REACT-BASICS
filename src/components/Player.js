import React from "react";
import Counter from './Counter'

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          {props.name}
        </span>
  
        <Counter 
        score ={props.score} 
        id ={props.id}
        //This is later passed down as a prop to the Counter Component where it it called and effect the change on click
        changeScore= {props.changeScore}
        />
      </div>
    );
  }


  export default Player; 