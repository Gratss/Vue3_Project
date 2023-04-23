export default {
	state: {
     user: null
},
	mutations: {},
	actions: {},
	getters: {
     user(state) {
            	return state.user
	}
}
}
class User {
    constructor(id, email, password) {
    this.id = id
    this.email = email
    this.password = password
    }
    }
    mutations: {
        setUser(state,payload) 
        {
        console.log(payload)
        state.user = payload
        }
        }
        actions: {
        registerUser({commit},{email, password})
        {
        //Здесь запрос на сервер для регистрации
        commit('setUser', new User(1, email, 	password))
        }
        }
            