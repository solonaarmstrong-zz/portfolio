import React from 'react';
import {Color, Font} from '../../types';
import './Heading.css';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface Props {
  element: HeadingElement;
  color: Color;
  font: Font;
  children: string;
}

function Heading({element: Element = 'h2', color, font, children}: Props) {
  const className = `Heading Heading-${color} Heading-${font}`;

  return <Element className={className}>{children}</Element>;
}

export default Heading;
