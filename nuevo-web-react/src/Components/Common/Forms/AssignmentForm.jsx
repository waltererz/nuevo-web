import React from 'react';

import Button from '@material-ui/core/Button';

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
