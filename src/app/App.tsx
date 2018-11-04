import * as React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { TechniqueView } from '../technique/TechniqueView';


class App extends React.Component {

  public render() {
    return (
      <main>
        <TechniqueView />
      </main>
    );
  }
  
}

export default App;
