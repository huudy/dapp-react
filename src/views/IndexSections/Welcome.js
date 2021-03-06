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
import { Link } from 'react-router-dom';
// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

export default function Welcome() {
	return (
		<div className="section section-signup">
			<Container>
				<div className="squares square-1" />
				<div className="squares square-2" />
				{/* <div className="squares square-3" /> */}
				<div className="squares square-4" />
				<Row className="row-grid justify-content-between align-items-center">
					<Col lg="6">
						<h3 className="display-3 text-white">
							Starting to explore what can be build on blockchain{' '}
						</h3>
						<p className="text-white mb-3">Checkout the example apps below</p>
						<div className="btn-wrapper">
							<Button color="primary" to="register" tag={Link}>
								Show apps
							</Button>
						</div>
					</Col>
					<Col className="mb-lg-auto" lg="6">
						<img
							alt="..."
							className="img-fluid"
							src={require('assets/svg/explore.svg').default}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
