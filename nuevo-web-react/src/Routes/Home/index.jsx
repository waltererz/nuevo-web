import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';
import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Home = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.HOME));

    if (route != CONSTANT.MAINROUTE.HOME) {
        routeSelector();
    }

    ReplaceTitle('첫 페이지');

    return (
        <React.Fragment>
            <div className="root-container-content">
                누에보 프로젝트가 만드는 신개념 투자정보 소셜미디어의 첫 페이지입니다.
            </div>
        </React.Fragment>
    );
};

export default Home;
