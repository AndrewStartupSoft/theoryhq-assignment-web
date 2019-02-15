import { createStyles, Grid, Paper, withStyles } from '@material-ui/core';
import * as React from "react";

const styles = createStyles({
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
    }
});

const Home = (props: { classes: any; }) => {
    const { classes } = props;

    return (
        <Grid container={true} spacing={24} className={classes.gridWrapper}>
            <Grid item={true} xs={12}>
                <Paper className={classes.paper}>
                    <h1>Hello World!</h1>
                </Paper>
            </Grid>
            <Grid item={true} xs={6}>
                <Paper className={classes.paper}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Paper>
            </Grid>
            <Grid item={true} xs={6}>
                <Paper className={classes.paper}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Home);