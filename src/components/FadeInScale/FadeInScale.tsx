import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './FadeInScale.css';

interface Props {
  duration?: number;
  children: React.ReactNode;
}

interface State {
  fadeInScale: boolean;
}

class FadeInScale extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {fadeInScale: false};
  }

  componentDidMount() {
    this.setState({fadeInScale: true});
  }

  render() {
    const {duration = 1000, children} = this.props;
    const {fadeInScale} = this.state;

    const markup = <div key="key">{children}</div>;

    const cssVariablesPrefix = '--FadeInScale-';
    const cssVariables: React.CSSProperties = {
      [`${cssVariablesPrefix}duration`]: `${duration}ms`,
    };

    return (
      <div className="FadeInScaleWrapper" style={cssVariables}>
        <CSSTransition
          in={fadeInScale}
          timeout={duration}
          classNames="FadeInScale"
        >
          {markup}
        </CSSTransition>
      </div>
    );
  }
}

export default FadeInScale;
