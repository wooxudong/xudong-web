import React, { Fragment } from "react";
import CodeSlice from "./code";
import { RichText } from "prismic-reactjs";
import { CODE, RICH_TEXT } from "./sliceType";

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
                <Fragment key={i}>
                  {RichText.render(bodyContent.primary.paragraph)}
                </Fragment>
              );
            default:
              return null;
          }
        })}
    </>
  );
};
