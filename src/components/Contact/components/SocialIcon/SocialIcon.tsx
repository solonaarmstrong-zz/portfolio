import React from 'react';
import './SocialIcon.css';

interface Props {
  children: React.ReactNode;
}

function SocialIcon({children}: Props) {
  return <div className="SocialIcon">{children}</div>;
}

export default SocialIcon;
