import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Profile = () => {
    const styles = {
        ListItem: {
            paddingLeft: '7px',
            paddingRight: '7px',
        },
        Avatar: {
            backgroundColor: '#ececec',
            color: '#000000',
        },
        SVGIcon: {
            fontSize: '1.4rem',
        },
        Divider: {
            marginTop: '7px',
            marginBottom: '7px',
        },
    };

    const actionSignOut = () => {
        window.location.href = '/signout.php';
    };

    return (
        <React.Fragment>
            <div class="profile">
                <List>
                    <ListItem button style={styles.ListItem}>
                        <ListItemAvatar>
                            <Avatar style={styles.Avatar}>
                                <AccountCircleIcon style={styles.SVGIcon} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="사용자 이름" secondary="내 프로필 보기" />
                    </ListItem>
                    <Divider light style={styles.Divider} />
                    <ListItem button style={styles.ListItem} onClick={actionSignOut}>
                        <ListItemAvatar>
                            <Avatar style={styles.Avatar}>
                                <ExitToAppIcon style={styles.SVGIcon} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="로그아웃" />
                    </ListItem>
                </List>
            </div>
        </React.Fragment>
    );
};

export default Profile;
