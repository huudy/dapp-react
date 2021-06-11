const { expect } = require('chai');

describe('Election', function () {
	let Election, election, accounts;

	beforeEach(async () => {
		Election = await ethers.getContractFactory('Election');
		election = await Election.deploy();
		await election.deployed();
		accounts = await ethers.getSigners();
	});

	it('Should initialize two candidates', async function () {
		expect(await election.candidatesCount()).to.equal(2);
	});
	it('Should initialize with correct values', async function () {
		const candidate = await election.candidates(1);
		expect(candidate.name).to.equal('Donald Trump');
		expect(candidate.desc).to.equal('A working man');
		expect(candidate.work).to.equal('President');
		expect(candidate.motto).to.equal('Make America Great Again!');

		const candidate2 = await election.candidates(2);
		expect(candidate2.name).to.equal('Joe Biden');
		expect(candidate2.desc).to.equal('Not sure');
		expect(candidate2.work).to.equal('Dunno');
		expect(candidate2.motto).to.equal('Dunno');
	});
	it('Should throw an exception when candidate does not exist', async function () {
		try {
			await election.vote(0, {
				from: accounts[0].address,
			});
		} catch (err) {
			console.log(err.message);
			expect(err.message).to.include('revert Candidate not found');
		}
	});

	it('Should throw exception for double voting', async function () {
		try {
			await election.vote(1, {
				from: accounts[0].address,
			});
			await election.vote(1, {
				from: accounts[0].address,
			});
		} catch (err) {
			console.log(err.message);
			expect(err.message).to.include('revert We already counted your vote');
		}
	});
	it('Should cast vote through voteEvent', async function () {
		await election.vote(1, { from: accounts[0].address });
		election.on('votedEvent', (e) => {
			expect(e).to.be.equal(1);
		});
	});
});
