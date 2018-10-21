import * as React from 'react';
import { Technique } from './Technique';

interface IProps {
    data: Technique;
}

export class TechniqueRow extends React.Component<IProps, any> {
    
  public render() {
    return (
      <tr>
        <td>{this.props.data.videoType}</td>
        <td>{this.props.data.startingPosition}</td>
        <td>{this.props.data.techniqueType}</td>
        <td>{this.props.data.techniqueName}</td>
        <td>{this.props.data.fighterA}</td>
      </tr>
    )
  }

}
