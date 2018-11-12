import * as React from 'react';
import { ContextSelector } from './ContextSelector';
import { TypeSelector } from './TypeSelector';
import { PositionSelector } from './PositionSelector';
import { Technique } from 'src/technique/Technique';
import { Position } from 'src/models/Position';

interface IProps {
  techniques: Technique[];
}

export class FilterBar extends React.Component<IProps> {
  
  public render() {
    return (
      <React.Fragment>
        <ContextSelector/>
        <PositionSelector positions={this.props.techniques.map(t => ({ id: 1, name: t.startingPosition} as Position))}/>
        <TypeSelector/>
      </React.Fragment>
    );
  }

}
