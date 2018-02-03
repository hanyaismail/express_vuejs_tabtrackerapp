import Api from '@/services/Api'

export default {
	// From Register.vue when submit button pressed
	// credentials = {email: this.email, password: this.password} => from input
	register (credentials) {
		return Api().post('register', credentials)
	},

	// From Login.vue when login button pressed
	// credentials = {email: this.email, password: this.password} => from input
	login (credentials) {
		return Api().post('login', credentials)
	}
}

// Authentication.register({
// 	email: 'testing@gmail.com',
// 	password: '123456'
// })