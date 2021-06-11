import React from 'react';
// reactstrap components
import { UncontrolledAlert, Container } from 'reactstrap';

export default function Alert({ message }) {
	return (
		<UncontrolledAlert className="alert-with-icon" color="primary">
			<span data-notify="icon" className="tim-icons icon-coins" />
			<span>
				<b>Congrats! -</b>
				{message}
			</span>
		</UncontrolledAlert>
	);
}
