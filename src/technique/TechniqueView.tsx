import * as React from 'react';
import { TechniqueList } from './TechniqueList';
import { Technique } from './Technique';

interface IState {
  view? : Technique;
}

export class TechniqueView extends React.Component<any, IState> {
  
  public render() {
    return (
      <div>
        <div className='container'>
          <div className='col-xs-12'>
            <TechniqueList onView={vt => this.setState({view: vt})} />
          </div>
        </div>
      </div>
    );
  }

}
