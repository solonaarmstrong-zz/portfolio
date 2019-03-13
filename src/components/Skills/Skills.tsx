import React, {Component} from 'react';
import FadeIn from '../FadeIn/FadeIn';
import Card from '../Card/Card';

interface Props {}
interface State {}

class Skills extends Component<Props, State> {
  render() {
    return (
      <FadeIn duration={400}>
        <br />
        <br />
        <br />
        <Card title="Title">
          Stuff inside the card
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </Card>
      </FadeIn>
    );
  }
}

export default Skills;
