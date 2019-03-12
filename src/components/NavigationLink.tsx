import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationLink.css';

interface Props {
  to: string;
  content: string;
  active?: boolean;
  accessibilityLabel: string;
  onClick?(): void;
}

function NavigationLink({
  to,
  content,
  active = false,
  accessibilityLabel,
  onClick,
}: Props) {
  const activeClassName = active ? ' NavigationLink--active' : '';

  return (
    <button
      className={`NavigationLink${activeClassName}`}
      aria-label={accessibilityLabel}
      onClick={onClick}
    >
      <NavLink to={to}>{content}</NavLink>
    </button>
  );
}

export default NavigationLink;
