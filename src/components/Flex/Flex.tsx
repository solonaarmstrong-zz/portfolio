import React from 'react';
import './Flex.css';

export type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type flexWrap = 'nowrap' | 'wrap';
export type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type alignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
export type alignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';

interface Props {
  flexDirection?: flexDirection;
  flexWrap?: flexWrap;
  justifyContent?: justifyContent;
  alignItems?: alignItems;
  alignContent?: alignContent;
  children: React.ReactNode;
}

function Flex({
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  children,
}: Props) {
  const classNamePrefix = ' Flex-';
  const classNameFlexDirection = flexDirection
    ? `${classNamePrefix}FlexDirection--${flexDirection}`
    : '';
  const classNameFlexWrap = flexWrap
    ? `${classNamePrefix}FlexWrap--${flexWrap}`
    : '';
  const classNameJustifyContent = justifyContent
    ? `${classNamePrefix}JustifyContent--${justifyContent}`
    : '';
  const classNameAlignItems = alignItems
    ? `${classNamePrefix}AlignItems--${alignItems}`
    : '';
  const classNameAlignContent = alignContent
    ? `${classNamePrefix}AlignContent--${alignContent}`
    : '';

  return (
    <div
      className={`Flex${classNameFlexDirection}${classNameFlexWrap}${classNameJustifyContent}${classNameAlignItems}${classNameAlignContent}`}
    >
      {children}
    </div>
  );
}

export default Flex;
