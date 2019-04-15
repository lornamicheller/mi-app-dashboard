<template>
  <v-app>
    <v-navigation-drawer light class="white elevation-4" v-model="drawer" fixed app>
      <v-list dense>
        <v-container fluid style="padding: 0;">
          <v-avatar :tile="true" :size="90" color="transparent">
            <img src="../assets/logomiappgris.svg" alt="avatar">
          </v-avatar>
        </v-container>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="icon">calendar_today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link to="/Appointment">
              <v-list-tile-title class="nav-item">Appointment</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="icon">view_list</v-icon>
          </v-list-tile-action>
          <router-link to="/WaitList">
          <v-list-tile-content>
            <v-list-tile-title class="nav-item">WaitList</v-list-tile-title>
          </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="icon">person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link to="/Profile">
              <v-list-tile-title class="nav-item">Profile</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
  
        
        <v-list-tile class="hidden-sm-and-up">
          <v-list-tile-action>
            <v-icon class="icon">lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="hidden-sm-and-up">
          <v-list-tile-action>
            <v-icon class="icon">lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="nav-bar" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-avatar :tile="true" :size="120" color="transparent">
        <img src="../assets/logomiaapp.svg" alt="avatar">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon left>lock</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  
    <!-- Profile -->
    <v-content>
      <v-container fluid>
        <v-avatar :tile="tile" :size="150" color="grey lighten-4">
          <img src="../assets/doc.jpg" class="profile-pic" alt="avatar">
        </v-avatar>
        <v-form v-model="valid">
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 md4>
                <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" type="text" append-icon="edit" prepend-inner-icon="account_circle" required></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" type="text" append-icon="edit" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-form v-model="valid">
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 md8>
                <v-select :items="items" label="Specialty" append-icon="edit" prepend-inner-icon="add_comment"></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-form v-model="valid">
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 md8>
                <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Address" type="text" append-icon="edit" prepend-inner-icon="place" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-form v-model="valid">
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 md8>
                <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Phone" type="tel" append-icon="edit" prepend-inner-icon="phone" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-form v-model="valid">
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 md8>
                <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Health Insurances Plans" type="tel" append-icon="edit" prepend-inner-icon="credit_card" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-form v-model="valid">
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 md8>
                <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Estimated Time Per Patient" type="tel" append-icon="edit" prepend-inner-icon="access_time" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-flex row justify-center xs12>
          <i class="far fa-star icon" style="margin-top: 3px; margin-right: 10px;"></i>
          <span class="review-number" style="margin-right: 10px;">0</span>
          <p class="review-dr" style="font-weight: 800;">Reviews</p>
        </v-flex>
      </v-container>
      <router-view/>
    </v-content>
    <!--  -->
    <v-footer light app>
      <span class="ma-auto">&copy; MiApp 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        drawer: null,
        items: ['Gynecologist', 'Psyquiatric', 'Oncologist', 'Urologist']
      };
    }
  }
</script>

<style>
  .nav-bar {
    background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);
  }
  
  .icon {
    color: #93278f !important;
  }
  
  .nav-item {
    color: #29abe2;
    font-weight: 800;
  }
</style>
