import axios from 'axios'

export function getCinemaList() {
	return axios.get('/api/cinema.json', {}).then((res) => {
		return Promise.resolve(res.data)
	})
}