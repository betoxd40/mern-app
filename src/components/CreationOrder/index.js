import React from 'react';
import Button from '@material-ui/core/Button';
import OrdenModal from '../OrdenModal'
import { connect } from 'react-redux';
import { handleModal } from "../../store/reducers/modal";
import { bindActionCreators } from 'redux';

class CreationOrder extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.props.actions.handleModal}>
                    Add Order
                </Button>
                <OrdenModal show={this.props.show} handleClose={this.props.actions.handleModal}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        show: state.modal.show,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            handleModal,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreationOrder);