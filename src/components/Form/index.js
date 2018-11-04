import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import PlacesAutocomplete from 'react-places-autocomplete';
import './styles.css';
import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    handleChange,
    handleCheckbox,
    changeAddress,
    changeTotal,
    changeLocation,
    handleMeals } from '../../store/reducers/order';

class Form extends React.Component {
    state = {
        nameRequired : false,
        lastNameRequired : false,
        numberRequired : false,
        emailRequired : false,
        addressRequired : false,
        showNoSelectedCheckboxError : false,
    };

    handleSelect = address => {
        this.props.actions.changeAddress(address);
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.actions.changeLocation(latLng))
            .catch(error => console.error('Error', error));
    };

    handleCheckboxChange = (index, price, checked, name) => {
        this.props.actions.handleCheckbox(index);
        if(checked) {
            this.props.actions.changeTotal(-price);
        } else {
            this.props.actions.changeTotal(price);
        }
        this.props.actions.handleMeals({index, price, checked, name});
    };

    showRequired = () => {
        if ( this.props.name === '' ) {
            this.setState({ nameRequired: true })
        } else {
            this.setState({ nameRequired: false })
        };
        if ( this.props.lastName === '' ) {
            this.setState({ lastNameRequired: true })
        } else {
            this.setState({ lastNameRequired: false })
        };
        if ( this.props.number === '' ) {
            this.setState({ numberRequired: true })
        } else {
            this.setState({ numberRequired: false })
        };
        if ( this.props.email === '' ) {
            this.setState({ emailRequired: true })
        } else {
            this.setState({ emailRequired: false })
        };
        if ( this.props.address === '' ) {
            this.setState({ addressRequired: true })
        } else {
            this.setState({ addressRequired: false })
        };
        if ( this.props.totalCost === 0 ) {
            this.setState({ showNoSelectedCheckboxError: true })
        } else {
            this.setState({ showNoSelectedCheckboxError: false })
        };
    };
    checkRequired = () => {
        return this.props.email !== '' && this.props.name !== '' && this.props.lastName !== '' &&
            this.props.address !== '' && this.props.number !== '' && this.props.totalCost !== 0;

    };
    buildOrder = () => {
        return {
            personalInfo: {
                name: this.props.name,
                lastName: this.props.lastName,
                number: this.props.number,
            },
            meals: this.props.meals,
            totalCost: this.props.totalCost,
            email: this.props.email,
            address: this.props.address,
            location: this.props.location,
        };
    };
    handleSubmit = () => {
        this.showRequired();
        if(this.checkRequired()) return this.props.orderPost(this.buildOrder());
    };
    render() {
        const renderCheckboxes =
            this.props.dummyMeals.map( (meal, i) =>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                key={i}
                                checked={meal.checked}
                                onChange={() => this.handleCheckboxChange(i, meal.price, meal.checked, meal.name)}
                                value={meal.name} />
                        }
                        label={`Name: ${meal.name} - Price: ${meal.price} $`}
                    />
                </Grid>
            );

        const {
            name,
            lastName,
            number,
            totalCost,
            email,
            address,
            loading,
        } = this.props;

        return (
            <form>
                <Grid container spacing={32}>
                    <Grid item xs={12}>
                        <h3>Personal Info</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            error={this.state.nameRequired}
                            id="name"
                            placeholder="Name"
                            value={name}
                            fullWidth={true}
                            required
                            onChange= { event => this.props.actions.handleChange( { name: 'name', value: event.target.value, } ) }
                        />
                        {}
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            error={this.state.lastNameRequired}
                            id="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            fullWidth={true}
                            required
                            onChange= { event => this.props.actions.handleChange( { name: 'lastName', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            error={this.state.numberRequired}
                            id="number"
                            placeholder="Number"
                            value={number}
                            fullWidth={true}
                            required
                            onChange= { event => this.props.actions.handleChange( { name: 'number', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            error={this.state.emailRequired}
                            id="email"
                            placeholder="Email"
                            value={email}
                            fullWidth={true}
                            required
                            onChange= { event => this.props.actions.handleChange( { name: 'email', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <PlacesAutocomplete
                            value={address}
                            onChange={ address => this.props.actions.changeAddress(address)}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <Input
                                        {...getInputProps({
                                            placeholder: 'Address ...',
                                            className: 'location-search-input',
                                        })}
                                        error={this.state.addressRequired}
                                        fullWidth={true}
                                        required
                                    />
                                    <div>
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                        style,
                                                    })}
                                                    className={'dropdown'}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={32}>
                    <Grid item xs={12}>
                        <h3>Specials of the day!</h3>
                    </Grid>
                    {renderCheckboxes}
                </Grid>
                <Grid container spacing={32}>
                    <Grid item xs={12}>
                        <h3>TOTAL: {totalCost}</h3>
                        {this.state.showNoSelectedCheckboxError &&
                        <span className={'error-text'}>
                            Please select some delight from our menu
                        </span>}
                    </Grid>
                </Grid>
                <Grid container spacing={32}>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit} disabled={loading}>
                            Submit
                        </Button>
                        <Button variant="contained" color="secondary" onClick={this.props.handleClose} disabled={loading} className={'btn-secondary'}>
                            Cancel
                        </Button>
                        {loading && <CircularProgress className={'loader'}/>}
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
        dummyMeals: state.order.dummyMeals,
        loading: state.saga.loading,
        eta: state.saga.eta,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            handleChange,
            handleCheckbox,
            changeAddress,
            changeTotal,
            changeLocation,
            handleMeals,
        }, dispatch),
        orderPost: (order) => dispatch({ type: "ORDER_POST_REQUESTED", payload: order })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);