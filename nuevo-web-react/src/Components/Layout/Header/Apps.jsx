import { useSelector } from 'react-redux';

import Apps from '../../Common/Apps';

const HeaderApps = () => {
    const { headerApps } = useSelector((state) => ({
        headerApps: state.layout.headerApps,
    }));

    const styles = {
        display: headerApps ? 'block' : 'none',
    };

    return (
        <div className="header-apps" style={styles}>
            <Apps />
        </div>
    );
};

export default HeaderApps;
