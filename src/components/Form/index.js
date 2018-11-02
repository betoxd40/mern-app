import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PlacesAutocomplete from 'react-places-autocomplete';
import styles from './styles.css';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleChange, handleCheckbox, changeAddress } from "../../store/reducers/order";

class Form extends React.Component {
    state = {
        addressTest : '',
    };
    handleChange = address => {
        this.setState({ addressTest: address });
    };

    handleSelect = address => {
        this.setState({ addressTest: address });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    render() {
        const renderCheckboxes =
            this.props.dummyMeals.map( (meal, i) =>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={meal.checked} onChange={() => this.props.actions.handleCheckbox(i)} value={meal.name} />
                        }
                        label={`Name: ${meal.name} Price: ${meal.price}`}
                    />
                </Grid>
            );

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
                            fullWidth={true}
                            onChange= { event => this.props.actions.handleChange( { name: 'name', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            fullWidth={true}
                            onChange= { event => this.props.actions.handleChange( { name: 'lastName', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id="number"
                            placeholder="Number"
                            value={number}
                            fullWidth={true}
                            onChange= { event => this.props.actions.handleChange( { name: 'number', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id="email"
                            placeholder="Email"
                            value={email}
                            fullWidth={true}
                            onChange= { event => this.props.actions.handleChange( { name: 'email', value: event.target.value, } ) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <PlacesAutocomplete
                            value={this.state.addressTest}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <Input
                                        {...getInputProps({
                                            placeholder: 'Address ...',
                                            className: 'location-search-input',
                                        })}
                                        fullWidth={true}
                                    />
                                    <div className={styles.dropdown}>
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
                                                    className={styles.dropdown}
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
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            handleChange,
            handleCheckbox,
            changeAddress,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);