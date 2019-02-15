import AppBar from '@material-ui/core/AppBar';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';

const styles = createStyles({
    link: {
        color: '#fff',
        fontWeight: 'bold'     
    },
    toolbar: {
        backgroundColor: '#858585',
        justifyContent: 'flex-end',        
        minHeight: '40px'
    }
});

const MenuBar = (props: { customClass: any, classes: any }) => {    
    const { customClass, classes } = props;

    return (
        <AppBar className={customClass} position="static">
            <Toolbar className={classes.toolbar}>
                {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton> */}
                <Link className={classes.link} to="/">Home</Link>
                &nbsp;
                <Link className={classes.link} to="/projects">Projects</Link>
            </Toolbar>
        </AppBar>
    );
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(MenuBar);