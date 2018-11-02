import React from 'react';
import Button from '@material-ui/core/Button';
import OrdenModal from '../OrdenModal'
import { connect } from 'react-redux';
import { handleModal } from "../../store/reducers/modal";
import { bindActionCreators } from 'redux';
import loadScript from "../../utils/loadGoogleMapsScript";

class CreationOrder extends React.Component {
    state = {};
    componentDidMount() {
        // first load the script into html
        loadScript().then(function() {
            console.log('SUCCESS');
            // Where do I go from here?
        }).catch(e => {
            console.log(e);
        });
    }
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