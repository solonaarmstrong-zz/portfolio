import React, {Component} from 'react';
import Heading from '../Heading/Heading';
import FadeIn from '../FadeIn/FadeIn';
import FadeInScale from '../FadeInScale/FadeInScale';
import Skeleton from '../Skeleton/Skeleton';
import Paragraph, {
  ParagraphWidth,
  ParagraphTextSize,
} from '../Paragraph/Paragraph';
import SpacingContainer from '../SpacingContainer/SpacingContainer';
import {Color, Font, TransitionDuration} from '../../types';
import summaryText from '../../data/summary-text';

interface Props {}

interface State {
  textLoading: boolean;
}

class Introduction extends Component<Props, State> {
  state: State = {
    textLoading: true,
  };

  componentDidMount() {
    setTimeout(this.handleLoading, 2000);
  }

  render() {
    const {textLoading} = this.state;
    const summaryMarkup = textLoading ? (
      <Skeleton alignment="Centered" />
    ) : (
      <FadeIn duration={TransitionDuration.Quickest}>
        <Paragraph
          width={ParagraphWidth.Narrow}
          textSize={ParagraphTextSize.Large}
          centered
        >
          {summaryText.content}
        </Paragraph>
      </FadeIn>
    );

    return (
      <>
        <FadeInScale duration={TransitionDuration.Quickest}>
          <SpacingContainer space="extra-loose">
            <Heading color={Color.Blue} element="h1" font={Font.Montez}>
              Solona
            </Heading>
          </SpacingContainer>
        </FadeInScale>
        <FadeInScale duration={TransitionDuration.Quicker}>
          <Heading color={Color.Black} element="h3" font={Font.Regular}>
            Front End Developer
          </Heading>
        </FadeInScale>
        <FadeIn duration={TransitionDuration.Quick}>
          <SpacingContainer space="extra-loose">
            {summaryMarkup}
          </SpacingContainer>
        </FadeIn>
      </>
    );
  }

  handleLoading = () => {
    this.setState({textLoading: false});
  };
}

export default Introduction;
