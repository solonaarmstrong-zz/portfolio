import React from 'react';
import Heading from '../../../Heading/Heading';
import Image, {ImageSize} from '../../../Image/Image';
import {Color, Font} from '../../../../types';
import './Skill.css';

interface Props {
  name: string;
}

function Skill({name}: Props) {
  const imgPrefix = '/images/';

  return (
    <div className="Skill">
      <Heading element="h4" color={Color.Black} font={Font.Regular}>
        {name}
      </Heading>
      <Image src={`${imgPrefix}${name}.svg`} alt={name} size={ImageSize.Icon} />
    </div>
  );
}

export default Skill;
