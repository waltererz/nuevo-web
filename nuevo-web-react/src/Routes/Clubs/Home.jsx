import React from 'react';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Home = () => {
    ReplaceTitle('투자클럽');

    return (
        <React.Fragment>
            <div className="root-container-content">
                투자성향이 비슷한 사람들과 함께 투자하세요.
            </div>
        </React.Fragment>
    );
};

export default Home;
