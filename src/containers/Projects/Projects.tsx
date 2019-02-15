import { createStyles, Grid, Paper, withStyles } from '@material-ui/core';
import * as React from "react";
import { Link, Route } from 'react-router-dom';
import { getProjects } from 'src/api/projects';
import Project from './Project';

const styles = createStyles({
    '@media (max-width: 800px)': {
        gridWrapper: {
            width: '100%',
        },
    },
    gridWrapper: {
        margin: '20px auto !important',
        maxWidth: '800px !important',
    },
    paper: {
        boxSizing: 'border-box',
        color: '#000',
        height: '100%',
        padding: 20,
        textAlign: 'center',
    },
    paperRed: {
        backgroundColor: 'red'
    }
});

const Projects = (props: { classes: any; }): any => {
    const [projects, setProjects] = React.useState([]);
    const { classes } = props;

    React.useEffect(() => {
        getProjects().then((proj: any) => {
            setProjects(proj);
        })
    }, [])

    return (
        <Grid container={true} spacing={24} className={classes.gridWrapper}>
            <Grid item={true} xs={12}>
                <Paper className={classes.paper}>
                    <h1>Projects</h1>
                </Paper>
            </Grid>
            {
                projects.map((project: any, index: number) => {
                    return (
                        <Grid item={true} sm={6} key={index}>
                            <Paper className={`${classes.paper} ${project.isCritical ? classes.paperRed : ''}`}>
                                <h3>
                                    <Link to={`/project/${project.id}`}>{project.title}</Link>
                                </h3>
                            </Paper>
                        </Grid>)
                })
            }
        </Grid>
    );
};

export default withStyles(styles)(Projects);