<template>
  <v-container fluid class="container-fluid log-in-bg">
    <v-avatar :tile="true" :size="300" color="transparent">
      <img src="../assets/logomiapplogin.svg" alt="avatar">
    </v-avatar>
    <v-container class="log-in-container">
      <h5 style="font-size: 30px; font-weight: 300;">Log In</h5>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <router-link to="#"><h5 style="font-size: 15px; font-weight: 300;">Forgot password?</h5></router-link>
        <router-link to="/Profile"><v-btn class="submit-btn">submit</v-btn></router-link>
      </v-form>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'LogIn',
    data() {
      return {
      }
    },
    methods: {
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .log-in-bg {
    height: 100vh;
    background-image: url('../assets/backgroundlogin.jpg');
    background-size: cover;
  }
  
  .log-in-container {
    padding: 30px;
    width: 600px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.925);
  }
  
   ::placeholder {
    background-color: rgba(0, 0, 255, 0);
  }
  
  .fas {
    margin-top: 15px;
  }

  .submit-btn {
    background-color: #93278f !important;
    color: white;
    letter-spacing: 2px;
  }

   @media (max-width: 767px) {
    .log-in-container {
    width: 370px;
  }
  }
</style>
