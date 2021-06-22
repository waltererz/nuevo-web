import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SignInForm from '../Forms/SignInForm';

// 다이얼로그를 포함하는 로그인 버튼
// 사용자가 원하는 버튼을 로그인 버튼으로 활용할 수 있도록 children 변수를 사용함
const DialogSignInFormForButton = (props) => {
    const { children, styles } = props;
    const [open, setOpen] = React.useState(false);
    const fullscreen = useMediaQuery('(max-width: 900px)');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog fullScreen={fullscreen} open={open} onClose={handleClose}>
                <DialogTitle>{'회원 로그인'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <SignInForm close={handleClose} />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <div style={styles} onClick={handleClickOpen}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default DialogSignInFormForButton;
