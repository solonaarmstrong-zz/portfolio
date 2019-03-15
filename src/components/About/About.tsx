import React, {Component} from 'react';
import SpacingContainer from '../SpacingContainer/SpacingContainer';
import Paragraph, {
  ParagraphWidth,
  ParagraphTextSize,
} from '../Paragraph/Paragraph';
import FadeIn from '../FadeIn/FadeIn';
import Heading from '../Heading/Heading';
import {Color, Font, TransitionDuration} from '../../types';
import summaryText from '../../data/summary-text';
import aboutText from '../../data/about-text';

interface Props {}
interface State {}

class About extends Component<Props, State> {
  render() {
    return (
      <section className="SkillsWrapper">
        <FadeIn duration={TransitionDuration.Quickest}>
          <Heading color={Color.Black} element="h2" font={Font.Regular}>
            About
          </Heading>
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quicker}>
          <SpacingContainer space="extra-loose">
            <Paragraph
              width={ParagraphWidth.Wide}
              textSize={ParagraphTextSize.Medium}
            >
              {summaryText.content}
            </Paragraph>
          </SpacingContainer>
          {aboutText.content.map(this.renderParagraphs)}
        </FadeIn>
      </section>
    );
  }

  renderParagraphs = (paragraph: string) => {
    return (
      <SpacingContainer space="loose">
        <Paragraph
          width={ParagraphWidth.Wide}
          textSize={ParagraphTextSize.Medium}
        >
          {paragraph}
        </Paragraph>
      </SpacingContainer>
    );
  };
}

export default About;
