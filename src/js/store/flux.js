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
			}
			// postNewAgenda(name) {
			// 	fetch("https://assets.breatheco.de/apis/fake/contact/", {
			// 		method: "POST",
			// 		headers: new Headers(),
			// 		body: {
			// 			full_name: "Nimitz",
			// 			email: "nimitz@destroyer.com",
			// 			agenda_slug: "Nimitz",
			// 			address: ""
			// 		}
			// 	})
			// 		.then(res => res.json())
			// 		.then(data => console.log(data))
			// 		.catch(err => console.log(err));
			// }
		}
	};
};

export default getState;
