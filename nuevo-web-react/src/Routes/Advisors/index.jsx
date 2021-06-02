import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';
import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Advisors = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.ADVISORS));

    if (route != CONSTANT.MAINROUTE.ADVISORS) {
        routeSelector();
    }

    ReplaceTitle('투자어드바이저');

    return (
        <React.Fragment>
            <div className="root-container-content">
                전문 투자정보를 확인할 수 있는 페이지입니다.
            </div>
        </React.Fragment>
    );
};

export default Advisors;
