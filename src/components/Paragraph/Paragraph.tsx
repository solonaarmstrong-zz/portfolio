import React from 'react';
import './Paragraph.css';

export enum ParagraphSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

interface Props {
    size?: ParagraphSize;
    centered?: boolean;
    children: string;
}

function Paragraph({size = ParagraphSize.Medium, centered = false, children}: Props) {
    const classNameCentered = centered ? ' Paragraph--centered' : '';
    return <p className={`Paragraph Paragraph--${size}${classNameCentered}`}>{children}</p>;
}

export default Paragraph;
