import React from 'react';
import loadable from '@loadable/component';

const TableauReport = loadable(() => import('tableau-react-embed'));

export default ({ url }) => <TableauReport url={url} />;
