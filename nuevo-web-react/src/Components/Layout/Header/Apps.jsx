import { useSelector, useDispatch } from 'react-redux';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';

import Apps from '../../Common/Apps';
import { ReduxActionLayoutHeaderApps } from '../../../Redux/Actions/Layout';
import { ReduxActionEventHeaderAppsClicked } from '../../../Redux/Actions/Event';

const HeaderApps = () => {
    const { headerApps, headerAppsClicked } = useSelector((state) => ({
        headerApps: state.layout.headerApps,
        headerAppsClicked: state.event.headerAppsClicked,
    }));

    const dispatch = useDispatch();
    const closeHeaderApps = () => dispatch(ReduxActionLayoutHeaderApps(false));
    const toggleHeaderAppsClicked = (state) => dispatch(ReduxActionEventHeaderAppsClicked(state));

    const handleClickAway = () => {
        if (headerApps) {
            if (headerAppsClicked) {
                closeHeaderApps();
                toggleHeaderAppsClicked(false);
            } else {
                toggleHeaderAppsClicked(true);
            }
        }
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Fade in={headerApps}>
                <div className="header-apps">
                    <Apps />
                </div>
            </Fade>
        </ClickAwayListener>
    );
};

export default HeaderApps;
