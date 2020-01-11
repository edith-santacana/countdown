import React from 'react';
import logo from "../img/logo.png";
import { Grid } from 'semantic-ui-react';
import Countdown from '../features/countdown/Countdown';

function App() {
  return (
    <div className="App">
      <Grid >

          <Grid.Row centered>
            <Countdown />
          </Grid.Row>

          <Grid.Row >
            <img src={logo} alt="Logo" id="Logo"/>
          </Grid.Row>

        </Grid>
    </div>
  );
}

export default App;
