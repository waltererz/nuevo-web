import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';

import Home from './Home';

const Friends = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.FRIENDS));

    if (route != CONSTANT.MAINROUTE.FRIENDS) {
        routeSelector();
    }

    return (
        <Switch>
            <Route exact path="/friends" component={Home} />
        </Switch>
    );
};

export default Friends;
