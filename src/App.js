import React from 'react';
import './App.css';
import {IOVisor} from "./modules/IOVisor/IOVisor.component";
import {Grid} from "./components/Grid/Grid.component";
//import {ButtonGrid} from "./modules/Shared/components/ButtonGrid/ButtonGrid.component"

function App() {
  return (
    <div className="App">
      <IOVisor/>
      <Grid/>
    </div>
  );
}

export default App;
