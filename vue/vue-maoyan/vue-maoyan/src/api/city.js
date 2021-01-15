import axios from 'axios'

export function getCityList() {
	return axios.get('/api/city.json', {}).then((res) => {
		return Promise.resolve(res.data)
	})
}