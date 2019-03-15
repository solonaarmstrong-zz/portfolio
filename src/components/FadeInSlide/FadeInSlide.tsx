import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {TransitionDuration, SlideDirection} from '../../types';
import './FadeInSlide.css';

interface Props {
  duration?: TransitionDuration;
  direction?: SlideDirection;
  children: React.ReactNode;
}

interface State {
  fadeInSlide: boolean;
}

class FadeInSlide extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {fadeInSlide: false};
  }

  componentDidMount() {
    this.setState({fadeInSlide: true});
  }

  render() {
    const {
      duration = TransitionDuration.Slow,
      direction = 'up',
      children,
    } = this.props;
    const {fadeInSlide} = this.state;

    const markup = <div key="key">{children}</div>;

    const cssVariablesPrefix = '--FadeInSlide-';
    const cssVariables: React.CSSProperties = {
      [`${cssVariablesPrefix}duration`]: `${duration}ms`,
    };

    return (
      <div className="FadeInSlideWrapper" style={cssVariables}>
        <CSSTransition
          in={fadeInSlide}
          timeout={duration}
          classNames={`FadeInSlide--${direction}`}
          unmountOnExit
        >
          {markup}
        </CSSTransition>
      </div>
    );
  }
}

export default FadeInSlide;
