import * as React from 'react';
import { TechniqueList } from './TechniqueList';
import { Technique } from './Technique';
import { Overlay } from 'src/overlay/Overlay';
import { TechniqueViewer } from 'src/technique-viewer/TechniqueViewer';
import { FilterBar } from '../technique-viewer/filter-bar/FilterBar';

interface IState {
  data?: Technique[]; 
  view?: Technique;
}

export class TechniqueView extends React.Component<any, IState> {

  public constructor(props: any) {
    super(props);
    this.state = {};
  }
  
  public render() {
    return (
      <div>

        {
          this.state.view &&
          <Overlay content={<TechniqueViewer playlist={[this.state.view]} />} dismiss={() => this.setState({ view: undefined })} />
        }


        <div className='container'>
          <div className='col-xs-12'>
            <TechniqueList onView={vt => this.setState({view: vt})} />
          </div>
        </div>

      </div>
    );
  }

}
