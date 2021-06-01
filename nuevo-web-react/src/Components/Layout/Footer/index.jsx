import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppsIcon from '@material-ui/icons/Apps';
import CreateIcon from '@material-ui/icons/Create';

import DialogSignInFormForButton from '../../Common/Dialogs/SignInFormForButton';
import DialogAssignmentFormForButton from '../../Common/Dialogs/AssignmentFormForButton';

import CONSTANT from '../../Common/Constants';

const Footer = () => {
    const MobileBottomNavigation = () => {
        const mediaQueryForSlide = useMediaQuery('(max-width: 1100px)');
        const style = {
            display: 'inline-block',
            width: 'calc(100% / 2)',
            verticalAlign: 'middle',
            textAlign: 'center',
        };

        let display = {};

        if (!mediaQueryForSlide) {
            display = { display: 'none' };
        }

        const signout = () => {
            window.location = '/signout.php';
        };

        const FetchFooterIcon = () => {
            if (CONSTANT.AUTH) {
                return (
                    <React.Fragment>
                        <div style={style}>
                            <BottomNavigationAction
                                showLabel={false}
                                value={100}
                                label="전체메뉴"
                                icon={<AppsIcon />}
                            />
                        </div>
                        <div style={style}>
                            <BottomNavigationAction
                                showLabel={false}
                                value={102}
                                label="클라우드 쓰기"
                                icon={<CreateIcon />}
                            />
                        </div>
                        <div style={style}>
                            <BottomNavigationAction
                                showLabel={false}
                                value={101}
                                label="계정"
                                icon={<AccountCircleIcon />}
                            />
                        </div>
                    </React.Fragment>
                );
            } else {
                return (
                    <React.Fragment>
                        <div style={style}>
                            <BottomNavigationAction
                                showLabel={false}
                                value={100}
                                label="전체메뉴"
                                icon={<AppsIcon />}
                            />
                        </div>
                        <DialogSignInFormForButton styles={style}>
                            <BottomNavigationAction
                                showLabel={false}
                                value={101}
                                label="로그인"
                                icon={<AccountCircleIcon />}
                            />
                        </DialogSignInFormForButton>
                        <DialogAssignmentFormForButton styles={style}>
                            <BottomNavigationAction
                                showLabel={false}
                                value={102}
                                label="회원가입"
                                icon={<AssignmentIcon />}
                            />
                        </DialogAssignmentFormForButton>
                    </React.Fragment>
                );
            }
        };

        return (
            <BottomNavigation style={display}>
                <FetchFooterIcon />
            </BottomNavigation>
        );
    };

    return (
        <React.Fragment>
            <MobileBottomNavigation />
        </React.Fragment>
    );
};

export default Footer;
