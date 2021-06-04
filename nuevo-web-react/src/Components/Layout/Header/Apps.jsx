import { useSelector, useDispatch } from 'react-redux';
import ClickAwayListener from 'react-click-away-listener';

import Fade from '@material-ui/core/Fade';

import Apps from '../../Common/Apps';
import { ReduxActionLayoutHeaderApps } from '../../../Redux/Actions/Layout';

const HeaderApps = () => {
    const { headerApps } = useSelector((state) => ({
        headerApps: state.layout.headerApps,
    }));

    const dispatch = useDispatch();
    const closeHeaderApps = () => dispatch(ReduxActionLayoutHeaderApps(false));

    const handleClickAway = () => {
        if (headerApps) {
            closeHeaderApps();
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
