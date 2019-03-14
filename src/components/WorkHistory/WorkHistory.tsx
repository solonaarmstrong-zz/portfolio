import React, {Component} from 'react';
import Heading from '../Heading/Heading';
import FadeIn from '../FadeIn/FadeIn';
import JobDetails from './components/JobDetails/JobDetails';
import workHistoryText from '../../data/work-history-text';
import './WorkHistory.css';
import {Color, Font, TransitionDuration} from '../../types';

interface Props {}
interface State {
  historyText: any;
}

class WorkHistory extends Component<Props, State> {
  state: State = {
    historyText: workHistoryText,
  };

  render() {
    const {historyText} = this.state;
    const jobs: string[] = Object.keys(historyText);

    const jobDetailsMarkup = jobs.map((job: string, index: number) => {
      const imgPrefix = '/images/';

      return (
        <div className="WorkHistory-Timeline" key={index}>
          <div className="WorkHistory-Dates" key={index}>
            {historyText[job].dates}
          </div>
          <div className="JobDetailsWrapper">
            <JobDetails
              companyName={historyText[job].companyName}
              className={historyText[job].className}
              role={historyText[job].role}
              description={historyText[job].descriptionItems}
              imageSrc={`${imgPrefix}${historyText[job].image}`}
              key={index}
            />
          </div>
        </div>
      );
    });

    return (
      <section className="WorkHistoryWrapper">
        <FadeIn duration={TransitionDuration.Quickest}>
          <Heading color={Color.Black} element="h2" font={Font.Regular}>
            Work History
          </Heading>
        </FadeIn>

        <div className="WorkHistory">
          <FadeIn duration={TransitionDuration.Quickest}>
            {jobDetailsMarkup}
          </FadeIn>
        </div>
      </section>
    );
  }
}

export default WorkHistory;
