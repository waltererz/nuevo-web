import React from 'react';

import Button from '@material-ui/core/Button';

// 회원가입 양식
// 이 양식이 사이트 전체에서 사용됨 (다이얼로그, 싱글페이지 등)
const AssignmentForm = (props) => {
    const { close } = props;

    return (
        <React.Fragment>
            회원가입 양식
            <div className="button-box">
                <Button color="primary" onClick={close}>
                    취소
                </Button>
            </div>
        </React.Fragment>
    );
};

export default AssignmentForm;
