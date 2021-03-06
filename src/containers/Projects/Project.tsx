import { createStyles, Grid, Paper, withStyles, WithStyles } from '@material-ui/core';
import * as React from "react";
import { Link, Route } from 'react-router-dom';
import { getProjectById } from 'src/api/projects';
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
        color: '#000',
        padding: 20,
        textAlign: 'center',
    },
    paperRed: {
        backgroundColor: 'red'
    }
});

export interface IProps extends WithStyles<typeof styles> { }

const Project = (props: { match: any, classes: any }) => {
    const { match, classes } = props;
    const [project, setProject] = React.useState(new ProjectModel());

    React.useEffect(() => {
        getProjectById(match.params.id).then((proj: any) => {
            const pm = new ProjectModel(); 
            const retrievedData = proj.data;

            pm.id = retrievedData.id;
            pm.title = retrievedData.title;
            pm.description = retrievedData.description;

            setProject(pm);
        })
    }, [])

    return (
        <Grid container={true} spacing={24} className={classes.gridWrapper}>
            <Grid item={true} xs={12}>
                <Paper className={classes.paper}>
                    <h1>{project.title}</h1>
                </Paper>
            </Grid>
            <Grid item={true} sm={12}>
                <Paper className={classes.paper}>
                    <p>{project.description}</p>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Project);