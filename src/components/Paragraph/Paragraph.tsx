import React, {ReactHTML} from 'react';
import './Paragraph.css';

export enum ParagraphWidth {
  Narrow = 'narrow',
  Wide = 'wide',
}

export enum ParagraphTextSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface Props {
  width?: ParagraphWidth;
  textSize?: ParagraphTextSize;
  centered?: boolean;
  children: React.ReactNode;
}

function Paragraph({
  width = ParagraphWidth.Narrow,
  textSize = ParagraphTextSize.Medium,
  centered = false,
  children,
}: Props) {
  const classNameCentered = centered ? ' Paragraph--centered' : '';
  return (
    <p
      className={`Paragraph Paragraph--${width} Paragraph--${textSize}${classNameCentered}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
