const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			fetchdata() {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/whatever")
					.then(data => {
						return data.json();
					})
					.then(res => {
						setStore({
							...setStore,
							contact: res
						});
					})
					.catch(e => console.log(e));
			},
			deleteContact(id) {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				}).catch(e => console.log(e));
			},
			addContact(obj) {
				const Url = "https://assets.breatheco.de/apis/fake/contact/";
				let data = {
					full_name: obj.full_name,
					agenda_slug: obj.agenda_slug,
					email: obj.email,
					address: obj.address,
					phone: obj.phone
				};
				const otherParams = {
					headers: {
						"content-type": "application/json; charset=UTF-8"
					},
					body: JSON.stringify(data),
					method: "POST"
				};
				fetch(Url, otherParams);
			}
		}
	};
};

export default getState;
