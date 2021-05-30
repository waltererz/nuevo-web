import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../Layout';
import Theme from '../Theme';
import { ReduxActionAppInit } from '../../Redux/Actions/App';
import { ReduxActionSignIn } from '../../Redux/Actions/Auth';
import { APIAuthCheck } from '../../Components/API/Auth';

import Home from '../../Routes/Home';
import Assets from '../../Routes/Assets';
import Friends from '../../Routes/Friends';
import Clubs from '../../Routes/Clubs';
import Advisors from '../../Routes/Advisors';

const App = () => {
    const { init, authData } = useSelector((state) => ({
        init: state.app.init,
        authData: state.auth.authData,
    }));

    const dispatch = useDispatch();
    const storeInit = () => dispatch(ReduxActionAppInit());
    const storeAuthData = (data) => dispatch(ReduxActionSignIn(data));

    (async () => {
        if (await APIAuthCheck()) {
            console.log('로그인 상태입니다.');
        } else {
            console.log('로그아웃 상태입니다.');
        }
    })();

    return (
        <ThemeProvider theme={Theme}>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/assets" component={Assets} />
                <Route exact path="/friends" component={Friends} />
                <Route exact path="/clubs" component={Clubs} />
                <Route exact path="/advisors" component={Advisors} />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
