import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    display: 'inline-block',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: '#B2DFDB',
  },
  barColorPrimary: {
    backgroundColor: '#5ad67d',
  },
};

function LinearIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary: classes.barColorPrimary,
        }}
      />
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);
