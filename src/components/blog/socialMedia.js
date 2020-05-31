import React from "react";
import { Location } from "@reach/router";
import Facebook from "../../../static/image/icons/Facebook.svg";
import LinkedIn from "../../../static/image/icons/LinkedIn.svg";
import Twitter from "../../../static/image/icons/Twitter.svg";
import { withStyles } from "@material-ui/styles";
import { mainGreen } from "../styles/colors";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    "& div": {
      marginRight: "15px"
    },
    "&:last-child": {
      marginRight: 0
    }
  },
  text: {
    color: mainGreen
  }
};

const socialMedia = props => {
  const { classes } = props;
  return (
    <Location>
      {({ location }) => (
        <div {...props} className={classes.container}>
          <div>
            <p className={classes.text}>
              <strong>Share post:</strong>
            </p>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href={`https://www.facebook.com/sharer/sharer.php?u=${location.href}`}
            >
              <img alt={"Facebook Icon"} src={Facebook} />
            </a>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href={`https://twitter.com/home?status=This%20is%20an%20interesting%20read%0A${location.href}`}
            >
              <img alt={"Twitter Icon"} src={Twitter} />
            </a>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href={`https://www.linkedin.com/shareArticle?url=${location.href}`}
            >
              <img alt={"LinkedIn Icon"} src={LinkedIn} />
            </a>
          </div>
        </div>
      )}
    </Location>
  );
};

export default withStyles(styles)(socialMedia);
