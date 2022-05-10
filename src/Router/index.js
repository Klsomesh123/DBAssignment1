import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import LandingPage from '../Components/LandingPage';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/landingpage"><LandingPage /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;