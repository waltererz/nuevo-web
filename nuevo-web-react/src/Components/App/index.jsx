import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../Layout';
import { theme } from '../Styles';

import Home from '../../Routes/Home';
import Assets from '../../Routes/Assets';
import Friends from '../../Routes/Friends';
import Clubs from '../../Routes/Clubs';
import Advisors from '../../Routes/Advisors';

// 최상위 페이지별 컴포넌트를 지정해줌
// 하위 경로는 각각의 컴포넌트에서 지정함
const App = () => {
    return (
        <ThemeProvider theme={theme}>
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
