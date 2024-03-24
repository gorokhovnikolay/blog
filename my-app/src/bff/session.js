export const session = {
	list: {},
	addHash(user) {
		this.list[user.session] = user;
	},
	removeHash({ session }) {
		delete this.list[session];
	},
	checkAccess(user, accessRoles) {
		console.log(!!this.list[user.session]);
		console.log(accessRoles.includes(user.roleId));
		return this.list[user.session] && accessRoles.includes(user.roleId);
	},
};
