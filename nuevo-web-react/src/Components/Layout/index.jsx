import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

import AdbIcon from '@material-ui/icons/Adb';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PagesIcon from '@material-ui/icons/Pages';
import PieChartIcon from '@material-ui/icons/PieChart';

import { ReduxActionAppTab } from '../../Redux/Actions/App';
import Header from './Header';
import Footer from './Footer';

import './index.css';

const Layout = (props) => {
    const { children } = props;
    const dispatch = useDispatch();
    const tabSelector = (tab) => (event) => dispatch(ReduxActionAppTab(tab));

    return (
        <React.Fragment>
            <Header />
            <Container classes={{ root: 'root-container' }} maxWidth="false">
                <Drawer
                    classes={{
                        root: 'container-grid-item-left',
                        paper: 'container-grid-item-left container-grid-item-left-margin',
                    }}
                    variant="permanent"
                >
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <AdbIcon />
                            </ListItemIcon>
                            <ListItemText primary="누에보" />
                        </ListItem>
                        <Link to="/assets" onClick={tabSelector(1)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PieChartIcon />
                                </ListItemIcon>
                                <ListItemText primary="자산관리" />
                            </ListItem>
                        </Link>
                        <Link to="/friends" onClick={tabSelector(2)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="친구" />
                            </ListItem>
                        </Link>
                        <Link to="/clubs" onClick={tabSelector(3)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <GroupWorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="투자그룹" />
                            </ListItem>
                        </Link>
                        <Link to="/advisors" onClick={tabSelector(4)}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PagesIcon />
                                </ListItemIcon>
                                <ListItemText primary="투자어드바이저" />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                <Grid container direction="row" justify="space-between" alignItems="flex-start">
                    <Grid item classes={{ item: 'container-grid-item-left' }}></Grid>
                    <Grid item classes={{ item: 'container-grid-item-center' }}>
                        {children}
                    </Grid>
                    <Grid item classes={{ item: 'container-grid-item-right' }}>
                        오른쪽 사이드
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
