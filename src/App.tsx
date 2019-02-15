import { createStyles, Grid, withStyles } from '@material-ui/core';
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './containers/Home/Home';
import Project from './containers/Projects/Project';
import Projects from './containers/Projects/Projects';

const styles = createStyles({
  fixedNav: {
    bottom: 0,
    position: 'fixed'    
  },
  rootContainer: {
    height: '100%'
  },
});

const Application = (props: { classes: any; }) => {
  const { classes } = props;

  return (
    <Router>
      <div className={classes.rootContainer}>
        <Navigation />
        <Route exact={true} path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path={`/project/:id`} component={Project} />
        <Navigation customClass={classes.fixedNav} />
      </div>
    </Router>
  )
};

export default withStyles(styles)(Application);