import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import FindInPageIcon from '@material-ui/icons/FindInPage';

const AdvisorsLeftGrid = () => {
    return (
        <React.Fragment>
            <div className="container-grid-item-left-title">투자어드바이저</div>
            <List>
                <Link to="/advisors/search">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <FindInPageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="찾아보기"
                            secondary="내 투자성향에 맞는 전문가 찾기"
                        />
                    </ListItem>
                </Link>
            </List>
        </React.Fragment>
    );
};

export default AdvisorsLeftGrid;
