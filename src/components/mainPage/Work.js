<<<<<<< HEAD
import React from "react";
import ContentPanel from "./shared/ContentPanel";
import Paragraph from "./shared/Paragraph";
import TableauResume from "../../templates/tableauTemplate";
import { withStyles } from "@material-ui/core/styles";
=======
import React from 'react';
import ContentPanel from './shared/ContentPanel';
import Paragraph from './shared/Paragraph';
import TableauResume from '../templates/tableauTemplate';
import { withStyles } from '@material-ui/core/styles';
>>>>>>> bacda291948a6af3b30eb6ec717f17ce8cc3ac56

const styles = {
  resume: {
    transform: "scale(0.55) translate(-40%, -30%)",
    height: "550px",
    "@media screen and (max-width: 1060px)": {
      display: "none"
    }
  }
};
const Work = ({ classes }) => {
  return (
    <ContentPanel>
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
      <div className={classes.resume}>
        <TableauResume url="https://public.tableau.com/views/WU_XUDONG_CV/Dashboard1" />
      </div>
    </ContentPanel>
  );
};

export default withStyles(styles)(Work);
