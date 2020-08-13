import React from 'react';
import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters'
import Episodes from './components/Episodes'
import Locations from './components/Locations'
import { Switch, Link, Route } from 'react-router-dom'
import styled from 'styled-components'
function App() {
  return (
    <FullPage>
      
      <Link to='/Characters'><button>Characters</button></Link>
      <Link to='/Episodes'><button>Episodes</button></Link>
      <Link to='/Locations'><button>Locations</button></Link>
      <Switch>
        <Route exact path="/Characters">
          <Characters />
        </Route>
        <Route exact path="/Episodes">
          <Episodes />
        </Route>
        <Route exact path="/Locations">
          <Locations />
        </Route>
      </Switch>
       
      
    </FullPage>
  );
}
const FullPage = styled.div`
display: flex;
flex-direction: row;

`
export default App;

