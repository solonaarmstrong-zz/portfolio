import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import FadeIn from '../FadeIn/FadeIn';
import FadeInScale from '../FadeInScale/FadeInScale';
import Skeleton from '../Skeleton/Skeleton';
import Summary from '../Summary/Summary';
import SpacingContainer from '../SpacingContainer/SpacingContainer';
import {Color, Font} from '../../types';

interface Props {}

interface State {
    textLoading: boolean;
  }

  class Introduction extends Component<Props, State> {
    state: State = {
      textLoading: true,
    }
  
    componentDidMount() {
      setTimeout(this.handleLoading, 2000);
    }
  
    render() {
        const {textLoading} = this.state;
        const summaryMarkup = textLoading
            ? <Skeleton alignment='Centered' />
            : <FadeIn duration={400}>
                <Summary />
              </FadeIn>;
  
        return (
            <>
              <FadeInScale duration={400}>
                <SpacingContainer space='extra-loose'>
                    <Heading color={Color.Blue} element='h1' font={Font.Montez}>Solona</Heading>
                </SpacingContainer>
              </FadeInScale>
              <FadeInScale duration={600}>
                <Heading color={Color.Black} element='h3' font={Font.Regular}>Front End Developer</Heading>
              </FadeInScale>
              <FadeIn duration={800}>
                <SpacingContainer space='extra-loose'>
                  {summaryMarkup}
                </SpacingContainer>
              </FadeIn>
            </>
        );
    }
  
    handleLoading = () => {
      this.setState({textLoading: false});
    }
  }
  
  export default Introduction;
  