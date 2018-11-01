import React, {Component} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Form from './components/Form'

class App extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} className={'center'}>
                        <h1>Creation order</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Form/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
