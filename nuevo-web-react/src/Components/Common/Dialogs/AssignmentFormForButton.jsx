import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AssignmentForm from '../Forms/AssignmentForm';

// 다이얼로그를 포함하는 회원가입 버튼
// 버튼을 클릭하면 다이얼로그를 화면에 띄우게 됨
// 리액트에서는 그냥 아래 메소드를 JSX에서 호출하면 됨
// 다만 버튼 스크립트는 children으로 전달해주어야 함
const DialogAssignmentFormForButton = (props) => {
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
                <DialogTitle>{'회원가입'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <AssignmentForm close={handleClose} />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <div style={styles} onClick={handleClickOpen}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default DialogAssignmentFormForButton;
