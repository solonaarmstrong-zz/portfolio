import React, {Component} from 'react';
import FadeIn from '../FadeIn/FadeIn';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Flex from '../Flex/Flex';
import Card from './components/Card/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faPhone,
  faAt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
library.add(faBriefcase, faPhone, faAt, faEnvelope);
import {Color, Font, TransitionDuration} from '../../types';
import {ImageSize} from '../Image/Image';
import './Contact.css';
import SpacingContainer from '../SpacingContainer/SpacingContainer';

interface Props {}
interface State {
  smallScreen: boolean;
}

class Contact extends Component<Props, State> {
  state: State = {
    smallScreen: false,
  };

  componentDidMount() {
    this.handleResponsiveContent();

    window.addEventListener('resize', this.handleResponsiveContent);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResponsiveContent);
  }

  render() {
    const {smallScreen} = this.state;

    const justifyContent = smallScreen ? 'center' : 'flex-start';

    console.log(smallScreen);

    return (
      <section className="ContactWrapper">
        <FadeIn duration={TransitionDuration.Quickest}>
          <Heading color={Color.Black} element="h2" font={Font.Regular}>
            Contact
          </Heading>
        </FadeIn>

        <div className="Contact">
          <Card>
            <div className="Contact-Content">
              <div className="Contact-Content-Left">
                <div className="Contact-Content-LeftInner">
                  <FadeIn duration={TransitionDuration.Quicker}>
                    Solona Armstrong
                    <SpacingContainer space="regular">
                      <Flex flexDirection="column">
                        <Flex
                          alignItems="center"
                          justifyContent={justifyContent}
                        >
                          <FontAwesomeIcon
                            icon={faPhone}
                            size="1x"
                            className="spaced"
                          />
                          613-305-3072
                        </Flex>
                      </Flex>
                      <Flex alignItems="center" justifyContent={justifyContent}>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="1x"
                          className="spaced"
                        />
                        &#115;&#111;&#108;&#111;&#110;&#097;&#046;&#097;&#114;&#109;&#115;&#116;&#114;&#111;&#110;&#103;&#032;&#064;&#032;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                      </Flex>
                    </SpacingContainer>
                    <SpacingContainer>
                      <Flex alignItems="center" justifyContent={justifyContent}>
                        <a
                          href="/files/SolonaArmstrong-FrontEnd-Resume.pdf"
                          target="_blank"
                          className="none"
                        >
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            size="1x"
                            className="spaced"
                          />
                        </a>
                        <a
                          href="/files/SolonaArmstrong-FrontEnd-Resume.pdf"
                          target="_blank"
                        >
                          Download my resume
                        </a>
                      </Flex>
                    </SpacingContainer>
                  </FadeIn>
                </div>
              </div>
              <div className="Contact-Content-Right">
                <div className="Contact-Content-Inner">
                  <FadeIn duration={TransitionDuration.Quick}>
                    <Image
                      src="/images/undraw_react_y7wq.svg"
                      alt=""
                      size={ImageSize.Large}
                    />
                  </FadeIn>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  handleResponsiveContent = () => {
    if (document.body.clientWidth >= 800) {
      this.setState({smallScreen: false});
    } else {
      this.setState({smallScreen: true});
    }
  };
}

export default Contact;
