import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../Layout';
import Theme from '../Theme';

import Home from '../../Routes/Home';
import Assets from '../../Routes/Assets';
import Friends from '../../Routes/Friends';
import Clubs from '../../Routes/Clubs';
import Advisors from '../../Routes/Advisors';

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/assets" component={Assets} />
                    <Route path="/friends" component={Friends} />
                    <Route path="/clubs" component={Clubs} />
                    <Route path="/advisors" component={Advisors} />
                </Switch>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
