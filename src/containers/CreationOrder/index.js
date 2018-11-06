import React from 'react';
import Button from '@material-ui/core/Button';
import OrdenModal from '../../components/OrdenModal'
import { connect } from 'react-redux';
import { handleModal } from "../../store/reducers/modal";
import { bindActionCreators } from 'redux';
import loadScript from "../../utils/loadGoogleMapsScript";
import SuccessMessage from '../../components/SuccessMessage';
import './styles.css';

class CreationOrder extends React.Component {
    componentDidMount() {
        loadScript().then(() => {
        }).catch(e => {
            console.log(e);
        });
    }
    render() {
        const message = 'Your order has been successfully registered, if it does not arrive in less than 40 minutes, ' +
            'Omar will pay for your order. Arrival time: ' + this.props.eta;
        return (
            <div className={'container-root'}>
                <h1>Creation order</h1>
                <h5>Welcome to our new and innovative system to order food.</h5>
                <Button variant="contained" color="primary" onClick={this.props.actions.handleModal}>
                    Add Order
                </Button>
                <OrdenModal show={this.props.show} handleClose={this.props.actions.handleModal}/>
                {this.props.eta &&
                    <SuccessMessage message={message}/>
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        show: state.modal.show,
        eta: state.saga.eta,
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