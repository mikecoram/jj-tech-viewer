import * as React from 'react';

import './Overlay.css';

interface IProps {
  content: JSX.Element;
}

export class Overlay extends React.Component<IProps> {

  public render() {
    return (
      <div className="overlay">
        {this.props.content}
      </div>
    );
  }

}
