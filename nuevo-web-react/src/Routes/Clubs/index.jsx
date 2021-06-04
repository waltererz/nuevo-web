import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';

import Home from './Home';

const Clubs = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.CLUBS));

    if (route != CONSTANT.MAINROUTE.CLUBS) {
        routeSelector();
    }

    return (
        <Switch>
            <Route exact path="/clubs" component={Home} />
        </Switch>
    );
};

export default Clubs;
