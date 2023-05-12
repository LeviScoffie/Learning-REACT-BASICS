import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({title, players}) => {
    return (
      <header>
        {/* Stats is a child of Header and contains the player array length
        due to the variables initialized in the Stats component */}
        <Stats  players={players}/>
        <h1>{title}</h1>
        <Stopwatch />
      </header>
    );
  }

  export default Header;