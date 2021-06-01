/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter,
	BrowserRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import 'assets/css/nucleo-icons.css';
import 'assets/scss/blk-design-system-react.scss?v=1.2.0';
import 'assets/demo/demo.css';

import Index from 'views/Index.js';
import LandingPage from 'views/examples/LandingPage.js';
import RegisterPage from 'views/examples/RegisterPage.js';
import ProfilePage from 'views/examples/ProfilePage.js';
import VotePage from 'views/examples/VotePage';
import ScrollToTop from 'react-router-scroll-top';

ReactDOM.render(
	<HashRouter>
		<ScrollToTop>
			<Switch>
				<Route path="/main" render={(props) => <Index {...props} />} />
				<Route path="/landing" render={(props) => <LandingPage {...props} />} />
				<Route
					path="/register"
					render={(props) => <RegisterPage {...props} />}
				/>
				<Route path="/profile" render={(props) => <ProfilePage {...props} />} />
				<Route path="/vote" render={(props) => <VotePage {...props} />} />
				<Redirect from="/" to="/main" />
			</Switch>
		</ScrollToTop>
	</HashRouter>,
	document.getElementById('root')
);
