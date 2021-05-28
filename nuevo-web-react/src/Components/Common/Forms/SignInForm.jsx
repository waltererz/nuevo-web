import React from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { APIAuthSignIn } from '../../API/Auth';
import { ReduxActionSignIn } from '../../../Redux/Actions/Auth';

const SignInForm = (props) => {
    const { close } = props;

    const dispatch = useDispatch();
    const storeAuthData = (data) => dispatch(ReduxActionSignIn(data));

    const submit = () => {
        const email = document.querySelector('#signin-text-email').value;
        const password = document.querySelector('#signin-text-password').value;

        APIAuthSignIn(email, password).then((response) => {
            if (response) {
                storeAuthData(response);
                window.location.href = '/';
            } else {
                alert('아이디 또는 패스워드 오류입니다.');
            }
        });
    };

    return (
        <React.Fragment>
            <form id="dialog-signin-form">
                <div className="item">
                    <TextField id="signin-text-email" label="이메일주소" fullWidth />
                </div>
                <div className="item" style={{ marginTop: '20px' }}>
                    <TextField
                        id="signin-text-password"
                        type="password"
                        label="패스워드"
                        fullWidth
                    />
                </div>
                <div className="button-box">
                    <Button variant="outlined" onClick={submit}>
                        로그인
                    </Button>
                    <Button color="primary" onClick={close}>
                        취소
                    </Button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default SignInForm;
