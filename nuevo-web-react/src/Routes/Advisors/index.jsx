import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CONSTANT from '../../Components/Common/Constants';
import { ReduxActionAppRoute } from '../../Redux/Actions/App';

import Home from './Home';
import Search from './Search';

const Advisors = () => {
    const { route } = useSelector((state) => ({
        route: state.app.route,
    }));

    const dispatch = useDispatch();
    const routeSelector = () => dispatch(ReduxActionAppRoute(CONSTANT.MAINROUTE.ADVISORS));

    if (route != CONSTANT.MAINROUTE.ADVISORS) {
        routeSelector();
    }

    return (
        <Switch>
            <Route exact path="/advisors" component={Home} />
            <Route path="/advisors/search" component={Search} />
        </Switch>
    );
};

export default Advisors;
