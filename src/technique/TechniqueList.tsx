import * as React from 'react';
import { getTechniques } from './TechniqueParser';
import { Table } from 'reactstrap';
import { TechniqueRow } from './TechniqueRow';
import { Technique } from './Technique';

interface IProps {
  onView: (t: Technique) => void;
}

interface IState {
  data: Technique[];
}

export class TechniqueList extends React.Component<IProps, IState> {
  
  constructor(props: any) {
    super(props);

    this.state = { data: [] };
  }

  public async componentDidMount() {
    this.setState({ data: await getTechniques() });
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
    return this.state.data.map(t => 
      <TechniqueRow key={t.id} data={t} onView={this.props.onView} />
    );
  }
}
