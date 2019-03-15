import React from 'react';
import FadeIn from '../../../FadeIn/FadeIn';
import './JobDetailsOverlay.css';
import {TransitionDuration} from '../../../../types';

interface Props {
  open: boolean;
  backgroundColor: string;
  textColor: string;
  children: React.ReactElement;
  onClick(): void;
}

function JobDetailsOverlay({open, children, onClick}: Props) {
  const markup = open ? (
    <div className="JobDetailsOverlayWrapper">
      <div className="JobDetailsOverlay" />
      <div className="JobDetailsOverlayContentWrapper">
        <FadeIn duration={TransitionDuration.Quicker}>
          <div className="JobDetailsOverlayContent" onClick={onClick}>
            {children}
          </div>
        </FadeIn>
      </div>
    </div>
  ) : null;

  return markup;
}

export default JobDetailsOverlay;
