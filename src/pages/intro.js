import React from 'react';
import Intro from '../components/mainPage/Intro';
import Layout from '../components/mainPage/Layout';
import Content from '../components/mainPage/Content';

export default () => (
  <Layout>
    <Content>
      <Intro />
    </Content>
  </Layout>
);
