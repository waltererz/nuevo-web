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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import HideOnScroll from '../../Common/Functions/HideOnScroll';
import { ReduxActionAppTab } from '../../../Redux/Actions/App';
import { APIAuthSignOut } from '../../API/Auth';

import DialogSignInFormForButton from '../../Common/Dialogs/SignInFormForButton';
import DialogAssignmentFormForButton from '../../Common/Dialogs/AssignmentFormForButton';

const Header = () => {
    const { appTab, personData } = useSelector((state) => ({
        appTab: state.app.appTab,
        personData: state.auth.personData,
    }));

    const dispatch = useDispatch();
    const tabSelector = (event, tab) => dispatch(ReduxActionAppTab(tab));

    const styles = {
        IconButton: {
            display: 'inline-block',
            marginRight: '10px',
        },
    };

    const signOut = () => {
        APIAuthSignOut().then((response) => {
            if (response) {
                window.location.href = '/';
            } else {
                alert('로그아웃 실패. 관리자에게 문의하기 바랍니다.');
            }
        });
    };

    const FetchHeaderIcon = () => {
        if (personData !== false) {
            return (
                <React.Fragment>
                    <div style={styles.IconButton} onClick={signOut}>
                        <IconButton color="inherit">
                            <ExitToAppIcon />
                        </IconButton>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <DialogSignInFormForButton styles={styles.IconButton}>
                        <IconButton color="inherit">
                            <AccountCircleIcon />
                        </IconButton>
                    </DialogSignInFormForButton>
                    <DialogAssignmentFormForButton styles={styles.IconButton}>
                        <IconButton color="inherit">
                            <AssignmentIcon />
                        </IconButton>
                    </DialogAssignmentFormForButton>
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
                            value={appTab}
                            onChange={tabSelector}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab icon={<HomeIcon />} component={Link} to="/" />
                            <Tab icon={<PieChartIcon />} component={Link} to="/assets" />
                            <Tab icon={<PeopleAltIcon />} component={Link} to="/friends" />
                            <Tab icon={<GroupWorkIcon />} component={Link} to="/clubs" />
                            <Tab icon={<PagesIcon />} component={Link} to="/advisors" />
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
