import React from 'react';
import Button from '@material-ui/core/Button';
import OrdenModal from '../OrdenModal'
import { connect } from 'react-redux';
import { handleModal } from "../../store/reducers/modal";
import { bindActionCreators } from 'redux';
import loadScript from "../../utils/loadGoogleMapsScript";
import './styles.css';

class CreationOrder extends React.Component {
    componentDidMount() {
        loadScript().then(() => {
        }).catch(e => {
            console.log(e);
        });
    }
    render() {
        return (
            <div className={'container-root'}>
                <h1>Creation order</h1>
                <h5>Welcome to our new and innovative system to order food.</h5>
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