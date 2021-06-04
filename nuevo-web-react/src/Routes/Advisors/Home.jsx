import React from 'react';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Home = () => {
    ReplaceTitle('투자어드바이저');

    return (
        <React.Fragment>
            <div className="root-container-content">
                자신에게 딱 맞는 투자성향을 가진 투자전문가를 찾아보세요.
            </div>
        </React.Fragment>
    );
};

export default Home;
