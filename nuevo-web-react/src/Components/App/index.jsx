import { Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../Layout';
import Theme from '../Theme';

import Home from '../../Routes/Home';
import Assets from '../../Routes/Assets';
import Friends from '../../Routes/Friends';
import Clubs from '../../Routes/Clubs';
import Advisors from '../../Routes/Advisors';

import { APIAuthCheck, APIAuthSignOut } from '../API/Auth';

const App = () => {
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
