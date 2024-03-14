export const session = {
	list: {},
	addHash(user) {
		this.list[user.session] = user;
	},
	removeHash({ session }) {
		delete this.list[session];
	},
};
