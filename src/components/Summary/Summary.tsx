import React from 'react';
import Paragraph, { ParagraphSize } from '../Paragraph/Paragraph';

function Summary() {
  return (
    <Paragraph size={ParagraphSize.Large} centered>Hey, I'm Solona (pronounced like Barcelona).
      Part coder and part designer with 10 years experience as a web developer.
      I'm passionate about delightful user experience, accessibility, and performance.
    </Paragraph>
  );
}

export default Summary;
