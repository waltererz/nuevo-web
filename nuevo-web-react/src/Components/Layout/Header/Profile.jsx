import { useSelector, useDispatch } from 'react-redux';
import ClickAwayListener from 'react-click-away-listener';

import Fade from '@material-ui/core/Fade';

import Profile from '../../Common/Profile';
import { ReduxActionLayoutHeaderProfile } from '../../../Redux/Actions/Layout';

const HeaderProfile = () => {
    const { headerProfile } = useSelector((state) => ({
        headerProfile: state.layout.headerProfile,
    }));

    const dispatch = useDispatch();
    const closeHeaderProfile = () => dispatch(ReduxActionLayoutHeaderProfile(false));

    const handleClickAway = () => {
        if (headerProfile) {
            closeHeaderProfile();
        }
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Fade in={headerProfile}>
                <div className="header-profile">
                    <Profile />
                </div>
            </Fade>
        </ClickAwayListener>
    );
};

export default HeaderProfile;
