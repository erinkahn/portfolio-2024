/* eslint-disable no-unused-expressions, import/first */
import React, { useState } from 'react';
import { processForm } from './utilities';

const Form = () => {
	const [state, setState] = useState({
		fullName: '',
		emailAddress: '',
		message: ''
	})

	const handleFormSubmit = (e) => {
		e.preventDefault();
		processForm({ 
			fullName: state.fullName, 
			emailAddress: state.emailAddress, 
			message: state.message 
		});
	};

	return (
		<div className="form-container">
			<form className="Form" onSubmit={handleFormSubmit}>
				<Field
					label="Full Name"
					name="fullName"
					value={fullName}
					onChange={(e) => setState({
						...state, 
						fullName: e.target.value
					})}
				/>
				<Field
					label="Email Address"
					name="email"
					value={emailAddress}
					onChange={(e) => setState({
						...state, 
						emailAddress: e.target.value
					})}
				/>
				<Field
					label="message"
					name="message"
					value={message}
					onChange={(e) => setState({
						...state, 
						message: e.target.value
					})}
				/>
				<button className="Form-submitButton">
					Submit
				</button>
			</form>
		</div>
	);
};

const Field = ({
	label,
	name,
	type,
	value,
	...inputProps
	}) => {
	return (
		<div className="Form-fieldWrapper">
			<label className="Form-fieldLabel" htmlFor={name}>
				{label}
			</label>

			<input
				className="Form-fieldInput"
				id={name}
				name={name}
				type="text"
				value={value}
				{...inputProps}
			/>
		</div>
	);
};

export default Form;
