import React from 'react';
import Landing from '../Landing/Landing';
import Community from '../Community/Community';

function Main(props) {
  return (
    <main className="main">
      <Landing onPairClick={props.onPairClick} />
      <Community />
    </main>
  );
}

export default Main;
