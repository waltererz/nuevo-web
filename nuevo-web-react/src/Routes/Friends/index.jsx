import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';
import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Friends = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.FRIENDS));

    if (route != CONSTANT.MAINROUTE.FRIENDS) {
        routeSelector();
    }

    ReplaceTitle('투자친구');

    return (
        <React.Fragment>
            <div className="root-container-content">
                친구들과 함께 재미있는 투자활동을 시작하세요.
            </div>
        </React.Fragment>
    );
};

export default Friends;
