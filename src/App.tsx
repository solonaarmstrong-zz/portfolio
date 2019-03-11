import React, { Component } from 'react';
import Heading from './components/Heading/Heading';
import Skeleton from './components/Skeleton/Skeleton';
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
    setTimeout(this.handleLoading, 2000);
  }

  render() {
    const {loading} = this.state;
    const summaryMarkup = loading
      ? <Skeleton alignment='Centered' />
      : "Hey, I'm Solona (pronounced like Barcelona). I'm part coder, part designer, all UX Developer with 10 years experience developing the web.";

    return (
      <div className="App">
        <Heading color={Color.Blue} element='h1' font={Font.Montez}>Solona</Heading>
        <Heading color={Color.Black} element='h3' font={Font.Regular}>Front End Web Developer</Heading>
        {summaryMarkup}
      </div>
    );
  }

  handleLoading = () => {
    this.setState({loading: false});
  }
}

export default App;
