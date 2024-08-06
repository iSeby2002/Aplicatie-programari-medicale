import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const CustomizedSnackbars = ({ open, severity, message, onClose }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        if (onClose) {
            onClose(event, reason);
        }
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default CustomizedSnackbars;