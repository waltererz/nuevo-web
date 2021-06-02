import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';
import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Assets = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.ASSETS));

    if (route != CONSTANT.MAINROUTE.ASSETS) {
        routeSelector();
    }

    ReplaceTitle('투자자산관리');

    return (
        <React.Fragment>
            <div className="root-container-content">자신의 투자자산을 효율적으로 관리하세요.</div>
        </React.Fragment>
    );
};

export default Assets;
