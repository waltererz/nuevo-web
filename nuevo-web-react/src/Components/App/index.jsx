import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../Layout';
import Theme from '../Theme';
import { ReduxActionSignIn } from '../../Redux/Actions/Auth';
import { APIAuthCheck } from '../../Components/API/Auth';

import Home from '../../Routes/Home';
import Assets from '../../Routes/Assets';
import Friends from '../../Routes/Friends';
import Clubs from '../../Routes/Clubs';
import Advisors from '../../Routes/Advisors';

const App = () => {
    const { personData } = useSelector((state) => ({
        personData: state.auth.personData,
    }));

    const dispatch = useDispatch();
    const storeAuthData = (data) => dispatch(ReduxActionSignIn(data));

    useEffect(() => {
        APIAuthCheck().then((response) => {
            if (personData != false) {
                if (personData.UUID != response.UUID) {
                    storeAuthData(response);
                }
            } else {
                storeAuthData(response);
            }
        });
    }, [personData]);

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
