import React, { Component } from 'react';
import FadeIn from '../FadeIn/FadeIn';

interface Props {}
interface State {}

class WorkHistory extends Component<Props, State> {
    render() {
        return (
            <FadeIn duration={400}>
                <div>Work History</div>
            </FadeIn>
        );
    }
}
  
export default WorkHistory;
  