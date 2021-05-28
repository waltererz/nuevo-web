import React from 'react';
import { useSelector } from 'react-redux';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Home = () => {
    ReplaceTitle('첫 페이지');
    return (
        <React.Fragment>
            <div className="root-container-content">
                누에보 프로젝트가 만드는 신개념 투자정보 소셜미디어의 첫 페이지입니다.
            </div>
        </React.Fragment>
    );
};

export default Home;
