import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Form from "../../containers/Form";

const stylesMaterial = theme => ({
    paper: {
        position: 'absolute',
        width: '60%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 8,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        overflow: 'overlay',
        height: '85%',
    },
});

class OrdenModal extends React.Component {

    static propTypes = {
        show: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
    };

    render() {
        const {
            classes,
            show,
            handleClose } = this.props;
        return (
            <Modal
                open={show}
                onClose={handleClose} >
                <div className={classes.paper}>
                    <Form
                        handleClose={handleClose}/>
                </div>
            </Modal>
        )
    }
}

const ModalWrapped = withStyles(stylesMaterial)(OrdenModal);

export default ModalWrapped;