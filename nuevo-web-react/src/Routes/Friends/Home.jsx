import React from 'react';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Home = () => {
    ReplaceTitle('친구');

    return (
        <React.Fragment>
            <div className="root-container-content">친구와 함께 투자하세요.</div>
        </React.Fragment>
    );
};

export default Home;
