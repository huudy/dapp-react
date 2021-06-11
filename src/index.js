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
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../node_modules/react-notifications-component/dist/scss/notification.scss';
import ReactNotification from 'react-notifications-component';

import 'assets/css/nucleo-icons.css';
import 'assets/scss/blk-design-system-react.scss?v=1.2.0';
import 'assets/demo/demo.css';

import Index from 'views/Index.js';
import VotePage from 'views/examples/VotePage';
import ScrollToTop from 'react-router-scroll-top';
import UploadPage from 'views/examples/UploadPage';

ReactDOM.render(
	<HashRouter>
		<ReactNotification />
		<ScrollToTop>
			<Switch>
				<Route path="/main" render={(props) => <Index {...props} />} />
				<Route path="/vote" render={(props) => <VotePage {...props} />} />
				<Route path="/upload" render={(props) => <UploadPage {...props} />} />
				<Redirect from="/" to="/main" />
			</Switch>
		</ScrollToTop>
	</HashRouter>,
	document.getElementById('root')
);
