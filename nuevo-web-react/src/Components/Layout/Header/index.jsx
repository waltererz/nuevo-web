import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PagesIcon from '@material-ui/icons/Pages';
import PieChartIcon from '@material-ui/icons/PieChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppsIcon from '@material-ui/icons/Apps';

import HideOnScroll from '../../Common/Functions/HideOnScroll';
import { ReduxActionAppRoute } from '../../../Redux/Actions/App';

import DialogSignInFormForButton from '../../Common/Dialogs/SignInFormForButton';
import DialogAssignmentFormForButton from '../../Common/Dialogs/AssignmentFormForButton';

import CONSTANT from '../../Common/Constants';

const Header = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = (event, route) => dispatch(ReduxActionAppRoute(route));

    const styles = {
        IconButtonBox: {
            display: 'inline-block',
            marginRight: '15px',
        },
        IconButtonRoot: {
            backgroundColor: '#efefef',
            padding: '9px',
        },
    };

    const signout = () => {
        window.location.href = '/signout.php';
    };

    const FetchHeaderIcon = () => {
        if (CONSTANT.AUTH) {
            return (
                <React.Fragment>
                    <div style={styles.IconButtonBox} onClick={signout}>
                        <IconButton color="inherit" style={styles.IconButtonRoot}>
                            <AccountCircleIcon />
                        </IconButton>
                    </div>
                    <div style={styles.IconButtonBox}>
                        <IconButton color="inherit" style={styles.IconButtonRoot}>
                            <AppsIcon />
                        </IconButton>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <DialogSignInFormForButton styles={styles.IconButtonBox}>
                        <IconButton color="inherit" style={styles.IconButtonRoot}>
                            <AccountCircleIcon />
                        </IconButton>
                    </DialogSignInFormForButton>
                    <DialogAssignmentFormForButton styles={styles.IconButtonBox}>
                        <IconButton color="inherit" style={styles.IconButtonRoot}>
                            <AssignmentIcon />
                        </IconButton>
                    </DialogAssignmentFormForButton>
                    <div style={styles.IconButtonBox}>
                        <IconButton color="inherit" style={styles.IconButtonRoot}>
                            <AppsIcon />
                        </IconButton>
                    </div>
                </React.Fragment>
            );
        }
    };

    return (
        <React.Fragment>
            <HideOnScroll mediaQuery="(max-width: 1100px)">
                <AppBar color="default" position="fixed">
                    <div style={{ flexGrow: 1 }}>
                        <Tabs
                            centered={true}
                            value={route}
                            onChange={routeSelector}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab
                                icon={<HomeIcon />}
                                value={CONSTANT.MAINROUTE.HOME}
                                component={Link}
                                to="/"
                            />
                            <Tab
                                icon={<PieChartIcon />}
                                value={CONSTANT.MAINROUTE.ASSETS}
                                component={Link}
                                to="/assets"
                            />
                            <Tab
                                icon={<PeopleAltIcon />}
                                value={CONSTANT.MAINROUTE.FRIENDS}
                                component={Link}
                                to="/friends"
                            />
                            <Tab
                                icon={<GroupWorkIcon />}
                                value={CONSTANT.MAINROUTE.CLUBS}
                                component={Link}
                                to="/clubs"
                            />
                            <Tab
                                icon={<PagesIcon />}
                                value={CONSTANT.MAINROUTE.ADVISORS}
                                component={Link}
                                to="/advisors"
                            />
                        </Tabs>
                    </div>
                    <div className="header-icon-container">
                        <FetchHeaderIcon />
                    </div>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
};

export default Header;
