import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: ""
	});
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contact.map((item, index) => {
							return (
								<div key={item.id}>
									<ContactCard
										onDelete={() => setState({ showModal: true, id: item.id })}
										photo={item.photo}
										full_name={item.full_name}
										email={item.email}
										phone={item.phone}
										address={item.address}
									/>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal itemId={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
