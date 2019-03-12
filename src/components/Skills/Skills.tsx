import React, {Component} from 'react';
import FadeIn from '../FadeIn/FadeIn';

interface Props {}
interface State {}

class Skills extends Component<Props, State> {
  render() {
    return (
      <FadeIn duration={400}>
        <div>Skills</div>
      </FadeIn>
    );
  }
}

export default Skills;
