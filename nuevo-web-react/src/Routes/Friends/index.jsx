import React from 'react';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Friends = () => {
    ReplaceTitle('친구');
    return (
        <React.Fragment>
            <div className="root-container-content">
                친구들과 함께 재미있는 투자활동을 시작하세요.
            </div>
        </React.Fragment>
    );
};

export default Friends;
