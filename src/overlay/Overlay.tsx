import * as React from 'react';

import './Overlay.css';

interface IProps {
  content: JSX.Element;
  dismiss?: () => void;
}

export class Overlay extends React.Component<IProps> {

  public render() {
    return (
      <div className="overlay" onClick={this.props.dismiss}>
        {this.props.content}
      </div>
    );
  }

}
