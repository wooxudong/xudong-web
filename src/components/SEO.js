import React from "react";
import Helmet from "react-helmet";

export default ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={"wooxudong, xudong, wu xudong"} />
  </Helmet>
);
