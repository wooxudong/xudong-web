import React from 'react';
import ContentPanel from './shared/ContentPanel';
import Form from './shared/form/Form';

const contact = props => {
  return (
    <ContentPanel id="contact" title="Contact" {...props}>
      <Form />
    </ContentPanel>
  );
};

export default contact;
