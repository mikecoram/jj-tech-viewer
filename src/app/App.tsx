import * as React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { TechniqueList } from 'src/technique/TechniqueList';


class App extends React.Component {

  public render() {
    return (
      <main>
        <div className='container'>
          <div className='col-xs-12'>
            <TechniqueList />
          </div>
        </div>
      </main>
    );
  }
  
}

export default App;
