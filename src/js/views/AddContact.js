import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({});

	const handleChange = event => {
		setState({ ...state, [event.target.name]: event.target.value, agenda_slug: "whatever" });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log("submit was clicked");
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							onChange={handleChange}
						/>
					</div>

					<Link
						type="button"
						className="btn btn-primary form-control"
						onSubmit={handleSubmit()}
						onClick={() => actions.addContact(state)}>
						save
					</Link>
					<Link className="mt-3 w-100 text-center" to="/Contacts">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
