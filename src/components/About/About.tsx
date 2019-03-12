import React, {Component} from 'react';
import SpacingContainer from '../SpacingContainer/SpacingContainer';
import Paragraph, {
  ParagraphWidth,
  ParagraphTextSize,
} from '../Paragraph/Paragraph';
import FadeIn from '../FadeIn/FadeIn';
import summaryText from '../../data/summary-text';

interface Props {}
interface State {}

class About extends Component<Props, State> {
  render() {
    return (
      <FadeIn duration={400}>
        <SpacingContainer space="extra-loose">
          <Paragraph
            width={ParagraphWidth.Wide}
            textSize={ParagraphTextSize.Medium}
          >
            {summaryText.content}
          </Paragraph>
        </SpacingContainer>
      </FadeIn>
    );
  }
}

export default About;
