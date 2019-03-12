import React from 'react';
import './SpacingContainer.css';

export type SpacingContainerSpace = 'tight' | 'regular' | 'loose' | 'extra-loose';

interface Props {
    space?: SpacingContainerSpace;
    children: React.ReactNode;
}

function SpacingContainer({space = 'regular', children}: Props) {
    return <div className={`SpacingContainer SpacingContainer--${space}`}>{children}</div>;
}

export default SpacingContainer;
