import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PagesIcon from '@material-ui/icons/Pages';
import PieChartIcon from '@material-ui/icons/PieChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';

import CONSTANT from '../Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';
import Header from './Header';
import Footer from './Footer';

import AssetsLeftGrid from '../../Routes/Assets/LeftGrid';
import FriendsLeftGrid from '../../Routes/Friends/LeftGrid';
import ClubsLeftGrid from '../../Routes/Clubs/LeftGrid';
import AdvisorsLeftGrid from '../../Routes/Advisors/LeftGrid';

import './index.css';

const Layout = (props) => {
    const { children } = props;

    // 다른 Drawer Paper 스타일을 정의하기 위해 필요
    const classes = {
        drawer: {
            root: 'container-grid-item-left',
        },
    };

    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();

    const routeSelector = (route) => (event) => dispatch(ReduxActionAppRoute(route));

    // HOME ROUTE의 경우에는 Left Grid 배경색 없음
    if (route == CONSTANT.MAINROUTE.HOME) {
        classes.drawer = {
            paper: 'container-grid-item-left container-grid-item-left-margin',
        };
    } else {
        classes.drawer = {
            paper: 'container-grid-item-left container-grid-item-left-margin bgWhite boxShadow',
        };
    }

    const LeftGridItems = () => {
        switch (route) {
            case CONSTANT.MAINROUTE.HOME:
                return (
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="사용자이름" />
                        </ListItem>
                        <Link to="/assets" onClick={routeSelector(CONSTANT.MAINROUTE.ASSETS)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PieChartIcon />
                                </ListItemIcon>
                                <ListItemText primary="자산관리" />
                            </ListItem>
                        </Link>
                        <Link to="/friends" onClick={routeSelector(CONSTANT.MAINROUTE.FRIENDS)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="친구" />
                            </ListItem>
                        </Link>
                        <Link to="/clubs" onClick={routeSelector(CONSTANT.MAINROUTE.CLUBS)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <GroupWorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="투자그룹" />
                            </ListItem>
                        </Link>
                        <Link to="/advisors" onClick={routeSelector(CONSTANT.MAINROUTE.ADVISORS)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PagesIcon />
                                </ListItemIcon>
                                <ListItemText primary="투자어드바이저" />
                            </ListItem>
                        </Link>
                        <Link to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <LocalActivityIcon />
                                </ListItemIcon>
                                <ListItemText primary="저장됨" />
                            </ListItem>
                        </Link>
                        <Link to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <FolderSpecialIcon />
                                </ListItemIcon>
                                <ListItemText primary="즐겨찾기" />
                            </ListItem>
                        </Link>
                        <Link to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <QuestionAnswerIcon />
                                </ListItemIcon>
                                <ListItemText primary="메시지" />
                            </ListItem>
                        </Link>
                    </List>
                );
            case CONSTANT.MAINROUTE.ASSETS:
                return (
                    <React.Fragment>
                        <AssetsLeftGrid />
                    </React.Fragment>
                );
            case CONSTANT.MAINROUTE.FRIENDS:
                return (
                    <React.Fragment>
                        <FriendsLeftGrid />
                    </React.Fragment>
                );
            case CONSTANT.MAINROUTE.CLUBS:
                return (
                    <React.Fragment>
                        <ClubsLeftGrid />
                    </React.Fragment>
                );
            case CONSTANT.MAINROUTE.ADVISORS:
                return (
                    <React.Fragment>
                        <AdvisorsLeftGrid />
                    </React.Fragment>
                );
        }
    };

    const RightGridItems = (props) => {
        if (route == CONSTANT.MAINROUTE.HOME) {
            return (
                <React.Fragment>
                    <Grid item classes={{ item: 'container-grid-item-left' }}></Grid>
                    <Grid item classes={{ item: 'container-grid-item-center' }}>
                        {props.children}
                    </Grid>
                    <Grid item classes={{ item: 'container-grid-item-right' }}>
                        오른쪽 사이드
                    </Grid>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Grid item classes={{ item: 'container-grid-item-left' }}></Grid>
                    <Grid item classes={{ item: 'container-grid-item-center-2' }}>
                        {props.children}
                    </Grid>
                </React.Fragment>
            );
        }
    };

    return (
        <React.Fragment>
            <Header />
            <Container classes={{ root: 'root-container' }} maxWidth="false">
                <Drawer classes={classes.drawer} variant="permanent">
                    <LeftGridItems />
                </Drawer>
                <Grid container direction="row" justify="space-between" alignItems="flex-start">
                    <RightGridItems children={children} />
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
