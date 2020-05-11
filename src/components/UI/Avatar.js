import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import pic from "../../../static/avatar.jpg";

const styles = theme => ({
  avatar: {
    margin: 1
  },
  bigAvatar: {
    [theme.breakpoints.down("sm")]: {
      width: 60,
      height: 60
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 76,
      height: 76
    },
    [theme.breakpoints.up("md")]: {
      width: 84,
      height: 84
    }
  }
});

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Wu Xudong"
        src={pic}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatars);
