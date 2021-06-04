import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';

import Home from './Home';

const Assets = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.ASSETS));

    if (route != CONSTANT.MAINROUTE.ASSETS) {
        routeSelector();
    }

    return (
        <Switch>
            <Route exact path="/assets" component={Home} />
        </Switch>
    );
};

export default Assets;
