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

export default function Examples() {
	return (
		<div className="section section-examples" data-background-color="black">
			<img
				alt="..."
				className="path"
				src={require('assets/img/path1.png').default}
			/>
			<div className="space-50" />
			<Container className="text-center">
				<Row>
					<Col sm="6">
						<Link to="vote">
							<img
								alt="..."
								className="img-raised"
								src={require('assets/img/vote-page.png').default}
							/>
						</Link>
						<Button
							className="btn-simple btn-round"
							color="primary"
							to="vote"
							tag={Link}
						>
							View Voting Page
						</Button>
					</Col>
					<Col sm="6">
						<Link to="upload">
							<img
								alt="..."
								className="img-raised"
								src={require('assets/img/upload-page.png').default}
							/>
						</Link>
						<Button
							className="btn-simple btn-round"
							color="primary"
							to="upload"
							tag={Link}
						>
							View Upload to IPFS Page
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
