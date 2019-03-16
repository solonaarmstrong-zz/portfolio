import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';
import NavigationLink from './components/NavigationLink/NavigationLink';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import WorkHistory from './components/WorkHistory/WorkHistory';
import Contact from './components/Contact/Contact';
import FadeIn from './components/FadeIn/FadeIn';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
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
    if (location.hash != '#/') {
      this.handleLoadNavigation();
    } else {
      setTimeout(this.handleLoadNavigation, 2500);
    }
  }

  render() {
    const {loadNavigation} = this.state;

    const navigationItems = (
      <>
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
          to="/contact"
          content="Contact"
          accessibilityLabel="Contact"
        />
      </>
    );

    const navigationMarkup = loadNavigation ? (
      <FadeIn duration={TransitionDuration.Quickest}>
        <nav className="NavigationWrapper">
          <div className="Navigation--desktop">{navigationItems}</div>
          <div className="Navigation--small">
            <HamburgerMenu>{navigationItems}</HamburgerMenu>
          </div>
        </nav>
      </FadeIn>
    ) : null;

    return (
      <div className="App">
        <HashRouter>
          <main>
            <Route exact path="/" component={Introduction} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/work-history" component={WorkHistory} />
            <Route exact path="/contact" component={Contact} />

            {navigationMarkup}
          </main>
        </HashRouter>
      </div>
    );
  }

  handleLoadNavigation = () => {
    this.setState({loadNavigation: true});
  };
}

export default App;
