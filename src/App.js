import React from 'react';
import DroidCard from "./components/DroidCard.js";
import Wrapper from "./components/Wrapper.js";
import droids from "./droids.json"
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <Wrapper>
      <NavBar />
      <h1>Droids</h1>

      {droids.map((droid) =>{
          return <DroidCard
          key={droid.id}
          name={droid.name}
          image={droid.image}
          class={droid.class}
          origin={droid.origin}
          />
        })}
    </Wrapper>

  )
};

export default App;
