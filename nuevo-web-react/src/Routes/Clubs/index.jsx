import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';
import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Clubs = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.CLUBS));

    if (route != CONSTANT.MAINROUTE.CLUBS) {
        routeSelector();
    }

    ReplaceTitle('투자클럽');

    return (
        <React.Fragment>
            <div className="root-container-content">
                다른 투자자들과 클럽을 형성해 재미있는 투자를 시작하세요.
            </div>
        </React.Fragment>
    );
};

export default Clubs;
