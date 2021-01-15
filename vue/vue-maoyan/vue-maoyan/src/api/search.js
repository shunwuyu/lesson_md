import axios from 'axios'

export function getHotList() {
	return axios.get('/api/search.json', {}).then((res) => {
		return Promise.resolve(res.data)
	})
}