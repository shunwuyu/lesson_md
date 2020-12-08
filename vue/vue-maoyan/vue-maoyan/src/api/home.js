import axios from 'axios'

export function getMoiveList() {
	return axios.get('/api/home.json', {}).then((res) => {
		return Promise.resolve(res.data)
	})
}