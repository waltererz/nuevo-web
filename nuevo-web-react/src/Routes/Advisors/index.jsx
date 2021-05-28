import React from 'react';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Advisors = () => {
    ReplaceTitle('투자어드바이저');
    return (
        <React.Fragment>
            <div className="root-container-content">
                전문 투자정보를 확인할 수 있는 페이지입니다.
            </div>
        </React.Fragment>
    );
};

export default Advisors;
