import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './FadeIn.css';

interface Props {
    duration?: number;
    children: React.ReactNode;
}

interface State {
    fadeIn: boolean;
}

class FadeIn extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {fadeIn: false};
    }

    componentDidMount() {
        this.setState({fadeIn: true});
    }

    render() {
        const {duration = 1000, children} = this.props;
        const {fadeIn} = this.state;

        const markup = (
            <div key="key">
                {children}
            </div>
        );

        const cssVariablesPrefix = '--FadeIn-';
        const cssVariables: React.CSSProperties = {[`${cssVariablesPrefix}duration`]: `${duration}ms`};

        return(
            <div className="FadeInWrapper" style={cssVariables}>
                <CSSTransition
                    in={fadeIn}
                    timeout={duration}
                    classNames="FadeIn"
                >
                    {markup}
                </CSSTransition>
            </div>
        );
    }
}

export default FadeIn;
