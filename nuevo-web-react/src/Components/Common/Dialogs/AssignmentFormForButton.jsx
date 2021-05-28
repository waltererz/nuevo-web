import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AssignmentForm from '../Forms/AssignmentForm';

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
