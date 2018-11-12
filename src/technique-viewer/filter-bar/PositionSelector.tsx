import * as React from 'react';
import { Position } from 'src/models/Position';

interface IProps {
  positions: Position[];
}

export class PositionSelector extends React.Component<IProps> {

  public render() {
    return <select>{this.getPositions}</select>
  }

  private getPositions() : JSX.Element[] {
    return this.props.positions.map(p => 
      <option key={p.id} value="1">{p.name}</option>  
    );
  }

}
