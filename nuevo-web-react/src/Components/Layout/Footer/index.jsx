import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
                        <div style={style} onClick={signout}>
                            <BottomNavigationAction
                                showLabel={true}
                                value={10}
                                label="로그아웃"
                                icon={<ExitToAppIcon />}
                            />
                        </div>
                    </React.Fragment>
                );
            } else {
                return (
                    <React.Fragment>
                        <DialogSignInFormForButton styles={style}>
                            <BottomNavigationAction
                                showLabel={true}
                                value={10}
                                label="로그인"
                                icon={<AccountCircleIcon />}
                            />
                        </DialogSignInFormForButton>
                        <DialogAssignmentFormForButton styles={style}>
                            <BottomNavigationAction
                                showLabel={true}
                                value={11}
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
            <footer>누에보 프로젝트는 세상 모든 것에 투자하는 플랫폼을 만듭니다.</footer>
            <MobileBottomNavigation />
        </React.Fragment>
    );
};

export default Footer;
