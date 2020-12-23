import React from 'react';
import CodeSlice from './code';
import ParagraphSlice from './paragraph';
import { CODE, RICH_TEXT, TABLEAU } from './sliceType';
import TableauResume from '../tableauTemplate';

export default ({ body }) => {
  return (
    <>
      {body &&
        body.map((bodyContent, i) => {
          switch (bodyContent.type) {
            case CODE:
              return <CodeSlice key={i} content={bodyContent.primary.code} />;
            case RICH_TEXT:
              return (
                <ParagraphSlice paragraph={bodyContent.primary.paragraph} />
              );
            case TABLEAU:
              return <TableauResume url={bodyContent.primary.url} />;
            default:
              return null;
          }
        })}
    </>
  );
};
