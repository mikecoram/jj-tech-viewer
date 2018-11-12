import * as React from 'react';
import { Technique } from './Technique';
import { Button } from 'reactstrap';

interface IProps {
    data: Technique;
    onView: (t: Technique) => void;
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
        <td>
          <Button onClick={() => {this.props.onView(this.props.data)}} color='primary'>
            <span className="fa fa-eye"/>
          </Button>
        </td>
      </tr>
    );
  }

}
