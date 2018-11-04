import * as React from 'react';

interface IProps {
  src: string;
}

export class GifView extends React.Component<IProps> {

  public render() {
    return (
      <div>
        <video width="960" height="540" controls autoPlay loop>
            <source type="video/mp4" src={this.props.src} />
        </video>
      </div>
    );
  }

}
