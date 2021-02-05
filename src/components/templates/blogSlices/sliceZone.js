import React from 'react';
import CodeSlice from './code';
import ParagraphSlice from './paragraph';
import { CODE, RICH_TEXT, TABLEAU, QUOTE, MEDIA } from './sliceType';
import TableauReport from './tableauReport';
import Quote from './quote';
import Media from './media';

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
              return <TableauReport url={bodyContent.primary.link} />;
            case QUOTE:
              return (
                <Quote
                  quote={bodyContent.primary.quote}
                  type={bodyContent.primary.type}
                />
              );
            case MEDIA:
              return <Media {...bodyContent.primary} />;
            default:
              return null;
          }
        })}
    </>
  );
};
