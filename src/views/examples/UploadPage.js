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
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap';
import Footer from 'components/Footer/Footer.js';

import IndexNavbar from 'components/Navbars/IndexNavbar';
// const { create } = require('ipfs-http-client');

export default function UploadPage() {
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
									We keep your stuff <br />
									<span className="text-white">stored on IPFS</span>
								</h1>
								<p className="text-white mb-3">
									We make sure Your personal files are stored in the
									decentralized manner.
								</p>
								<div className="btn-wrapper mb-3">
									<p className="category text-success d-inline">
										Choose your file and let's go!
									</p>
									<a
										className="btn-link"
										color="success"
										href="#upload"
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
									src={require('assets/svg/upload.svg').default}
								/>
							</Col>
						</Row>
					</div>
				</div>
				<section id="upload" className="section">
					<Container>
						<Row>
							<Col md="6">
								<Card className="card-plain">
									<CardHeader>
										<h1 className="profile-title text-left">Upload</h1>
										<h5 className="text-on-back">03</h5>
									</CardHeader>
									<CardBody>
										<Form>
											<Row>
												<Col md="6">
													<FormGroup>
														<label>Your Name</label>
														<Input defaultValue="Mike" type="text" />
													</FormGroup>
												</Col>
												<Col md="6">
													<FormGroup>
														<label>Email address</label>
														<Input placeholder="mike@email.com" type="email" />
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col md="6">
													<FormGroup>
														<label>Phone</label>
														<Input defaultValue="001-12321345" type="text" />
													</FormGroup>
												</Col>
												<Col md="6">
													<FormGroup>
														<label>Company</label>
														<Input defaultValue="CreativeTim" type="text" />
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col md="12">
													<FormGroup>
														<label>Message</label>
														<Input placeholder="Hello there!" type="text" />
													</FormGroup>
												</Col>
											</Row>
											<Button
												className="btn-round float-right"
												color="primary"
												data-placement="right"
												id="tooltip341148792"
												type="button"
											>
												Send text
											</Button>
											<UncontrolledTooltip
												delay={0}
												placement="right"
												target="tooltip341148792"
											>
												Can't wait for your message
											</UncontrolledTooltip>
										</Form>
									</CardBody>
								</Card>
							</Col>
							<Col className="ml-auto" md="4">
								<div className="info info-horizontal">
									<div className="icon icon-primary">
										<i className="tim-icons icon-square-pin" />
									</div>
									<div className="description">
										<h4 className="info-title">Find us at the office</h4>
										<p>
											Bld Mihail Kogalniceanu, nr. 8, <br />
											7652 Bucharest, <br />
											Romania
										</p>
									</div>
								</div>
								<div className="info info-horizontal">
									<div className="icon icon-primary">
										<i className="tim-icons icon-mobile" />
									</div>
									<div className="description">
										<h4 className="info-title">Give us a ring</h4>
										<p>
											Michael Jordan <br />
											+40 762 321 762 <br />
											Mon - Fri, 8:00-22:00
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<Footer />
			</div>
		</>
	);
}
