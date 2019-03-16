import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {TransitionDuration} from '../../types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);
import './HamburgerMenu.css';

interface Props {
  children: React.ReactNode;
}

interface State {
  open: boolean;
}

class HamburgerMenu extends Component<Props, State> {
  state: State = {
    open: false,
  };

  render() {
    const {children} = this.props;
    const {open} = this.state;

    const underlay = open ? (
      <div className="MenuUnderlay" onClick={this.toggleMenu} />
    ) : null;

    return (
      <div className="HamburgerMenu">
        <button className="ToggleMenu" onClick={this.toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" color="#fff" />
        </button>
        <CSSTransition
          in={open}
          timeout={TransitionDuration.Immediate}
          classNames="MenuOpen"
          unmountOnExit
        >
          <div className="MenuWrapper" onClick={this.toggleMenu}>
            {children}
          </div>
        </CSSTransition>
        {underlay}
      </div>
    );
  }

  toggleMenu = () => {
    this.setState(({open}) => {
      return {open: !open};
    });
  };
}

export default HamburgerMenu;
