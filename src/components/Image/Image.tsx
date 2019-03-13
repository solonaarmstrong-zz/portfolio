import React, {Component} from 'react';
import './Image.css';

export enum ImageSize {
  Icon = 'icon',
  ExtraSmall = 'extraSmall',
  Small = 'small',
  Medium = 'medium',
  Full = 'full',
}

interface Props {
  src: string;
  alt: string;
  size?: ImageSize;
}

function Image({src, alt, size = ImageSize.Medium}: Props) {
  return (
    <img src={src} alt={alt} title={alt} className={`Image Image--${size}`} />
  );
}

export default Image;
