<template>
<v-flex   xs12
          sm8
          md6>
  <v-img src="/icon.png" max-height="100" max-width="100"></v-img>

  <v-form
    v-if="!$auth.loggedIn"
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      rounded
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      type="email"
      required
    ></v-text-field>

    <v-text-field
      rounded
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      label="Password"
      type="password"
      required
    ></v-text-field>


    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Sign In
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>

</v-flex>
</template>

<script>
  import Notiflix from "notiflix";

  export default {
    name: "index",
    // auth: false,
    // middleware: "guest",
    layout: "auth",
    data: () => ({
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
    }),

    methods: {
      async validate() {
        Notiflix.Loading.circle({
          svgColor: '#1030ac',
        });
        // this.$refs.form.validate()
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          }
        }).then(res => {
          Notiflix.Loading.remove();
        }).catch(error => {
          Notiflix.Loading.remove();
          console.log(error);

        });
      },
      reset() {
        this.$refs.form.reset();
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      },
    },
  };
</script>

<style scoped>

</style>
