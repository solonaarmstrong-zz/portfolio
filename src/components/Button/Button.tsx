import React from 'react';
import './Button.css';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'blue' | 'white' | 'yellow';

interface Props {
  size?: ButtonSize;
  color?: ButtonColor;
  content: string;
  accessibilityLabel?: string;
  onClick?(): void;
}

function Button({
  size = 'medium',
  color = 'blue',
  accessibilityLabel,
  content,
  onClick,
}: Props) {
  return (
    <button
      className={`Button Button--${size} Button--${color}`}
      aria-label={accessibilityLabel}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;
