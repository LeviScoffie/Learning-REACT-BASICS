import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
    return (
      <header>
        {/* Stats is a child of Header and contains the player array length
        due to the variables initialized in the Stats component */}
        <Stats  players={props.players}/>
        <h1>{props.title}</h1>
        <Stopwatch />
      </header>
    );
  }

  export default Header;