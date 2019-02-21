import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './containers/Home/Home';
import Project from './containers/Projects/Project';
import Projects from './containers/Projects/Projects';

const styles = createStyles({
  rootContainer: {
    height: '100%'
  },
});

export interface IProps extends WithStyles<typeof styles> { }

const Application = (props: IProps) => {
  const { classes } = props;

  return (
    <Router>
      <div className={classes.rootContainer}>
        <Navigation />
        <Route exact={true} path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path={`/project/:id`} component={Project} />
        <Navigation />
      </div>
    </Router>
  )
};

export default withStyles(styles)(Application);