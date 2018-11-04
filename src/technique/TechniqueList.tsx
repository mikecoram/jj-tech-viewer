import * as React from 'react';
import { getTechniques } from './TechniqueParser';
import { Table } from 'reactstrap';
import { TechniqueRow } from './TechniqueRow';
import { Technique } from './Technique';

interface IState {
  techniques: Technique[]
}

export class TechniqueList extends React.Component<any, IState> {
  
  constructor(props: any) {
    super(props);
    
    this.state = { techniques: [] };
  }

  public async componentDidMount() {
    this.setState({ techniques: await getTechniques() });
  }

  public render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Context</th>
            <th>Starting Position</th>
            <th>Type</th>
            <th>Technique</th>
            <th>Fighter</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {this.getTechniqueRows()}
        </tbody>
      </Table>
    );
  }

  private getTechniqueRows() : JSX.Element[] {
    const elements : JSX.Element[] = [];

    for (const t of this.state.techniques) {
      elements.push(
        <TechniqueRow key={t.id} data={t} view={(vt) => {console.log(vt);}} />
      );
    }

    return elements;
  }

}
