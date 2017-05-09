import * as React from 'react';
import * as css from './SummaryPanel.styl';

interface Props{
  summary: number;
};

interface State{

};

export class SummaryPanel extends React.Component<Props, State> {

  render(){

    console.log('summaryPanel props', this.props);

    const {
      summary,
    } = this.props;

    return(<div id={css.summaryPanel}>
      <p id = { css.summaryTitle }>Итого</p>
      <p id = { css.summarySummary }>{ summary }</p>
    </div>);

  };
};