import React, {Component} from 'react';
import Image, {ImageSize} from '../../../Image/Image';
import {CSSTransition} from 'react-transition-group';
import {TransitionDuration} from '../../../../types';
import JobDescription from '../JobDescription/JobDescription';
import Button from '../../../Button/Button';
import './JobDetails.css';

interface Props {
  companyName: string;
  className: string;
  role: string;
  description: string[];
  imageSrc?: string;
  buttons?: React.ReactNode;
}

interface State {
  open: boolean;
}

class JobDetails extends Component<Props, State> {
  state: State = {
    open: false,
  };

  render() {
    const {companyName, role, description, imageSrc, buttons} = this.props;
    const {open} = this.state;

    const logoMarkup = imageSrc ? (
      <div className="JobDetails-Logo">
        <Image size={ImageSize.Icon} src={imageSrc} alt={companyName} />
      </div>
    ) : null;

    const jobDetailsOverlayMarkup = (
      <JobDescription open={open}>
        <ul>{description.map(this.renderDescriptionItems)}</ul>
      </JobDescription>
    );

    const buttonsMarkup = buttons ? (
      <div className="JobDetails-Links">{buttons}</div>
    ) : null;

    return (
      <div className="JobDetails">
        <div className="JobDetails-Summary">
          {logoMarkup}
          <div className="JobDetails-Text">
            <div className="JobDetails-CompanyName">{companyName}</div>
            <div className="JobDetails-Role">{role}</div>
            <div className="JobDetails-Buttons">
              <Button
                content="What I did"
                size="small"
                color="white"
                onClick={this.toggleOverlay}
              />
              {buttonsMarkup}
            </div>
            <CSSTransition
              in={open}
              timeout={TransitionDuration.Quickest}
              classNames="JobDetails-Description"
            >
              {jobDetailsOverlayMarkup}
            </CSSTransition>
          </div>
        </div>
      </div>
    );
  }

  renderDescriptionItems = (item: any, index: number) => {
    return <li key={index}>{item}</li>;
  };

  toggleOverlay = () => {
    this.setState(({open}) => {
      return {open: !open};
    });
  };
}

export default JobDetails;
