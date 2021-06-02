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
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	ListGroupItem,
	ListGroup,
	Container,
	Row,
	Col,
} from 'reactstrap';
import Footer from 'components/Footer/Footer.js';

import IndexNavbar from 'components/Navbars/IndexNavbar';
// const { create } = require('ipfs-http-client');

export default function VotePage() {
	// var ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });
	React.useEffect(() => {
		document.body.classList.toggle('landing-page');
		// Specify how to clean up after this effect:
		return function cleanup() {
			document.body.classList.toggle('landing-page');
		};
	}, []);

	return (
		<>
			<IndexNavbar />
			<div className="wrapper">
				<div className="page-header">
					<img
						alt="..."
						className="path"
						src={require('assets/img/blob.png').default}
					/>
					<img
						alt="..."
						className="path2"
						src={require('assets/img/path2.png').default}
					/>
					<img
						alt="..."
						className="shapes triangle"
						src={require('assets/img/triunghiuri.png').default}
					/>
					<img
						alt="..."
						className="shapes wave"
						src={require('assets/img/waves.png').default}
					/>
					<img
						alt="..."
						className="shapes squares"
						src={require('assets/img/patrat.png').default}
					/>
					<img
						alt="..."
						className="shapes circle"
						src={require('assets/img/cercuri.png').default}
					/>
					<div className="content-center">
						<Row className="row-grid justify-content-between align-items-center text-left">
							<Col lg="6" md="6">
								<h1 className="text-white">
									We keep your vote <br />
									<span className="text-white">secured</span>
								</h1>
								<p className="text-white mb-3">
									We make sure Your vote will never dissaper nor it will change,
									or even gets deleted. Most importantly no vote can be fake.
								</p>
								<div className="btn-wrapper mb-3">
									<p className="category text-success d-inline">
										Choose your candidate right now
									</p>
									<a
										className="btn-link"
										color="success"
										href="#candidates"
										size="sm"
									>
										<i className="tim-icons icon-minimal-right" />
									</a>
								</div>
							</Col>
							<Col lg="6" md="6">
								<img
									alt="..."
									// className="img-fluid"
									src={require('assets/svg/vote.svg').default}
								/>
							</Col>
						</Row>
					</div>
				</div>

				<section id="candidates" className="section section-lg section-coins">
					<img
						alt="..."
						className="path"
						src={require('assets/img/path3.png').default}
					/>
					<Container>
						<Row>
							<Col md="4">
								<hr className="line-info" />
								<h1>
									Choose the <span className="text-info">candidate</span>
								</h1>
							</Col>
						</Row>
						<Row>
							<Col md="4">
								<Card className="card-coin card-plain">
									<CardHeader>
										<img
											alt="..."
											className="img-fluid rounded-circle shadow-lg"
											src={require('assets/img/mike.jpg').default}
											style={{ width: '150px' }}
										/>
									</CardHeader>
									<CardBody>
										<Row>
											<Col className="text-center" md="12">
												<h4 className="text-uppercase">Light Coin</h4>
												<span>Plan</span>
												<hr className="line-primary" />
											</Col>
										</Row>
										<Row>
											<ListGroup>
												<ListGroupItem>50 messages</ListGroupItem>
												<ListGroupItem>100 emails</ListGroupItem>
												<ListGroupItem>24/7 Support</ListGroupItem>
											</ListGroup>
										</Row>
									</CardBody>
									<CardFooter className="text-center">
										<Button className="btn-simple" color="primary">
											Get plan
										</Button>
									</CardFooter>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-coin card-plain">
									<CardHeader>
										<img
											alt="..."
											className="img-fluid rounded-circle shadow"
											src={require('assets/img/james.jpg').default}
											style={{ width: '150px' }}
										/>
									</CardHeader>
									<CardBody>
										<Row>
											<Col className="text-center" md="12">
												<h4 className="text-uppercase">Dark Coin</h4>
												<span>Plan</span>
												<hr className="line-success" />
											</Col>
										</Row>
										<Row>
											<ListGroup>
												<ListGroupItem>150 messages</ListGroupItem>
												<ListGroupItem>1000 emails</ListGroupItem>
												<ListGroupItem>24/7 Support</ListGroupItem>
											</ListGroup>
										</Row>
									</CardBody>
									<CardFooter className="text-center">
										<Button className="btn-simple" color="success">
											Get plan
										</Button>
									</CardFooter>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-coin card-plain">
									<CardHeader>
										<img
											alt="..."
											className="img-fluid rounded shadow-lg"
											src={require('assets/img/lora.jpg').default}
											style={{ width: '150px' }}
										/>
									</CardHeader>
									<CardBody>
										<Row>
											<Col className="text-center" md="12">
												<h4 className="text-uppercase">Bright Coin</h4>
												<span>Plan</span>
												<hr className="line-info" />
											</Col>
										</Row>
										<Row>
											<ListGroup>
												<ListGroupItem>350 messages</ListGroupItem>
												<ListGroupItem>10K emails</ListGroupItem>
												<ListGroupItem>24/7 Support</ListGroupItem>
											</ListGroup>
										</Row>
									</CardBody>
									<CardFooter className="text-center">
										<Button className="btn-simple" color="info">
											Get plan
										</Button>
									</CardFooter>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
				<Footer />
			</div>
		</>
	);
}
