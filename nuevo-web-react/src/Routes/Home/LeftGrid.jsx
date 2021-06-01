import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PagesIcon from '@material-ui/icons/Pages';
import PieChartIcon from '@material-ui/icons/PieChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';

const HomeLeftGrid = () => {
    const dispatch = useDispatch();
    const routeSelector = (route) => (event) => dispatch(ReduxActionAppRoute(route));

    return (
        <List component="nav">
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <AccountCircleIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="사용자이름" />
            </ListItem>
            <Link to="/assets" onClick={routeSelector(CONSTANT.MAINROUTE.ASSETS)}>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <PieChartIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="자산관리" />
                </ListItem>
            </Link>
            <Link to="/friends" onClick={routeSelector(CONSTANT.MAINROUTE.FRIENDS)}>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <PeopleAltIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="친구" />
                </ListItem>
            </Link>
            <Link to="/clubs" onClick={routeSelector(CONSTANT.MAINROUTE.CLUBS)}>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <GroupWorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="투자그룹" />
                </ListItem>
            </Link>
            <Link to="/advisors" onClick={routeSelector(CONSTANT.MAINROUTE.ADVISORS)}>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <PagesIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="투자어드바이저" />
                </ListItem>
            </Link>
            <Link to="/">
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalActivityIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="저장됨" />
                </ListItem>
            </Link>
            <Link to="/">
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderSpecialIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="즐겨찾기" />
                </ListItem>
            </Link>
            <Link to="/">
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <QuestionAnswerIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="메시지" />
                </ListItem>
            </Link>
        </List>
    );
};

export default HomeLeftGrid;
