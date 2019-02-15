import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';

const styles = createStyles({
    '@media (max-width: 600px)': {
        desktopView: {
            display: 'none',
        },
    },
    '@media screen and (min-width: 600px)': {
        mobileView: {
          display: 'none',
        },
    },   
    grey: {
        backgroundColor: '#858585',
    },
    link: {
        color: '#fff',
        fontWeight: 'bold'
    },
    toolbar: {        
        justifyContent: 'flex-end',
        minHeight: '40px'
    },
});

const MenuBar = (props: { customClass: any, classes: any }) => {
    const { customClass, classes } = props;

    const [open, setOpen] = React.useState(false);
    const anchorEl = React.useRef(null);

    function handleToggle() {
        setOpen(!open);
    }

    function handleClose(event: { target: any; }) {
        if (anchorEl.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    return (
        <AppBar className={customClass} position="static">
            <Toolbar className={`${classes.toolbar} ${classes.grey}`}>
                <div className={classes.mobileView}>
                    <Button className={classes.link} buttonRef={anchorEl} aria-owns={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
                        Menu
                    </Button>
                    <Popper open={open} anchorEl={anchorEl.current}>
                        {({ TransitionProps, placement }) => (
                            <div
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                <Paper className={classes.grey}>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList>
                                            <MenuItem onClick={handleClose}><Link className={classes.link} to="/">Home</Link></MenuItem>
                                            <MenuItem onClick={handleClose}><Link className={classes.link} to="/projects">Projects</Link></MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </div>
                        )}
                    </Popper>
                </div>
                <div className={classes.desktopView}>
                    <Link className={classes.link} to="/">Home</Link>
                    &nbsp;
                    <Link className={classes.link} to="/projects">Projects</Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(MenuBar);