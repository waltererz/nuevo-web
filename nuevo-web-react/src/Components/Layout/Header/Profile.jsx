import { useSelector, useDispatch } from 'react-redux';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';

import Profile from '../../Common/Profile';
import { ReduxActionLayoutHeaderProfile } from '../../../Redux/Actions/Layout';
import { ReduxActionEventHeaderProfileClicked } from '../../../Redux/Actions/Event';

const HeaderProfile = () => {
    const { headerProfile, headerProfileClicked } = useSelector((state) => ({
        headerProfile: state.layout.headerProfile,
        headerProfileClicked: state.event.headerProfileClicked,
    }));

    const dispatch = useDispatch();
    const closeHeaderProfile = () => dispatch(ReduxActionLayoutHeaderProfile(false));
    const toggleHeaderProfileClicked = (state) =>
        dispatch(ReduxActionEventHeaderProfileClicked(state));

    const handleClickAway = () => {
        if (headerProfile) {
            if (headerProfileClicked) {
                closeHeaderProfile();
                toggleHeaderProfileClicked(false);
            } else {
                toggleHeaderProfileClicked(true);
            }
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
