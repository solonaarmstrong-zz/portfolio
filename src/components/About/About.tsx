import React, { Component } from 'react';
import SpacingContainer from '../SpacingContainer/SpacingContainer';
import Summary from '../Summary/Summary';
import FadeIn from '../FadeIn/FadeIn';

interface Props {}
interface State {}

class About extends Component<Props, State> {
    render() {
        return (
            <FadeIn duration={400}>
                <SpacingContainer space='extra-loose'>
                    <Summary />
                </SpacingContainer>
            </FadeIn>
        );
    }
}
  
export default About;
  