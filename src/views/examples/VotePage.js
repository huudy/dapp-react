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
import React, { useState,useEffect } from 'react';
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
import { ethers } from 'ethers';
import { store } from 'react-notifications-component';
import Election from '../../artifacts/contracts/Election.sol/Election.json';
const electionAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export default function VotePage() {
	const [candidates, setCandidates] = useState([]);
	const [accounts, setAccounts] = useState({});
	const notification = {
		container: 'center',
		animationIn: ['animate__animated', 'animate__fadeIn'],
		animationOut: ['animate__animated', 'animate__fadeOut'],
		dismiss: {
			duration: 5000,
			onScreen: true,
			showIcon: true,
		},
	};



	useEffect(() => {
		document.body.classList.toggle('landing-page');
		requestAccount();
		fetchCandidates();
		listenForVotes();
		// Specify how to clean up after this effect:
		return function cleanup() {
			document.body.classList.toggle('landing-page');
		};
	}, []);

	async function requestAccount() {
		const accounts = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});
		console.log(accounts);
		setAccounts(accounts);
		store.addNotification({
			title: 'Success !',
			message: 'Wallet connected. Enjoy!',
			type: 'success',
			...notification,
		});
		// await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	//candidate that is fetchet from smart contract is an array so we taking out first three items
	const addCandidate = ([id, name, desc, work, motto, voteCount]) => {
		setCandidates((prev) => {
			const index = prev.map((c) => c.id).indexOf(id);
			if (index === -1) {
				return [
					...prev,
					{
						id,
						name,
						desc,
						work,
						motto,
						voteCount,
					},
				];
			} else {
				const copy = [...prev];
				copy[index] = { ...copy[index], voteCount };
				return copy;
			}
		});
	};
	const fetchCandidates = async () => {
		if (typeof window.ethereum !== 'undefiend') {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const contract = new ethers.Contract(
				electionAddress,
				Election.abi,
				provider
			);
			try {
				const count = await contract.candidatesCount();
				const promises = [...Array(count).keys()].map((i) => {
					return contract.candidates(++i);
				});
				const fetchedCandidates = await Promise.all(promises);
				fetchedCandidates.forEach((c) => {
					addCandidate(c);
				});
			} catch (err) {
				handleError(err);
			}
		}
	};
	const listenForVotes = () => {
		if (typeof window.ethereum !== 'undefiend') {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const contract = new ethers.Contract(
				electionAddress,
				Election.abi,
				provider
			);
			try {
				contract.on('votedEvent', (e) => {
					fetchCandidates();
					store.addNotification({
						title: 'News !',
						message: 'New vote has been just placed',
						type: 'info',
						...notification,
					});
				});
			} catch (err) {
				handleError(err);
			}
		}
	};
	const vote = async (id) => {
		if (typeof window.ethereum !== 'undefiend') {
			// const [account] = await window.ethereum.request({
			// 	method: 'eth_requestAccounts',
			// });
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				electionAddress,
				Election.abi,
				signer
			);
			try {
				const transaction = await contract.vote(id, { from: accounts[0] });
				await transaction.wait();

				store.addNotification({
					title: 'Success !',
					message: 'Vote successfully saved',
					type: 'success',
					...notification,
				});
			} catch (err) {
				handleError(err);
			}
		}
	};

	const handleError = (error) => {
		const REVERT = 'revert';
		let message = '';
		if (error.data) {
			const index = error.data.message.indexOf(REVERT) + REVERT.length;
			message = error.data.message.substring(index);
		} else {
			message = error.message;
		}

		store.addNotification({
			title: 'Error !',
			message: message,
			type: 'danger',
			...notification,
		});
	};

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
							<Col md="6">
								<hr className="line-info" />
								<h1>
									Choose the <span className="text-info">candidate</span>
								</h1>
							</Col>
						</Row>
						<Row>
							{candidates.map((i) => {
								return (
									<Col key={i.id} md="6">
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
														<h4 className="text-uppercase">{i.name}</h4>
														<span>Votes</span>
														<p>{i.voteCount}</p>
														<hr className="line-primary" />
													</Col>
												</Row>
												<Row>
													<ListGroup>
														<ListGroupItem>{i.desc}</ListGroupItem>
														<ListGroupItem>{i.work}</ListGroupItem>
														<ListGroupItem>{i.motto}</ListGroupItem>
													</ListGroup>
												</Row>
											</CardBody>
											<CardFooter className="text-center">
												<Button
													className="btn-simple"
													color="primary"
													onClick={() => vote(i.id)}
												>
													Vote
												</Button>
											</CardFooter>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Container>
				</section>
				<Footer />
			</div>
		</>
	);
}
