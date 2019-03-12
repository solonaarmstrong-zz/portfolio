import React, { Component } from 'react';
import FadeIn from '../FadeIn/FadeIn';

interface Props {}
interface State {}

class Contact extends Component<Props, State> {
    render() {
        return (
            <FadeIn duration={400}>
                <div>Contact</div>
            </FadeIn>
        );
    }
}
  
export default Contact;
  