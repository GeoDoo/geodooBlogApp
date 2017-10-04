const api = {
	fetchSiteInfo() {
		let url = 'http://geodoo.work/wp-json';
		return fetch(url).then((res) => res.json()); 
	},
	fetchPosts() {
		let url = 'http://geodoo.work/wp-json/wp/v2/posts';
		return fetch(url).then((res) => res.json());
	}
};

export default api;