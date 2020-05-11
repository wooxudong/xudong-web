import React from 'react';
import ContentPanel from './shared/ContentPanel';
import Image from './shared/Image';
import pic from '../../../static/background-1.jpg';
import Paragraph from './shared/Paragraph';

const work = (props) => {
  return (
    <ContentPanel id="work" title="Work" {...props}>
      <Image pic={pic} />
      <Paragraph>
        Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at
        eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
        fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec
        lorem luctus ultrices.
      </Paragraph>
      <Paragraph>
        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero.
        Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque
        condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa
        vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem
        consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna
        magna sed nunc rhoncus amet feugiat tempus.
      </Paragraph>
    </ContentPanel>
  );
};

export default work;
