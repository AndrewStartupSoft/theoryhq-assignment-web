import { createStyles, Grid, Paper, withStyles, WithStyles } from '@material-ui/core';
import * as React from "react";
import { Link } from 'react-router-dom';
import { getProjects } from 'src/api/projects';
import ProjectModel from 'src/models/project.model';

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

export interface IProps extends WithStyles<typeof styles> { }

const Projects = (props: IProps) => {
    const [projects, setProjects] = React.useState([]);
    const { classes } = props;

    React.useEffect(() => {
        getProjects().then((proj: ProjectModel[]) => {
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
                projects.map((project: ProjectModel, index: number) => {
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