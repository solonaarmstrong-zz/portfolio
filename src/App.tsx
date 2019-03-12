import React, { Component } from 'react';
import Heading from './components/Heading/Heading';
import Skeleton from './components/Skeleton/Skeleton';
import FadeIn from './components/FadeIn/FadeIn';
import FadeInScale from './components/FadeInScale/FadeInScale';
import Paragraph, { ParagraphSize } from './components/Paragraph/Paragraph';
import SpacingContainer from './components/SpacingContainer/SpacingContainer';
import {Color, Font} from './types';
import './App.css';

interface Props {}

interface State {
  loading: boolean;
}

class App extends Component<Props, State> {
  state: State = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(this.handleLoading, 1500);
  }

  render() {
    const {loading} = this.state;
    const summaryMarkup = loading
      ? <Skeleton alignment='Centered' />
      : <FadeIn duration={400}>
          <Paragraph size={ParagraphSize.Large} centered>Hey, I'm Solona (pronounced like Barcelona).
            Part coder and part designer with 10 years experience as a web developer.
            I'm passionate about delightful user experience, accessibility, and performance.
          </Paragraph>
        </FadeIn>;

    return (
      <div className="App">
        <FadeInScale duration={400}>
          <SpacingContainer space='extra-loose'>
            <Heading color={Color.Blue} element='h1' font={Font.Montez}>Solona</Heading>
          </SpacingContainer>
        </FadeInScale>
        <FadeInScale duration={600}>
          <Heading color={Color.Black} element='h3' font={Font.Regular}>Front End Developer</Heading>
        </FadeInScale>
        <SpacingContainer space='extra-loose'>
          {summaryMarkup}
        </SpacingContainer>
      </div>
    );
  }

  handleLoading = () => {
    this.setState({loading: false});
  }
}

export default App;
