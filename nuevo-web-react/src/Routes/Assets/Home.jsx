import React from 'react';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Home = () => {
    ReplaceTitle('자산관리');

    return (
        <React.Fragment>
            <div className="root-container-content">내 돈은 내가 직접 관리한다!</div>
        </React.Fragment>
    );
};

export default Home;
