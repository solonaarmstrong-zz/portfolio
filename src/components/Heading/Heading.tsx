import React from 'react';
import {Color} from '../../types';
import './Heading.css';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';

interface Props {
    element: HeadingElement;
    color: Color;
    children: string;
}

function Heading({element: Element = 'h2', color, children}: Props) {
    const className = `Heading Heading-${color}`;

    return <Element className={className}>{children}</Element>;
}

export default Heading;
