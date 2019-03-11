import React from 'react';
import './Skeleton.css';

export type Alignment = 'Centered' | 'Left';

interface Props {
    alignment?: Alignment;
}

function Skeleton({alignment = 'Left'}: Props) {
    return(
        <div className={`SkeletonWrapper SkeletonWrapper--${alignment}`}>
            <div className='Skeleton Skeleton--Long' />
            <div className='Skeleton Skeleton--Long' />
            <div className='Skeleton Skeleton--Short' />
        </div>
    );
}

export default Skeleton;
