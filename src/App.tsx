import React from 'react';
import { Switch, Route } from 'react-router-dom';

//styles & assets
import './App.scss';

//components
import TheNavigation from "./components/TheNavigation";

// views
import Home from './views/Home'
import WaitingRoom from './views/WaitingRoom'
import About from './views/About'



function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <TheNavigation />
        </nav>
      </header>

      <main className="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cakaren" component={WaitingRoom}/>
          <Route path="/onas" component={About}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
