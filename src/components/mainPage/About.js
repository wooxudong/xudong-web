import React from 'react';
import ContentPanel from './shared/ContentPanel';
import pic from '../../static/background-1.jpg';
import Image from './shared/Image';
import Paragraph from './shared/Paragraph';

const about = props => {
  return (
    <ContentPanel id="about" title="About" {...props}>
      <Image pic={pic} />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
        eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
        volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
        Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et
        malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula
        sit amet ex mollis mattis lorem ipsum dolor sit amet.
      </Paragraph>
    </ContentPanel>
  );
};

export default about;
