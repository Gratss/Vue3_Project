<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        (v) => !!v || "Введите электронную почту",
        (v) => /.+@.+\..+/.test(v) || "Адрес электронной почты недействителен",
      ],
      passwordRules: [
        (v) => !!v || "Введите пароль",
        (v) =>
          (v && v.length >= 6) ||
          "Пароль должен содержать больше или равняться 6 символам",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Введите пароль ещё раз",
        (v) => v === this.password || "Пароль должен совпадать",
      ],
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        };
        console.log(user);
      }
    },
  },
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <v-card class="elevetion-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Зарегистрироваться</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                text-field
                prepend-icon="mdi-account"
                name="email"
                label="Электронная почта"
                type="email"
                v-model="email"
                :rules="emailRules"
              >
              </v-text-field>
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
            <v-btn color="primary" @click="onSubmit" :disabled="!valid">
              Зарегистрироваться
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>