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
import {
	Button,
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap';

export default function IndexNavbar() {
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	const [collapseOut, setCollapseOut] = React.useState('');
	const [color, setColor] = React.useState('navbar-transparent');
	React.useEffect(() => {
		window.addEventListener('scroll', changeColor);
		return function cleanup() {
			window.removeEventListener('scroll', changeColor);
		};
	}, []);
	const changeColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			setColor('nav-line');
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			setColor('navbar-transparent');
		}
	};
	const toggleCollapse = () => {
		document.documentElement.classList.toggle('nav-open');
		setCollapseOpen(!collapseOpen);
	};
	const onCollapseExiting = () => {
		setCollapseOut('collapsing-out');
	};
	const onCollapseExited = () => {
		setCollapseOut('');
	};

	return (
		<Navbar className={'fixed-top ' + color} color-on-scroll="100" expand="lg">
			<Container>
				<div className="navbar-translate">
					<NavbarBrand to="/" tag={Link} id="navbar-brand">
						<span>DApp• </span>
						Web3 React
					</NavbarBrand>
					<UncontrolledTooltip placement="bottom" target="navbar-brand">
						Different web
					</UncontrolledTooltip>
					<button
						aria-expanded={collapseOpen}
						className="navbar-toggler navbar-toggler"
						onClick={toggleCollapse}
					>
						<span className="navbar-toggler-bar bar1" />
						<span className="navbar-toggler-bar bar2" />
						<span className="navbar-toggler-bar bar3" />
					</button>
				</div>
				<Collapse
					className={'justify-content-end ' + collapseOut}
					navbar
					isOpen={collapseOpen}
					onExiting={onCollapseExiting}
					onExited={onCollapseExited}
				>
					<div className="navbar-collapse-header">
						<Row>
							<Col className="collapse-brand" xs="6">
								<a href="#pablo" onClick={(e) => e.preventDefault()}>
									DApp•React
								</a>
							</Col>
							<Col className="collapse-close text-right" xs="6">
								<button
									aria-expanded={collapseOpen}
									className="navbar-toggler"
									onClick={toggleCollapse}
								>
									<i className="tim-icons icon-simple-remove" />
								</button>
							</Col>
						</Row>
					</div>
					<Nav navbar>
						<NavItem>
							<Button className="nav-link d-none d-lg-block" color="primary">
								<i className="tim-icons icon-wallet-43" /> Connect Wallet
							</Button>
						</NavItem>
						<NavItem>
							{/* <Button
								className="nav-link d-none d-lg-block"
								color="default"
								onClick={scrollToDownload}
							>
								<i className="tim-icons icon-cloud-download-93" /> Download
							</Button> */}
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
}
