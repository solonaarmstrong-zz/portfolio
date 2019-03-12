import React, { Component } from 'react';
import FadeIn from '../FadeIn/FadeIn';

interface Props {}
interface State {}

class Education extends Component<Props, State> {
    render() {
        return (
            <FadeIn duration={400}>
                <div>Education</div>
            </FadeIn>
        );
    }
}
  
export default Education;
  