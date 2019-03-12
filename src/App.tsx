import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';
import NavigationLink from './components/NavigationLink';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import WorkHistory from './components/WorkHistory/WorkHistory';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import FadeIn from './components/FadeIn/FadeIn';
import {TransitionDuration} from './types';
import './App.css';

interface Props {}

interface State {
  loadNavigation: boolean;
}

class App extends Component<Props, State> {
  state: State = {
    loadNavigation: false,
  };

  componentDidMount() {
    setTimeout(this.handleLoadNavigation, 2500);
  }

  render() {
    const {loadNavigation} = this.state;

    const navigationMarkup = loadNavigation ? (
      <FadeIn duration={TransitionDuration.Quickest}>
        <div className="NavigationWrapper">
          <nav className="Navigation">
            <NavigationLink
              to="/about"
              content="About"
              accessibilityLabel="About"
            />
            <NavigationLink
              to="/skills"
              content="Skills"
              accessibilityLabel="Skills"
            />
            <NavigationLink
              to="/work-history"
              content="Work History"
              accessibilityLabel="Work History"
            />
            <NavigationLink
              to="/education"
              content="Education"
              accessibilityLabel="Education"
            />
            <NavigationLink
              to="/contact"
              content="Contact"
              accessibilityLabel="Contact"
            />
          </nav>
        </div>
      </FadeIn>
    ) : null;

    return (
      <div className="App">
        <HashRouter>
          <>
            <Route exact path="/" component={Introduction} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/work-history" component={WorkHistory} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/contact" component={Contact} />

            {navigationMarkup}
          </>
        </HashRouter>
      </div>
    );
  }

  handleLoadNavigation = () => {
    this.setState({loadNavigation: true});
  };
}

export default App;
