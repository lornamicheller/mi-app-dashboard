<template>
  <v-app>
    <v-navigation-drawer light class="white elevation-4" v-model="drawer" fixed app>
      <v-list dense>
        <v-container fluid style="padding: 0;">
          <v-avatar :tile="true" :size="90" color="transparent">
            <img src="../assets/logomiappgris.svg" alt="avatar">
          </v-avatar>
        </v-container>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="icon">calendar_today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link to="/Appointment">
              <v-list-tile-title class="nav-item">Appointment</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="icon">view_list</v-icon>
          </v-list-tile-action>
          <router-link to="/WaitList">
          <v-list-tile-content>
            <v-list-tile-title class="nav-item">WaitList</v-list-tile-title>
          </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="icon">person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link to="/Profile">
              <v-list-tile-title class="nav-item">Profile</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
  
        <v-list-tile @click="" class="hidden-sm-and-up">
          <v-list-tile-action>
            <v-icon class="icon">lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" class="hidden-sm-and-up">
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
  
    <!-- List -->
    <v-content>
      <v-container>
      <v-toolbar>
        <h3 style="margin-top: 10px;">Wait List</h3>
      <v-layout align-end justify-end row>
         <v-flex xs2>
              <v-switch v-model="people" label="Off" value="Off" style="margin-top: 30px;"></v-switch>
        </v-flex>
      </v-layout>
      </v-toolbar>
      <v-data-table light :rows-per-page-items="rows" :headers="headers" :items="cuadresList" :search="search">
        <template slot="items" slot-scope="props">
                                     <td class="text-xs-left">{{props.item.name}}</td>
                                     <td class="text-xs-left">{{props.item.phone}}</td>
                                     <td class="text-xs-left">{{props.item.email}}</td>
                                     <td class="text-xs-left">{{props.item.insurance}}</td>
                                     <td class="text-xs-left">{{props.item.time}}</td>
                                     <td class="text-xs-left">{{props.item.expectedTurn}}</td>
                                     <td class="text-xs-left"><v-checkbox input-value="true" value style="margin-top: 25px;"></v-checkbox></td>
                                     <td class="text-xs-left"><v-checkbox input-value="true" value style="margin-top: 25px;"></v-checkbox></td>
                                     <td class="text-xs-left"><v-checkbox input-value="false" value style="margin-top: 25px;"></v-checkbox></td>
                                     <td class="text-xs-left"><v-btn fab depressed dark medium color="transparent"><v-icon class="icon">delete</v-icon></v-btn></td>

      </template>
             <v-alert slot="no-results" :value="true" color="error" icon="warning">
               Your search for "{{ search }}" found no results.
             </v-alert>
           </v-data-table>
</v-container>
      <!-- -->
      <!-- add floating button -->
      <v-layout align-end justify-end row>
        <v-flex xs2>
          <v-btn fab dark small color="indigo">
            <v-icon class="add-btn" @click.stop="dialog = true">add</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-content>
    <!--  -->
    <v-footer light app>
      <span class="ma-auto">&copy; MiApp 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'PatientList2',
    data() {
      return {
        radios: 'radio-1',
        people: ['Off'],
        drawer: null,
        dialog: false,
        headers: [{
            text: 'Name',
            align: 'left',
            value: 'name'
          },
          {
            text: 'Phone',
            align: 'left',
            value: 'phone'
          },
          {
            text: 'Email',
            align: 'left',
            value: 'email'
          },
          {
            text: 'Insurance',
            align: 'left',
            value: 'insurance'
          },
          {
            text: "Time",
            align: 'left',
            value: 'time'
          },
          {
            text: "Expected Turn",
            align: 'left',
            value: 'expectedTurn'
          },
           {
            text: 'In Office',
            align: 'left',
            value: 'inOffice'
          },
           {
            text: 'In Consult',
            align: 'left',
            value: 'check'
          },
           {
            text: 'Out of Consult',
            align: 'left',
            value: 'check'
          },
          {
            text: 'Action',
            align: 'left',
            value: 'action'
          },
        ],
        end: "",
        rows: [
          25,
          50,
          {
            text: "$vuetify.dataIterator.rowsPerPageAll",
            value: -1
          }
        ],
        cuadresList: [{
          name: "Jane Doe",
          phone: "787-777-7777",
          email: "lornam02091@gmail.com",
          insurance: "Triple S",
          expectedTurn: "8:45am",
          time: "8:00am"
        }]
      }
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
  
  .name-container,
  .phone-container,
  .insurance-container,
  .time-container {
    padding-top: 15px;
    padding-bottom: 10px;
    background: white;
  }
  
  .v-content {
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;
  }
</style>
