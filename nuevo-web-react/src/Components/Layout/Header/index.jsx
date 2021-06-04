import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';

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
import {
    ReduxActionLayoutHeaderProfile,
    ReduxActionLayoutHeaderApps,
} from '../../../Redux/Actions/Layout';

import DialogSignInFormForButton from '../../Common/Dialogs/SignInFormForButton';
import DialogAssignmentFormForButton from '../../Common/Dialogs/AssignmentFormForButton';

import HeaderApps from './Apps';
import HeaderProfile from './Profile';

import CONSTANT from '../../Common/Constants';

const Header = () => {
    const { route, headerProfile, headerApps } = useSelector((state) => ({
        route: state.app.route,
        headerProfile: state.layout.headerProfile,
        headerApps: state.layout.headerApps,
    }));

    const dispatch = useDispatch();
    const routeSelector = (event, route) => dispatch(ReduxActionAppRoute(route));
    const toggleHeaderProfile = (event) => dispatch(ReduxActionLayoutHeaderProfile(!headerProfile));
    const toggleHeaderApps = (event) => dispatch(ReduxActionLayoutHeaderApps(!headerApps));

    const styles = {
        AvatarBox: {
            display: 'inline-block',
            marginRight: '15px',
            cursor: 'pointer',
        },
        Avatar: {
            backgroundColor: '#ececec',
            color: '#000000',
        },
    };

    const FetchHeaderIcon = () => {
        if (CONSTANT.AUTH) {
            return (
                <React.Fragment>
                    <div style={styles.AvatarBox}>
                        <Avatar style={styles.Avatar} onClick={toggleHeaderProfile}>
                            <AccountCircleIcon />
                        </Avatar>
                    </div>
                    <div style={styles.AvatarBox}>
                        <Avatar style={styles.Avatar} onClick={toggleHeaderApps}>
                            <AppsIcon />
                        </Avatar>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <DialogSignInFormForButton styles={styles.AvatarBox}>
                        <Avatar style={styles.Avatar}>
                            <AccountCircleIcon />
                        </Avatar>
                    </DialogSignInFormForButton>
                    <DialogAssignmentFormForButton styles={styles.AvatarBox}>
                        <Avatar style={styles.Avatar}>
                            <AssignmentIcon />
                        </Avatar>
                    </DialogAssignmentFormForButton>
                    <div style={styles.AvatarBox}>
                        <Avatar style={styles.Avatar} onClick={toggleHeaderApps}>
                            <AppsIcon />
                        </Avatar>
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
            <HeaderApps />
            <HeaderProfile />
        </React.Fragment>
    );
};

export default Header;
