import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.css';
import Form from "../Form";

const stylesMaterial = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
});

class OrdenModal extends React.Component {
    state = {};

    static propTypes = {
        show: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
    };

    render() {
        const { classes } = this.props;
        return (
            <Modal
                open={this.props.show}
                onClose={this.props.handleClose}>
                <div className={classes.paper}>
                    <Form />
                </div>
            </Modal>
        )
    }
}

const ModalWrapped = withStyles(stylesMaterial)(OrdenModal);

export default ModalWrapped;