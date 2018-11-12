import * as React from 'react';
import { Technique } from 'src/technique/Technique';
import { GifView } from './GifView';

import './TechniqueViewer.css';

interface IProps {
  playlist: Technique[];
}

interface IState {
  currentIndex: number;
}

export class TechniqueViewer extends React.Component<IProps, IState> {

  public constructor(props: IProps) {
    super(props);

    this.state = {
      currentIndex: 0
    }
  }

  public render() {
    return (
      <div className='technique-viewer'>
        <GifView src={this.props.playlist[this.state.currentIndex].gifLink} />
      </div>
    );
  }

}
