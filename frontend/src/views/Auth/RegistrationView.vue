<template>
	<v-container fluid fill-height>
		<v-row>
			<v-col cols="8" offset="2">
			<v-card class="elevetion-12">
			<v-toolbar dark color="primary">
			<v-toolbar-title> Зарегистрироваться </v-toolbar-title>
			</v-toolbar>
			<v-card-text>
			<v-form v-model="valid" ref="form" lazy-validation>
				<v-text-field
				prepend-icon="mdi-account"
				name="email"
				label="Электронная почта"
				type="email"
				v-model="email"
				:rules="emailRules"
				></v-text-field>
				<v-text-field
				prepend-icon="mdi-lock"
				name="password"
				label="Пароль"
				type="password"
				v-model="password"
				:rules="passwordRules"
				></v-text-field>
                <v-text-field  
					prepend-icon="mdi-lock" 
					name="confirm-password" 
					label="Подтвердите пароль" 
					type="password" 
					v-model="confirmPassword"
					:rules="confirmPasswordRules" 
					></v-text-field>
			</v-form>
			</v-card-text>
			<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn color="primary" @click="onSubmit" :loading="loading"	:disabled="!valid || loading">
                Создать аккаунт
			</v-btn>
			</v-card-actions>
			</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
  
<script>
export default{
data(){
return{
email: "",
password: "",
confirmPassword: "",
valid: false,
emailRules: [(v) => !!v || "E-mail is required",(v) => /.+@.+\..+/.test(v) || "Введите электронную почту",],
passwordRules: [(v) => !!v || "Name is required",(v) =>(v && v.length >= 6) ||"Пароль должен состять не менее, чем из 6 символов",],
confirmPasswordRules: [v => !!v || 'Password is required',v => v === this.password || 'Пароль должен совпадать']

        }
    },
    computed: {
	loading() {
		return this.$store.getters.loading
	}
},
methods:{
onSubmit(){
	if (this.$refs.form.validate()){
	const user = {
		email: this.email,
		password: this.password
	}
	this.$store.dispatch('registerUser', user)
	.then(() => {
		this.$router.push("/")
	})
	.catch((err) => {
		console.log(err.message)
	})
}
	}
}
};
</script>
    