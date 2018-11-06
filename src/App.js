import React, {Component} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CreationOrder from './containers/CreationOrder'

class App extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} className={'center'}>
                        <CreationOrder />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
