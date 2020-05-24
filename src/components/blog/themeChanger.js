import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { withStyles } from "@material-ui/styles";

const styles = {
  themeChanger: {
    display: "none"
  },
  modeContainer: {
    width: "1.5rem",
    height: " 1.5rem",
    marginLeft: "1.3rem"
  },
  sunIcon: {
    position: "relative",
    display: "block",
    transform: "scale(var(--ggs,1))",
    width: "24px",
    height: "24px",
    background: `
              linear-gradient(to bottom, currentColor 4px,transparent 0)
              no-repeat 5px -6px/2px 6px,
              linear-gradient(to bottom, currentColor 4px,transparent 0)
              no-repeat 5px 14px/2px 6px,
              linear-gradient(to bottom, currentColor 4px,transparent 0)
              no-repeat -8px 5px/6px 2px,
              linear-gradient(to bottom, currentColor 4px,transparent 0)
              no-repeat 14px 5px/6px 2px`,
    borderRadius: "100px",
    boxShadow: "inset 0 0 0 2px",
    border: "6px solid transparent",
    "&:before, &:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "24px",
      height: "2px",
      borderRight: "4px solid",
      borderLeft: "4px solid",
      left: "-6px",
      top: "5px"
    },
    "&:before": {
      transform: "rotate(-45deg)"
    },
    "&:after": {
      transform: "rotate(45deg)"
    }
  }
};

const ThemeChanger = ({ classes }) => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className={classes.themeChanger}
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />{" "}
        <div className={classes.modeContainer}>
          <i className={classes.sunIcon} />
          <i className="gg-moon" />
        </div>
      </label>
    )}
  </ThemeToggler>
);
export default withStyles(styles)(ThemeChanger);
