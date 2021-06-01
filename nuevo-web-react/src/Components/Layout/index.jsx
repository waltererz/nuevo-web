import React from 'react';
import { useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';

import CONSTANT from '../Common/Constants';
import Header from './Header';
import Footer from './Footer';

import HomeLeftGrid from '../../Routes/Home/LeftGrid';
import AssetsLeftGrid from '../../Routes/Assets/LeftGrid';
import FriendsLeftGrid from '../../Routes/Friends/LeftGrid';
import ClubsLeftGrid from '../../Routes/Clubs/LeftGrid';
import AdvisorsLeftGrid from '../../Routes/Advisors/LeftGrid';

import './index.css';

const Layout = (props) => {
    const { children } = props;
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    // 다른 Drawer Paper 스타일을 정의하기 위해 필요
    const classes = {
        drawer: {
            root: 'container-grid-item-left',
        },
    };

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
                    <React.Fragment>
                        <HomeLeftGrid />
                    </React.Fragment>
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
