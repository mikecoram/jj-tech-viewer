import * as React from 'react';
import { Technique } from 'src/technique/Technique';
import { GifView } from 'src/gif-view/GifView';

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
      <div>
        <GifView src={this.props.playlist[this.state.currentIndex].gifLink} />
      </div>
    );
  }

}
