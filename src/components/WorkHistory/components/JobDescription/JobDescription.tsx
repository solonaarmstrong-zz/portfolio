import React from 'react';
import FadeIn from '../../../FadeIn/FadeIn';
import {TransitionDuration} from '../../../../types';
import './JobDescription.css';

interface Props {
  open: boolean;
  children: React.ReactElement;
}

function JobDescription({open, children}: Props) {
  const markup = open ? (
    <div className="JobDescription-Wrapper">
      <div className="JobDescription-Content">
        <FadeIn duration={TransitionDuration.Quickest}>{children}</FadeIn>
      </div>
    </div>
  ) : null;

  return markup;
}

export default JobDescription;
