import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleChange } from "../../store/reducers/order";

class Form extends React.Component {
    render() {
        const {
            name,
            lastName,
            number,
            meals,
            totalCost,
            email,
            address,
            location
        } = this.props;
        return (
            <form>
                <Grid container spacing={32}>
                    <Grid item xs={12}>
                        <h3>Personal Info</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange= { event => this.props.actions.handleChange( { name: 'name', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange= { event => this.props.actions.handleChange( { name: 'lastName', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id="number"
                            placeholder="Number"
                            value={number}
                            onChange= { event => this.props.actions.handleChange( { name: 'number', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange= { event => this.props.actions.handleChange( { name: 'email', value: event.target.value, } ) }
                        />
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={32}>
                    <Grid item xs={12}>
                        <h3>Choose your meals</h3>
                    </Grid>

                </Grid>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.order.name,
        lastName: state.order.lastName,
        number: state.order.number,
        meals: state.order.meals,
        totalCost: state.order.totalCost,
        email: state.order.email,
        address: state.order.address,
        location: state.order.location,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            handleChange,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);