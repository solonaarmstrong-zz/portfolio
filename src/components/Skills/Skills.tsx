import React, {Component} from 'react';
import Heading from '../Heading/Heading';
import Card from './components/Card/Card';
import FadeIn from '../FadeIn/FadeIn';
import Skill from './components/Skill/Skill';
import {Color, Font, TransitionDuration} from '../../types';
import './Skills.css';

interface Props {}
interface State {}

class Skills extends Component<Props, State> {
  render() {
    return (
      <section className="SkillsWrapper">
        <FadeIn duration={TransitionDuration.Quickest}>
          <Heading color={Color.Black} element="h2" font={Font.Regular}>
            Skills
          </Heading>
        </FadeIn>

        <div className="Skills">
          <FadeIn duration={TransitionDuration.Quicker}>
            <Skill name="HTML5" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slow}>
            <Skill name="CSS3" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quick}>
            <Skill name="Sass" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quickest}>
            <Skill name="JavaScript" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slower}>
            <Skill name="ES6" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quicker}>
            <Skill name="TypeScript" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quicker}>
            <Skill name="React" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quicker}>
            <Skill name="Redux" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slow}>
            <Skill name="Enzyme" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quickest}>
            <Skill name="Jest" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quick}>
            <Skill name="Git" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slowest}>
            <Skill name="VSCode" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slowest}>
            <Skill name="jQuery" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quicker}>
            <Skill name="Django" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slower}>
            <Skill name="Rails" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quick}>
            <Skill name="Drupal" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slowest}>
            <Skill name="Wordpress" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quick}>
            <Skill name="WooCommerce" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quick}>
            <Skill name="Shopify" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slowest}>
            <Skill name="MySQL" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quicker}>
            <Skill name="GraphQL" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slower}>
            <Skill name="Sketch" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Slow}>
            <Skill name="InVision" />
          </FadeIn>
          <FadeIn duration={TransitionDuration.Quicker}>
            <Skill name="Photoshop" />
          </FadeIn>
        </div>
      </section>
    );
  }
}

export default Skills;
