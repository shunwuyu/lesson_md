import store from 'store2';

export default {
	setCity(state, city) {
		state.city = city;
		store.local.set('city', city);
	}
}